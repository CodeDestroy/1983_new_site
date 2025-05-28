from django.http import JsonResponse
from django.views import View

from main.models.realty import Object


class ComplexListView(View):
    def get(self, request, *args, **kwargs):
        complexes = Object.objects.all()
        if chars := request.GET.get('chars'):
            complexes = complexes.filter(name__icontains=chars)
        return JsonResponse([{'id': c.pk, 'name': c.name} for c in complexes], safe=False)
