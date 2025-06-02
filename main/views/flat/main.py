from django.conf import settings
from django.db.models import Q, Count
from django.urls import reverse_lazy
from django.views.generic import DetailView
from django.views.generic.list import ListView

from main.models.realty import Flat

from main.models import Article

class SearchList(ListView):
    paginate_by = 10
    model = Flat
    template_name = 'search/list.html'
    context_object_name = 'flats'
    extra_context = {'title': 'Расширенный поиск новостроек'}

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super().get_context_data(**kwargs)
        context['districts'] = None # Complex.objects.values('district').distinct()
        context['flat_types'] = Flat.objects.values('rooms').distinct().annotate(tcount=Count('rooms')).order_by()
        context['url'] = reverse_lazy('main:search-list'),
        context['articles'] = Article.objects.filter(is_deleted=False)[:3]

        return context

    def get_queryset(self):
        qs = super().get_queryset().filter(is_deleted=False, hide=False)
        if name := self.request.GET.get('name'):
            qs = qs.filter(Q(obj__name__icontains=name) | Q(obj__parent__name__icontains=name) |
                           Q(obj__developer__name__icontains=name) | Q(obj__parent__developer__name__icontains=name) |
                           Q(obj__address__icontains=name) | Q(obj__parent__address__icontains=name))
        if rooms := self.request.GET.get('rooms'):
            qs = qs.filter(rooms=rooms)
        #if district := self.request.GET.get('district'):
        #    qs = qs.filter(build__complex__district__icontains=district)
        if price_type := self.request.GET.get('price'):
            match price_type:
                case '1':
                    qs = qs.filter(price__gte=1000000, price__lte=1999999)
                case '2':
                    qs = qs.filter(price__gte=2000000, price__lte=2999999)
                case '3':
                    qs = qs.filter(price__gte=3000000, price__lte=3999999)
                case '4':
                    qs = qs.filter(price__gte=4000000, price__lte=4999999)
                case '5':
                    qs = qs.filter(price__gte=5000000, price__lte=5999999)
                case '6':
                    qs = qs.filter(price__gte=6000000, price__lte=6999999)
                case '7':
                    qs = qs.filter(price__gte=7000000)
        if order_by := self.request.GET.get('price_sort'):
            if order_by == 'asc':
                qs = qs.order_by('price')
            else:
                qs = qs.order_by('-price')
        return qs.exclude(Q(obj__parent__isnull=False, obj__parent__hide=True, obj__parent__is_deleted=True)
                          | Q(obj__parent__isnull=True, obj__hide=True, obj__is_deleted=True), is_deleted=True, hide=True)


class FlatPage(DetailView):
    model = Flat
    pk_url_kwarg = 'flat_id'
    template_name = 'flat/page.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = f'{self.object}'
        context['flats'] = Flat.objects.filter(is_deleted=False).order_by('-created_at')[:12]
        context['yandex_map_key'] = settings.YANDEX_MAP_KEY
        context['url'] = reverse_lazy('main:flat-page', kwargs={'flat_id': self.object.id})
        context['articles'] = Article.objects.filter(is_deleted=False)[:3]
        return context

    def get_queryset(self):
        return super().get_queryset().filter(is_deleted=False)
