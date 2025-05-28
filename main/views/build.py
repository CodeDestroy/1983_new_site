from django.conf import settings
from django.db.models import Count, Q
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView

from main.models.realty import Flat, Object


class MapList(ListView):
    model = Object
    template_name = 'search/map.html'
    context_object_name = 'builds'
    extra_context = {'title': 'Расширенный поиск новостроек', 'url': reverse_lazy('main:map-list')}

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['districts'] = None # Complex.objects.values('district').distinct()
        context['flat_types'] = Flat.objects.values('rooms').distinct().annotate(tcount=Count('rooms')).order_by()
        context['yandex_map_key'] = settings.YANDEX_MAP_KEY
        return context

    def get_queryset(self):
        qs = super().get_queryset().filter(is_deleted=False, hide=False).exclude(lat=0, lon=0)
        if name := self.request.GET.get('name'):
            qs = qs.filter(Q(obj__name__icontains=name) | Q(obj__parent__name__icontains=name) |
                           Q(obj__developer__name__icontains=name) | Q(obj__parent__developer__name__icontains=name) |
                           Q(obj__address__icontains=name) | Q(obj__parent__address__icontains=name))
        if rooms := self.request.GET.get('rooms'):
            qs = qs.filter(flat__type=rooms)
        if district := self.request.GET.get('district'):
            qs = qs.filter(complex__district__icontains=district)
        if price_type := self.request.GET.get('price'):
            match price_type:
                case '1':
                    qs = qs.filter(flat__price__gte=1000000, flat__price__lte=1999999)
                case '2':
                    qs = qs.filter(flat__price__gte=2000000, flat__price__lte=2999999)
                case '3':
                    qs = qs.filter(flat__price__gte=3000000, flat__price__lte=3999999)
                case '4':
                    qs = qs.filter(flat__price__gte=4000000, flat__price__lte=4999999)
                case '5':
                    qs = qs.filter(flat__price__gte=5000000, flat__price__lte=5999999)
                case '6':
                    qs = qs.filter(flat__price__gte=6000000, flat__price__lte=6999999)
                case '7':
                    qs = qs.filter(flat__price__gte=7000000)
        if order_by := self.request.GET.get('price_sort'):
            if order_by == 'asc':
                qs = qs.order_by('flat__price')
            else:
                qs = qs.order_by('-flat__price')
        return qs.exclude(Q(is_deleted=True) | Q(hide=True) | Q(obj__is_deleted=True)
                          | Q(obj__hide=True)| Q(obj__parent__is_deleted=True) | Q(obj__parent__hide=True))


class BuildPage(DetailView):
    model = Object
    pk_url_kwarg = 'build_id'
    template_name = 'build/page.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = self.object.parent.name or self.object.name
        context['yandex_map_key'] = settings.YANDEX_MAP_KEY
        context['new_flats'] = Flat.objects.filter(is_deleted=False, build=self.object).order_by('-created_at')[:12]
        context['flat_types'] = Flat.objects.values('type').distinct().annotate(tcount=Count('type')).order_by()
        context['url'] = reverse_lazy('main:build-page', kwargs={'build_id': self.object.id})
        return context

    def get_queryset(self):
        return super().get_queryset().filter(is_deleted=False)

