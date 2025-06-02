from django.urls import reverse_lazy
from django.db.models import Q
from django.views.generic import ListView, DetailView

from main.models import Article
from main.models.realty import Flat


class ArticleList(ListView):
    model = Article
    template_name = 'article/list.html'
    context_object_name = 'articles'
    extra_context = {'title': 'Новости', 'url': reverse_lazy('main:article-list')}

    def get_queryset(self):
        return super().get_queryset().filter(is_deleted=False)


class ArticlePage(DetailView):
    model = Article
    pk_url_kwarg = 'article_id'
    template_name = 'article/page.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        if self.object.title:
            context['title'] = self.object.title
        else:
            context['title'] = self.object.complex.name
        context['flats'] = Flat.objects.exclude(Q(is_deleted=True) | Q(hide=True) | Q(obj__is_deleted=True)
                          | Q(obj__hide=True)| Q(obj__parent__is_deleted=True) | Q(obj__parent__hide=True)).order_by('-created_at')[:12]
        context['url'] = reverse_lazy('main:article-page', kwargs={'article_id': self.object.id})
        context['articles'] = Article.objects.filter(is_deleted=False)[:5]
        return context

    def get_queryset(self):
        return super().get_queryset().filter(is_deleted=False)

