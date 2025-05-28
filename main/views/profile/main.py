from django.views.generic import DetailView

from main.models import User


class ProfilePageView(DetailView):
    model = User
    template_name = 'profile/index.html'
    extra_context = {'title': 'Мой профиль'}

    def get_object(self, queryset=None):
        return self.request.user
