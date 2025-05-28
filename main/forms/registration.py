import re

from django import forms
from django.core.exceptions import ValidationError

from main.forms import BaseModelForm
from main.models import User


class RegistrationForm(BaseModelForm):
    password2 = forms.CharField(label='Повторите пароль', widget=forms.PasswordInput(attrs={'class': 'input'}))

    field_order = ['name', 'email', 'phone', 'password', 'password2']

    class Meta:
        model = User
        fields = ['name', 'email', 'password', 'phone']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'input'}),
            'email': forms.EmailInput(attrs={'class': 'input'}),
            'password': forms.PasswordInput(attrs={'class': 'input'}),
            'phone': forms.TextInput(attrs={'class': 'input phone-mask'}),
        }

    def clean_phone(self):
        phone = ''.join(filter(lambda i: i.isdigit(), self.cleaned_data['phone']))
        if phone[0] == 8:
            phone = '7' + phone[1:]
        if User.objects.filter(phone=phone).exists():
            raise ValidationError('Этот номер телефона уже зарегистрирован')
        return phone

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if User.objects.filter(email=email).exists():
            raise ValidationError("Эта электронная почта уже зарегистрирована")
        return email

    def clean_password(self):
        password = self.cleaned_data.get('password')
        if re.match(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$', password) is None:
            raise ValidationError('Пароль должен содержать английские буквы в обоих регистрах, числа, спецсимволы и быть минимум 8 символов')
        return password

    def clean_password2(self):
        password = self.cleaned_data.get('password')
        password2 = self.cleaned_data.get('password2')
        if password != password2:
            raise ValidationError('Пароли не совпадают')
        return password2
