from django.core.management import BaseCommand

from main.models import Flat, HistoryFlat


class Command(BaseCommand):
    help = 'Fix price history'

    def handle(self, *args, **options):
        for flat in Flat.objects.all():
            prices = HistoryFlat.objects.distinct('price').filter(flat=flat).order_by('price').values_list('pk', flat=True)
            HistoryFlat.objects.filter(flat=flat).exclude(pk__in=prices).delete()
