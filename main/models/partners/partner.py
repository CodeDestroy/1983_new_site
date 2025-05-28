from django.conf import settings
from django.db import models


class Partner(models.Model):
    title = models.CharField(max_length=50, verbose_name='Название')
    description = models.TextField(null=True, blank=True, verbose_name='Описание')
    address = models.TextField(null=True, blank=True, verbose_name='Адрес')
    phone = models.CharField(max_length=15, null=True, blank=True, verbose_name='Телефон')
    discount = models.FloatField(null=True, blank=True, verbose_name='Скидка')
    created_at = models.DateTimeField(auto_created=True, auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    is_deleted = models.BooleanField(default=False, verbose_name='Удалена?')

    def __str__(self):
        return f'{self.pk}) {self.title}'

    def images(self):
        import glob
        imgs = []
        for file_type in ['jpg', 'png', 'jpeg', 'gif']:
            for img in glob.glob(f'{settings.PARTNERS_ROOT}/{self.pk}/*.{file_type}', recursive=True):
                imgs.append(img.replace(settings.PARTNERS_ROOT, settings.PARTNERS_ROOT))
        return imgs

    class Meta(object):
        app_label = 'main'
        db_table = 'partners'
        verbose_name = 'партнёр'
        verbose_name_plural = 'партнёры'
