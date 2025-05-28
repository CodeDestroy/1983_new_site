from django.db import models


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

    def __str__(self):
        return self.name

    class Meta(object):
        ordering = ['-created_at']
        app_label = 'main'
        db_table = 'promos'
        verbose_name = 'акция'
        verbose_name_plural = 'акции'
