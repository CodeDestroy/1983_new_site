from django.core.management import BaseCommand
from django.db import connection

from main.models.realty import Flat, FlatPhoto, Developer, Object


class Command(BaseCommand):
    help = 'send test mail'

    def handle(self, *args, **options):
        Developer.objects.all().delete()
        Object.objects.all().delete()
        FlatPhoto.objects.all().delete()
        Flat.objects.all().delete()
        with connection.cursor() as cursor:
            cursor.execute(f'TRUNCATE TABLE "{Developer._meta.db_table}" CASCADE;')
            cursor.execute(f'TRUNCATE TABLE "{Object._meta.db_table}" CASCADE;')
            cursor.execute(f'TRUNCATE TABLE "{Flat._meta.db_table}" CASCADE;')
            cursor.execute(f'TRUNCATE TABLE "{FlatPhoto._meta.db_table}" CASCADE;')
