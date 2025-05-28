from django.db import models


class FlatPriceHistory(models.Model):
    flat = models.ForeignKey('Flat', on_delete=models.CASCADE, verbose_name='Квартира')
    price = models.FloatField(default=0, verbose_name='Стоимость квартиры')
    created_at = models.DateTimeField(auto_created=True, auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')

    class Meta(object):
        ordering = ['created_at']
        app_label = 'main'
        db_table = 'flat_history_prices'
        verbose_name = 'история цен по квартире'
        verbose_name_plural = 'истории цен по квартирам'
