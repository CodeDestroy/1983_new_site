from django.core.mail import send_mail
from django.core.management import BaseCommand


class Command(BaseCommand):
    help = 'send test mail'

    def handle(self, *args, **options):
        send_mail(
            "Test",
            "Hello, world!",
            "info@квартиры36.рф",
            ["pwkgv138@yandex.ru"],
            fail_silently=False,
        )
