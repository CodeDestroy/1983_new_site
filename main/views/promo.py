from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView

from main.models import Promo, Flat


class PromoList(ListView):
    model = Promo
    template_name = 'promo/list.html'
    paginate_by = 12
    context_object_name = 'promos'
    extra_context = {'title': 'Акции', 'url': reverse_lazy('main:promo-list')}

    def get_queryset(self):
        return super().get_queryset().filter(is_deleted=False)


class PromoPage(DetailView):
    model = Promo
    pk_url_kwarg = 'promo_id'
    template_name = 'promo/page.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['title'] = self.object.name
        context['flats'] = Flat.objects.filter(is_deleted=False, obj__parent=self.object.obj)
        context['url'] = reverse_lazy('main:promo-page', kwargs={'promo_id': self.object.pk})
        return context

    def get_queryset(self):
        return super().get_queryset().filter(is_deleted=False)

