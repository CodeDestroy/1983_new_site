import requests
from django.contrib import messages
from django.shortcuts import redirect
from django.conf import settings
from django.views import View


class FeedbackView(View):
    def post(self, request, *args, **kwargs):
        
        data = {'phone': request.POST.get('phone'), 'name': request.POST.get('name'),
                'client_phone': request.POST.get('client_phone'), 'client_name': request.POST.get('client_name'),
                'text': '', 'utm': request.GET, 'previously': request.POST.get('url'), 'token': settings.CRM_TOKEN,
                'referrer': request.META.get('HTTP_REFERER', '')}
        
        if msg := request.POST.get('message'):
            data['text'] += f'<br>Сообщение {msg}'
        if msg := request.POST.getlist('type'):
            data['text'] += '<br>Интересующее жилье: '
            data['text'] += '; '.join(msg)
        if msg := request.POST.getlist('year'):
            data['text'] += '<br>Срок сдачи: '
            data['text'] += '; '.join(msg)
        if msg := request.POST.getlist('budget'):
            data['text'] += '<br>Бюджет на покупку: '
            data['text'] += '; '.join(msg)
        if msg := request.POST.getlist('opinion'):
            data['text'] += '<br>Важные особенности: '
            data['text'] += '; '.join(msg)
        # Какую квартиру хотите продать?
        if msg := request.POST.getlist('sell_type'):
            data['text'] += '<br>Какую квартиру продают: '
            data['text'] += '; '.join(msg)
        # Как быстро хотите продать квартиру?
        if msg := request.POST.getlist('speed'):
            data['text'] += '<br>Как быстро хотят продать квартиру: '
            data['text'] += '; '.join(msg)
        # Нужны ли Вам дополнительные услуги?
        if msg := request.POST.getlist('help'):
            data['text'] += '<br>Нужны ли дополнительные услуги: '
            data['text'] += '; '.join(msg)
        # Тип дома
        if msg := request.POST.getlist('home_type'):
            data['text'] += '<br>Рассматриваемый объект для покупки: '
            data['text'] += '; '.join(msg)
        # Способ связи
        if msg := request.POST.getlist('com_method'):
            data['text'] += '<br>Предпочтительный способ связи: '
            data['text'] += '; '.join(msg)
        requests.post(f'{settings.CRM_URL}/api/site/', data=data)
        messages.success(request, 'Заявка успешно отправлена')
        return redirect(self.request.POST.get('url'))
