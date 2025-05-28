from django.urls import reverse_lazy
from django.views.generic import ListView

from main.models import Bonus


class BonusList(ListView):
    model = Bonus
    template_name = 'bonus.html'
    context_object_name = 'bonuses'
    extra_context = {'title': 'Программа лояльности', 'url': reverse_lazy('main:bonus-page')}
    paginate_by = 12
