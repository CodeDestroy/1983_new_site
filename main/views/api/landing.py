import requests
from django.conf import settings
from django.db.models import Q
from django.http import HttpResponse
from django.views import View
from django.http import JsonResponse
from main.models import Flat


class CalcView(View):
    def post(self, request, *args, **kwargs):
        try:
            #Ошибка тут
            #
            #error
            # "Cannot resolve keyword 'build' into field. Choices are: apartment_number, created_at, decoration, description, 
            # domclick_hide, flatphoto, flatpricehistory, floor, hide, id, import_id, is_deleted, kitchen_space, living_space, obj, obj_id, price, rooms, square, updated_at"
            flats = Flat.objects.filter(
                is_deleted=False, obj__is_deleted=False, obj__parent__is_deleted=False)#.exclude(type__icontains='Коммерч')
            #
            if districts := request.POST.getlist('districts[]'):
                q = Q()
                for district in districts:
                    q = q | Q(obj__parent__city__icontains=district)
                flats = flats.filter(q)
            if types := request.POST.getlist('types[]'):
                q = Q()
                for t in types:
                    q = q | Q(rooms__icontains=t)
                flats = flats.filter(q)
            if years := request.POST.getlist('years[]'):
                if 'all' not in years:
                    flats = flats.filter(obj__parent__ready_year__in=years)
            if prices := request.POST.getlist('prices[]'):
                if '6+' in prices:
                    flats = flats.filter(price__gte=6000000)
                else:
                    max_price = max(prices)
                    match max_price:
                        case '1.5':
                            flats = flats.filter(price__lte=1500000)
                        case '2':
                            flats = flats.filter(price__lte=2000000)
                        case '3':
                            flats = flats.filter(price__lte=3000000)
                        case '4':
                            flats = flats.filter(price__lte=4000000)
                        case '5':
                            flats = flats.filter(price__lte=5000000)
                        case '6':
                            flats = flats.filter(price__lte=6000000)
            return HttpResponse(flats.count(), content_type="text/plain")
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)


class QuizView(View):
    def post(self, request, *args, **kwargs):
        data = {'source': 'Kvartiri36', 'text': 'Заполнена форма kvartiri36.ru:',
                'phone': request.POST.get('phone'), 'utm': request.POST.get('source')}
        for district in request.POST.getlist('districts[]'):
            data['text'] += f'<br>Район: {district}'
        for t in request.POST.getlist('types[]'):
            match t:
                case 's':
                    data['text'] += '<br>Тип: Студия'
                case '1':
                    data['text'] += '<br>Тип: 1 комн.'
                case '2':
                    data['text'] += '<br>Тип: 2 комн.'
                case '3':
                    data['text'] += '<br>Тип: 3 комн.'
                case '4':
                    data['text'] += '<br>Тип: 4 комн.'
                case '5+':
                    data['text'] += '<br>Тип: 5+ комн.'
        for y in request.POST.getlist('years[]'):
            if y == 'all':
                data['text'] += '<br>Готовность: Любая'
            else:
                data['text'] += f'<br>Готовность: {y}'
        for p in request.POST.getlist('prices[]'):
            if p == 'all':
                data['text'] += '<br>Бюджет: Не имеет значения'
            else:
                data['text'] += f'<br>Бюджет: {p} млн'
        data['token'] = settings.CRM_TOKEN
        response = requests.post(f'{settings.CRM_URL}/api/landing/', data=data)
        if response.status_code != 200:
            return HttpResponse('Not OK', content_type="text/plain")
        return HttpResponse('OK', content_type="text/plain")
