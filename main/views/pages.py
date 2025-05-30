from django.conf import settings
from django.core.files.storage import default_storage
from django.db.models import Count
from django.http import JsonResponse
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import View

from main.models import Article
from main.models import Promo
from main.models.realty import Object, Flat
from main.models.partners import Partner


class IndexView(View):
    template_name = 'index.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name, {
            'title': 'Главная страница',
            'districts': None, # Complex.objects.all().exclude(district__isnull=True).exclude(district='').values('district').distinct(),
            'flat_types': Flat.objects.values('rooms').distinct().annotate(tcount=Count('rooms')).order_by(),
            'new_flats': Flat.objects.filter(is_deleted=False).order_by('-created_at')[:12],
            'promos': Promo.objects.filter(is_deleted=False, favorite=True),
            'url': reverse_lazy('main:index'),
            'articles': Article.objects.filter(is_deleted=False).order_by('-created_at')[:12]
        })


class AboutView(View):
    template_name = 'about.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name, {
            'title': 'О компании',
            'flats': Flat.objects.filter(is_deleted=False).order_by('-created_at')[:12],
            'yandex_map_key': settings.YANDEX_MAP_KEY,
            'url': reverse_lazy('main:about')
        })


class ContactView(View):
    template_name = 'contact.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name, {
            'title': 'Контакты',
            'flats': Flat.objects.filter(is_deleted=False).order_by('-created_at')[:3],
            'yandex_map_key': settings.YANDEX_MAP_KEY,
            'url': reverse_lazy('main:contacts'),
            'articles': Article.objects.filter(is_deleted=False).order_by('-created_at')[:3],
        })


class MortgageView(View):
    template_name = 'mortgage.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name, {
            'title': 'Ипотека',
            'flats': Flat.objects.filter(is_deleted=False).order_by('-created_at')[:3],
            'url': reverse_lazy('main:mortgage'),
            'articles': Article.objects.filter(is_deleted=False)[:3],
            'partners': Partner.objects.filter(is_deleted=False)
        })


class CommerceView(View):
    template_name = 'commerce.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name, {
            'title': 'Коммерческая недвижимость',
            'flats': Flat.objects.filter(is_deleted=False).order_by('-created_at')[:3],
            'interested_flats': Flat.objects.filter(is_deleted=False).order_by('-created_at')[:3],
            'url': reverse_lazy('main:commerce-page')
        })


class EliteView(View):
    template_name = 'elite.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name, {
            'title': 'Элитная недвижимость',
            'flats': Flat.objects.filter(is_deleted=False).distinct('obj').order_by('obj', '-price')[:12],
            'url': reverse_lazy('main:elite-page')
        })

class HomeView(View):
    template_name = 'home.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name, {
            'title': 'Дома и таунхаусы',
            'flats': Flat.objects.filter(is_deleted=False).order_by('-created_at')[:3],
            'url': reverse_lazy('main:home-page')
        })

class SaveImage(View):
    def post(self, request, *args, **kwargs):
        if request.user.is_staff:
            file = default_storage.save(f'images/{request.FILES["file"].name}', request.FILES['file'])
            return JsonResponse({'location': default_storage.url(file)})
        return JsonResponse({'error': 'You don\'t have permission to upload images'})
