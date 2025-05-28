from django.conf import settings
from django.contrib import messages
from django.contrib.sites.shortcuts import get_current_site
from django.core import signing
from django.core.mail import EmailMultiAlternatives
from django.http import HttpResponseRedirect
from django.shortcuts import redirect
from django.template.loader import render_to_string
from django.urls import reverse_lazy
from django.utils.encoding import force_str
from django.views.generic import CreateView, TemplateView

from main.forms import RegistrationForm
from main.models import User


class ActivationError(Exception):
    def __init__(self, message, code=None, params=None):
        super().__init__(message, code, params)
        self.message = message
        self.code = code
        self.params = params


class RegistrationView(CreateView):
    model = User
    form_class = RegistrationForm
    email_body_template = 'profile/registration/activation_email_body.txt'
    email_html_template = 'profile/registration/activation_email.html'
    email_subject_template = 'profile/registration/activation_email_subject.txt'
    template_name = 'profile/registration/registration_form.html'
    extra_context = {'title': 'Регистрация'}

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return redirect('main:profile-index')
        return super(RegistrationView, self).dispatch(request, *args, **kwargs)

    def form_valid(self, form):
        instance = form.save(commit=False)
        instance.set_password(instance.password)
        instance.is_active = False
        instance.save()
        self.send_activation_email(instance)
        messages.success(self.request, 'Вы успешно зарегистрировались')
        return redirect('main:login')

    def send_activation_email(self, user):
        # Send the activation email. The activation key is the username, signed using TimestampSigner.
        activation_key = self.get_activation_key(user)
        context = self.get_email_context(activation_key)
        context['user'] = user
        subject = render_to_string(
            template_name=self.email_subject_template,
            context=context,
            request=self.request,
        )
        # Force subject to a single line to avoid header-injection issues.
        subject = ''.join(subject.splitlines())
        message_text = render_to_string(template_name=self.email_body_template, context=context, request=self.request)
        message_html = render_to_string(template_name=self.email_html_template, context=context, request=self.request)
        msg = EmailMultiAlternatives(subject, message_text, settings.DEFAULT_FROM_EMAIL, [user.email])
        msg.attach_alternative(message_html, 'text/html')
        msg.send()

    def get_email_context(self, activation_key):
        scheme = "https" if self.request.is_secure() else "http"
        return {
            "scheme": scheme,
            "activation_key": activation_key,
            "expiration_days": settings.ACCOUNT_ACTIVATION_DAYS,
            "site": get_current_site(self.request),
        }

    def get_activation_key(self, user):
        return signing.dumps(obj=user.get_username(), salt=settings.REGISTRATION_SALT)


class ActivationView(TemplateView):
    ALREADY_ACTIVATED_MESSAGE = 'Аккаунт уже активирован.'
    BAD_USERNAME_MESSAGE = 'Аккаунт недействителен'
    EXPIRED_MESSAGE = 'Срок действия кода активации истек'
    INVALID_KEY_MESSAGE = 'Ключ активации недействителен'
    success_url = reverse_lazy('main:django_registration_activation_complete')
    template_name = 'profile/registration/activation_failed.html'

    def get_success_url(self, user=None):  # pylint: disable=unused-argument
        return force_str(self.success_url)

    def get(self, request, *args, **kwargs):
        extra_context = {}
        try:
            activated_user = self.activate(*args, **kwargs)
        except ActivationError as exc:
            extra_context['activation_error'] = {'message': exc.message, 'code': exc.code, 'params': exc.params}
        else:
            return HttpResponseRedirect(force_str(self.get_success_url(activated_user)))
        context_data = self.get_context_data()
        context_data.update(extra_context)
        return self.render_to_response(context_data)

    def activate(self, *args, **kwargs):
        username = self.validate_key(kwargs.get("activation_key"))
        user = self.get_user(username)
        user.is_active = True
        user.save()
        return user

    def validate_key(self, activation_key):
        try:
            username = signing.loads(
                activation_key,
                salt=settings.REGISTRATION_SALT,
                max_age=settings.ACCOUNT_ACTIVATION_DAYS * 86400,
            )
            return username
        except signing.SignatureExpired:
            raise ActivationError(self.EXPIRED_MESSAGE, code='expired')
        except signing.BadSignature:
            raise ActivationError(
                self.INVALID_KEY_MESSAGE,
                code='invalid_key',
                params={'activation_key': activation_key},
            )

    def get_user(self, username):
        try:
            user = User.objects.get(**{User.USERNAME_FIELD: username})
            if user.is_active:
                raise ActivationError(self.ALREADY_ACTIVATED_MESSAGE, code='already_activated')
            return user
        except User.DoesNotExist:
            raise ActivationError(self.BAD_USERNAME_MESSAGE, code='bad_username')
