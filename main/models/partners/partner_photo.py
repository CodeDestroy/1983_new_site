from django.db import models


def directory_path(instance, filename):
    return f'partners/{instance.partner.pk}/{filename}'


class PartnerPhoto(models.Model):
    partner = models.ForeignKey('Partner', on_delete=models.CASCADE, verbose_name='Партнёр', null=True, blank=True)
    photo = models.FileField(verbose_name='Фото', upload_to=directory_path,
                             help_text='Фото формата .png, .jpg, .jpeg. Не более 2мб')
    sort = models.IntegerField(default=0, verbose_name='Порядок')

    class Meta(object):
        app_label = 'main'
        db_table = 'partner_photo'
        verbose_name = 'фото партнёра'
        verbose_name_plural = 'фотографии партнёра'
