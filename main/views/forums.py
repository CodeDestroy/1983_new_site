import re

import requests
from asgiref.sync import async_to_sync
from django.shortcuts import render
from django.conf import settings
from django.views import View

from main.tools import send_to_group


class ForumView(View):
    def post(self, request, *args, **kwargs):
        forum_name = request.POST.get('event-name')
        phone = request.POST.get('phone')
        name = request.POST.get('name')
        #email = request.POST.get('email')
        url = request.POST.get('url')
        activity = request.POST.get('activity')
        if request.POST.get('type') == 'partner':
            name = re.sub(r'[_*[\]()~>#\+\-=|{}.!]', lambda x: '\\' + x.group(), name)
            #email = re.sub(r'[_*[\]()~>#\+\-=|{}.!]', lambda x: '\\' + x.group(), email)
            # Летит в личку Татьяне Дроновой https://t.me/tanya_d23
            async_to_sync(send_to_group)(f'*Заявка на партнерство на форуме "{forum_name}"*\n\nИмя: {name}\nНомер телефона: `{phone}`\nСфера деятельности {activity}', 1112985730)
        else:
            requests.post(f'{settings.CRM_URL}/api/forums/', data={
                'event-name': forum_name, 'phone': phone, 'name': name, 'activity': activity,
                'utm': request.GET, 'previously': url, 'token': settings.CRM_TOKEN
            })
        return render(request, 'forums/success.html', {
            'title': 'Поздравляем, Вы успешно зарегистрировались на мероприятие!'})
