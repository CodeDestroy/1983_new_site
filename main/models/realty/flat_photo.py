from django.db import models


def directory_path(instance, filename):
    return f'flats/{instance.flat.pk}/{filename}'


class FlatPhoto(models.Model):
    flat = models.ForeignKey('Flat', on_delete=models.CASCADE, verbose_name='Квартира', null=True, blank=True)
    photo = models.FileField(verbose_name='Фото', upload_to=directory_path,
                             help_text='Фото формата .png, .jpg, .jpeg. Не более 2мб')
    sort = models.IntegerField(default=0, verbose_name='Порядок')

    class Meta(object):
        app_label = 'main'
        db_table = 'flat_photo'
        verbose_name = 'фото объявления'
        verbose_name_plural = 'фотографии объявлений'
