from django.db import models


def directory_path(instance, filename):
    try:
        id_ = Bonus.objects.last().pk + 1
    except:
        id_ = 1
    return f'promos/promo_{id_}/{filename}'


class Bonus(models.Model):
    photo = models.FileField(verbose_name='Фото', upload_to=directory_path,
                             help_text='Фото формата .png, .jpg, .jpeg. Не более 2мб')
    name = models.CharField(max_length=50, verbose_name='Название')
    description = models.TextField(verbose_name='Описание')
    size = models.IntegerField(verbose_name='Размер скидки', default=0)
    size_type = models.CharField(verbose_name='Тип', choices=(
        ('rubles', 'Рубли'), ('dollars', 'Доллары'), ('euros', 'Евро'), ('percentage', 'Проценты')
    ), default='rubles', max_length=11)
    address = models.CharField(max_length=150, verbose_name='Адрес', null=True, blank=True)
    phone = models.CharField(max_length=50, verbose_name='Номер телефона', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')

    def __str__(self):
        return self.name

    def get_icon(self):
        match self.size_type:
            case 'rubles':
                return '<i class="fa-solid fa-ruble-sign"></i>'
            case 'dollars':
                return '<i class="fa-solid fa-dollar-sign"></i>'
            case 'euros':
                return '<i class="fa-solid fa-euro-sign"></i>'
            case 'percentage':
                return '<i class="fa-solid fa-percent"></i>'

    class Meta(object):
        ordering = ['-created_at']
        app_label = 'main'
        db_table = 'bonuses'
        verbose_name = 'бонус'
        verbose_name_plural = 'бонусы'
