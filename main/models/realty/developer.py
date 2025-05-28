from django.db import models


class Developer(models.Model):
    name = models.CharField(max_length=120, verbose_name='Название')
    description = models.TextField(verbose_name='Описание', blank=True, null=True)
    is_deleted = models.BooleanField(default=False, verbose_name='Удален?')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')

    def __str__(self):
        return self.name

    class Meta(object):
        app_label = 'main'
        db_table = 'developers'
        verbose_name = 'застройщик'
        verbose_name_plural = 'застройщики'
