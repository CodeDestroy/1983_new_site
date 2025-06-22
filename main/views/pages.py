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

from main.utils.flat_filters import apply_flat_filters

class IndexView(View):
    template_name = 'index.html'

    def get(self, request, *args, **kwargs):
        flats = apply_flat_filters(request)

        return render(request, self.template_name, {
            'title': 'Главная страница',
            'districts': None,
            'flat_types': Flat.objects.values('rooms').distinct().annotate(tcount=Count('rooms')),
            'new_flats': flats[:12],
            'promos': Promo.objects.filter(is_deleted=False)[:4],
            'url': reverse_lazy('main:index'),
            'articles': Article.objects.filter(is_deleted=False).order_by('-created_at')[:12],
        })

    """ def get(self, request, *args, **kwargs):
        flats = Flat.objects.filter(is_deleted=False)

        # По типу недвижимости
        if (flat_type := request.GET.get('type')):
            flats = flats.filter(type=flat_type)

        # По количеству комнат
        if (rooms := request.GET.get('rooms')):
            flats = flats.filter(rooms=rooms)

        # По этажу
        if (floor := request.GET.get('floor')):
            flats = flats.filter(floor=floor)

        # По цене (диапазон)
        price = request.GET.get('price')
        if price == '2000000':
            flats = flats.filter(price__lte=price)
        elif price == '5000000':
            flats = flats.filter(price__gte='2000000').filter(price__lte=price)
        elif price == '1000000':
            flats = flats.filter(price__gte='5000000').filter(price__lte=price)
        elif price == '1000000+':
            flats = flats.filter(price__gte='1000000')

        
        square = request.GET.get('square')
        if square == '30':
            flats = flats.filter(square__lte=square)
        elif square == '50':
            flats = flats.filter(square__gte='2000000').filter(square__lte=square)
        elif square == '70':
            flats = flats.filter(square__gte='5000000').filter(square__lte=square)
        elif square == '100':
            flats = flats.filter(square__gte='7000000').filter(square__lte=square)
        elif square == '100+':
            flats = flats.filter(square__gte='100')

        sort = request.GET.get('sort')
        if sort == 'priceGte':
            flats = flats.order_by('-price')
        elif sort == 'priceLte':
            flats = flats.order_by('+price')
        elif sort == 'squareGte':
            flats = flats.order_by('-square')
        elif sort == 'priceLte':
            flats = flats.order_by('+square')
        elif sort == 'roomsGte':
            flats = flats.order_by('-rooms')
        elif sort == 'roomsLte':
            flats = flats.order_by('+rooms')

        return render(request, self.template_name, {
            'title': 'Главная страница',
            'districts': None,
            'flat_types': Flat.objects.values('rooms').distinct().annotate(tcount=Count('rooms')),
            'new_flats': flats[:12],
            'promos': Promo.objects.filter(is_deleted=False, favorite=True),
            'url': reverse_lazy('main:index'),
            'articles': Article.objects.filter(is_deleted=False).order_by('-created_at')[:12],
        }) """


class AboutView(View):
    template_name = 'about.html'

    def get(self, request, *args, **kwargs):
        return render(request, self.template_name, {
            'title': 'О компании',
            'flats': Flat.objects.filter(is_deleted=False).order_by('-created_at')[:3],
            'yandex_map_key': settings.YANDEX_MAP_KEY,
            'url': reverse_lazy('main:about'),
            'partners': Partner.objects.filter(is_deleted=False),
            'articles': Article.objects.filter(is_deleted=False).order_by('-created_at')[:3],
        })


class ContactView(View):
    template_name = 'contact.html'

    def get(self, request, *args, **kwargs):
        flats = apply_flat_filters(request)
        return render(request, self.template_name, {
            'title': 'Контакты',
            'flats': flats[:3],
            'yandex_map_key': settings.YANDEX_MAP_KEY,
            'url': reverse_lazy('main:contacts'),
            'articles': Article.objects.filter(is_deleted=False).order_by('-created_at')[:3],
        })


class MortgageView(View):
    template_name = 'mortgage.html'

    def get(self, request, *args, **kwargs):
        flats = apply_flat_filters(request)
        return render(request, self.template_name, {
            'title': 'Ипотека',
            'flats': flats[:3],
            'url': reverse_lazy('main:mortgage'),
            'articles': Article.objects.filter(is_deleted=False)[:3],
            'partners': Partner.objects.filter(is_deleted=False)
        })


class CommerceView(View):
    template_name = 'commerce.html'

    def get(self, request, *args, **kwargs):
        flats = apply_flat_filters(request)
        return render(request, self.template_name, {
            'title': 'Коммерческая недвижимость',
            'flats': flats[:3],
            'interested_flats': Flat.objects.filter(is_deleted=False).order_by('-created_at')[:3],
            'url': reverse_lazy('main:commerce-page')
        })


class EliteView(View):
    template_name = 'elite.html'

    def get(self, request, *args, **kwargs):
        flats = apply_flat_filters(request)
        return render(request, self.template_name, {
            'title': 'Элитная недвижимость',
            'flats': flats[:12],
            'articles': Article.objects.filter(is_deleted=False)[:3],
            'url': reverse_lazy('main:elite-page')
        })

class MoscowView(View):
    template_name = 'moscow.html'

    def get(self, request, *args, **kwargs):
        flats = apply_flat_filters(request)
        return render(request, self.template_name, {
            'title': 'Актуальный каталог жилой недвижимости премиум-класса Москвы, Московской области, Турции и Северного Кипра',
            'flats': flats[:3],
            'articles': Article.objects.filter(is_deleted=False)[:3],
            'url': reverse_lazy('main:moscow-page')
        })
    
class FlipView(View):
    template_name = 'flip.html'

    def get(self, request, *args, **kwargs):
        flats = apply_flat_filters(request)
        return render(request, self.template_name, {
            'title': 'Инвестиции в недвижимость',
            'flats': flats[:12],
            'articles': Article.objects.filter(is_deleted=False)[:3],
            'url': reverse_lazy('main:flip-page')
        })
    
class RecommendationView(View):
    template_name = 'recommendation.html'

    def get(self, request, *args, **kwargs):
        flats = apply_flat_filters(request)
        return render(request, self.template_name, {
            'title': 'Программа лояльности',
            'flats': flats[:12],
            'articles': Article.objects.filter(is_deleted=False)[:3],
            'partners': Partner.objects.filter(is_deleted=False),
            'url': reverse_lazy('main:recommendation-page')
        })
class HomeView(View):
    template_name = 'home.html'

    def get(self, request, *args, **kwargs):
        flats = apply_flat_filters(request)
        return render(request, self.template_name, {
            'title': 'Дома и таунхаусы',
            'flats': flats[:3],
            'url': reverse_lazy('main:home-page')
        })

class SaveImage(View):
    def post(self, request, *args, **kwargs):
        if request.user.is_staff:
            file = default_storage.save(f'images/{request.FILES["file"].name}', request.FILES['file'])
            return JsonResponse({'location': default_storage.url(file)})
        return JsonResponse({'error': 'You don\'t have permission to upload images'})
