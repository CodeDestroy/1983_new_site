from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import PasswordResetView, LoginView, LogoutView, PasswordChangeView, \
    PasswordChangeDoneView, PasswordResetDoneView, PasswordResetConfirmView, PasswordResetCompleteView
from django.urls import path, include, reverse_lazy, reverse
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView

from . import views
from .forms import CustomAuthenticationForm, CustomPasswordChangeForm, CustomPasswordResetForm
from django.conf import settings
from django.conf.urls.static import static
app_name = 'main'


urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('api/', include([
        path('complex/list/', csrf_exempt(views.ComplexListView.as_view()), name='api-complex-list'),
        path('quiz/calc/', csrf_exempt(views.CalcView.as_view()), name='api-quiz-calc'),
        path('quiz/save/', csrf_exempt(views.QuizView.as_view()), name='api-quiz-save')
    ])),
    path('article/', include([
        path('list/', views.ArticleList.as_view(), name='article-list'),
        path('<int:article_id>/', views.ArticlePage.as_view(), name='article-page'),
    ])),
    path('search/', include([
        path('list/', views.SearchList.as_view(), name='search-list'),
        path('map/', views.MapList.as_view(), name='map-list'),
    ])),
    path('feedback/', views.FeedbackView.as_view(), name='feedback-page'),
    path('feeds/', include([
        path('avito/', views.AvitoFeed.as_view(), name='avito-feed'),
        path('avito/new/', views.NewAvitoFeed.as_view(), name='new-avito-feed'),
        path('cian/', views.CianFeed.as_view(), name='cian-feed'),
        path('domclick/main/', views.DomClickFeed.as_view(), name='domclick-feed'),
        path('domclick/ya/', views.DomClickFeed.as_view(template_name='feeds/domclick/yandex.xml'),
             name='domclick-feed-ya'),
        path('yandex/', views.YandexFeed.as_view(), name='yandex-feed')
    ])),
    path('flats/<int:flat_id>/', views.FlatPage.as_view(), name='flat-page'),
    path('map/objects/', views.AjaxMapObjects.as_view(), name='ajax-map-objects'),
    path('builds/<int:build_id>/', views.BuildPage.as_view(), name='build-page'),
    path('about/', views.AboutView.as_view(), name='about'),
    path('contacts/', views.ContactView.as_view(), name='contacts'),
    path('mortgage/', views.MortgageView.as_view(), name='mortgage'),
    path('promo/', include([
        path('list/', views.PromoList.as_view(), name='promo-list'),
        path('<int:promo_id>/', views.PromoPage.as_view(), name='promo-page'),
    ])),
    path('policy/', TemplateView.as_view(
        template_name='policy.html', extra_context={'title': 'Политика конфиденциальности', 'url': reverse_lazy('main:policy-page')}
    ), name='policy-page'),
    path('privacy/', TemplateView.as_view(
        template_name='privacy.html', extra_context={'title': 'Согласие на обработку персональных данных', 'url': reverse_lazy('main:privacy-page')}),
        name='privacy-page'),
    path('commerce/', views.CommerceView.as_view(), name='commerce-page'),
    path('trade-in/', TemplateView.as_view(
        template_name='trade_in.html', extra_context={'title': 'Меняем старое на новое', 'url': reverse_lazy('main:trade-in-page')}),
         name='trade-in-page'),
    path('elite/', views.EliteView.as_view(), name='elite-page'),
    path('international/', TemplateView.as_view(
        template_name='international.html', extra_context={'title': 'Международная недвижимость', 'url': reverse_lazy('main:international-page')}),
        name='international-page'),
    path('moscow/', TemplateView.as_view(template_name='moscow.html', extra_context={
        'title': 'Актуальный каталог жилой недвижимости премиум-класса Москвы, Московской области, Турции и Северного Кипра',
        'url': reverse_lazy('main:moscow-page')
    }), name='moscow-page'),
    path('design/', TemplateView.as_view(template_name='design.html', extra_context={
        'title': 'Отделка и дизайн', 'url': reverse_lazy('main:design-page')}), name='design-page'),
    path('flip/', TemplateView.as_view(template_name='flip.html', extra_context={
        'title': 'Инвестиции в недвижимость', 'url': reverse_lazy('main:flip-page')}), name='flip-page'),
    path('recommendation/', TemplateView.as_view(template_name='recommendation.html', extra_context={
        'title': 'Зарабатывайте вместе с нами', 'url': reverse_lazy('main:recommendation-page')}), name='recommendation-page'),
    
    path('VTB/', TemplateView.as_view(template_name='agents/client_from_agent.html', extra_context={
        'title': 'Специальное предложение', 'url': reverse_lazy('main:index')}), name='client-from-vtb'),

    path('purchase/', TemplateView.as_view(template_name='purchase.html', extra_context={
        'title': 'Срочный выкуп квартир', 'url': reverse_lazy('main:purchase-page')}), name='purchase-page'),
    #path('home-sweet-home/', TemplateView.as_view(template_name='home.html', extra_context={
    #    'title': 'Дома и таунхаусы', 'url': reverse_lazy('main:home-page')}), name='home-page'),
    path('home-sweet-home/', views.HomeView.as_view(), name='home-page'),
    path('legal/', TemplateView.as_view(template_name='legal.html', extra_context={
        'title': 'Юридические услуги', 'url': reverse_lazy('main:legal-page')}), name='legal-page'),
    path('images/save/', views.SaveImage.as_view(), name='save-image'),
    path('bonus/', views.BonusList.as_view(), name='bonus-page'),
    path('forums/', include([
        path('dvizh-nedvizh/', TemplateView.as_view(template_name='forums/dvizh-nedvizh.html'), name='dvizh-nedvizh'),
        path('send-form/', views.ForumView.as_view(), name='send-event-form'),
        path('test/', TemplateView.as_view(template_name='forums/test.html'), name='test'),
        path('business-breakfast/', TemplateView.as_view(template_name='forums/business-breakfast.html'), name='business-breakfast')
    ])),
    #path('test/', TemplateView.as_view(template_name='forums/test.html'), name='test'),
    path('profile/', include([
        path('', login_required(views.ProfilePageView.as_view()), name='profile-index'),
        path('login/', LoginView.as_view(template_name='profile/registration/login.html',
                                         form_class=CustomAuthenticationForm,
                                         redirect_authenticated_user=True), name='login'),
        path('logout/', LogoutView.as_view(template_name='profile/registration/logged_out.html'), {'next_page': '/'},
             name='logout'),
        path('password/', include([
            path('change/', PasswordChangeView.as_view(success_url=reverse_lazy('main:password_change_done'),
                                                       form_class=CustomPasswordChangeForm,
                                                       template_name='profile/registration/password_change_form.html'),
                 name='password_change'),
            path('change/done/', PasswordChangeDoneView.as_view(
                template_name='profile/registration/password_change_done.html'), name='password_change_done'),
            path('reset/', PasswordResetView.as_view(
                form_class=CustomPasswordResetForm,
                email_template_name='profile/registration/password_reset_email.txt',
                html_email_template_name='profile/registration/password_reset_email.html',
                subject_template_name='profile/registration/password_reset_subject.txt',
                success_url=reverse_lazy('main:password_reset_done'),
                template_name='profile/registration/password_reset_form.html'), name='password_reset'),
            path('reset/done/', PasswordResetDoneView.as_view(
                template_name='profile/registration/password_reset_done.html'), name='password_reset_done'),
            path('reset/<uidb64>/<token>/', PasswordResetConfirmView.as_view(
                template_name='profile/registration/password_reset_confirm.html',
                success_url=reverse_lazy('main:password_reset_complete')), name='password_reset_confirm'),
            path('reset/done/', PasswordResetCompleteView.as_view(template_name='profile/registration/password_reset_done.html'),
                 name='password_reset_complete'),
        ])),
        path('register/', views.RegistrationView.as_view(), name='django_registration_register'),
        path('activate/<str:activation_key>/', views.ActivationView.as_view(), name='django_registration_activate'),
    ])),
]

# Только в режиме разработки
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)