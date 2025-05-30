from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView

from django.views import View
from django.shortcuts import render
from main.models import Promo, Flat, Article, Object, Developer


""" class PromoList(ListView):
    model = Promo
    template_name = 'promo/list.html'
    paginate_by = 12
    context_object_name = 'promos'
    extra_context = {'title': 'Акции', 'url': reverse_lazy('main:promo-list')}

    def get_queryset(self):
        return super().get_queryset().filter(is_deleted=False) """
    

from django.db.models import Q

class PromoList(View):
    template_name = 'promo/list.html'

    def get(self, request, *args, **kwargs):
        obj_id = request.GET.get("obj")
        dev_id = request.GET.get("developer")
        if obj_id:
            obj_id = obj_id.replace('\xa0', '').replace(' ', '')
        if dev_id:
            dev_id = dev_id.replace('\xa0', '').replace(' ', '')
        # Только не удалённые акции
        promos = Promo.objects.filter(is_deleted=False)

        if obj_id:
            promos = promos.filter(obj_id=obj_id)
        if dev_id:
            promos = promos.filter(obj__developer_id=dev_id)

        # Только объекты, которые используются в этих акциях
        active_objects = Object.objects.filter(
            is_deleted=False,
            promo__is_deleted=False
        ).distinct()

        # Только застройщики, связанные с этими ЖК
        active_developers = Developer.objects.filter(
            object__in=active_objects
        ).distinct()

        return render(request, self.template_name, {
            'title': 'Акции',
            'promos': promos.select_related('obj__developer'),
            'articles': Article.objects.filter(is_deleted=False).order_by('-created_at')[:3],
            'objects': active_objects,
            'developers': active_developers,
            'selected_obj': int(obj_id) if obj_id else None,
            'selected_dev': int(dev_id) if dev_id else None,
            'url': reverse_lazy('main:promo-list'),
        })




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

