from django.db import models
from django.utils import timezone

def promo_directory_path(instance, filename):
    try:
        id_ = Promo.objects.last().pk + 1
    except:
        id_ = 1
    return f'promos/promo_{id_}/{filename}'


class Promo(models.Model):
    obj = models.ForeignKey('Object', on_delete=models.CASCADE, verbose_name='Жилой комплекс',
                            null=True, blank=True)
    photo = models.FileField(verbose_name='Фото', upload_to=promo_directory_path,
                             help_text='Фото формата .png, .jpg, .jpeg. Не более 2мб')
    name = models.CharField(max_length=50, verbose_name='Название')
    description = models.TextField(verbose_name='Описание')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    is_deleted = models.BooleanField(default=False, verbose_name='Удалена?')
    favorite = models.BooleanField(default=False, verbose_name='Избранное?')
    end_at = models.DateTimeField(verbose_name='Дата окончания акции', null=True, blank=True)
    flats_on_promo = models.IntegerField(verbose_name='Количество квартир по акции', null=True, blank=True, default=0)

    def __str__(self):
        return self.name

    def time_left(self):
        if self.end_at:
            delta = self.end_at - timezone.now()
            if delta.total_seconds() > 0:
                days = delta.days
                hours = delta.seconds // 3600
                minutes = (delta.seconds % 3600) // 60
                return f"{days} д. {hours} ч. {minutes} мин."
            else:
                return "Акция завершена"
        return "Акция завершена"
    
    class Meta(object):
        ordering = ['-created_at']
        app_label = 'main'
        db_table = 'promos'
        verbose_name = 'акция'
        verbose_name_plural = 'акции'

