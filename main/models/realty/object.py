from django.core.validators import MinValueValidator
from django.db import models


class Object(models.Model):
    parent = models.ForeignKey('Object', verbose_name='Комплекс', related_name='children', on_delete=models.CASCADE,
                               null=True, blank=True)
    avito_id = models.IntegerField(verbose_name='Avito ID')
    developer = models.ForeignKey('Developer', on_delete=models.SET_NULL, verbose_name='Застройщик',
                                  null=True, blank=True)
    address = models.CharField(verbose_name='Адрес', max_length=255)
    name = models.CharField(verbose_name='Название', max_length=255)
    description = models.TextField(verbose_name='Описание', blank=True, null=True,
                                   help_text='Если описание квартир перезаписывать не надо, то лучше оставить пустым')
    alternative_description = models.TextField(verbose_name='Описание', blank=True, null=True,
                                               help_text='Если описание квартир перезаписывать не надо, то лучше оставить пустым')
    region = models.CharField(max_length=60, verbose_name='Регион', blank=True, null=True)
    city = models.CharField(max_length=60, verbose_name='Город', blank=True, null=True)
    material = models.CharField(max_length=20, verbose_name='Материал стен', choices=(
        ('Кирпичный', 'Кирпичный'),
        ('Панельный', 'Панельный'),
        ('Блочный', 'Блочный'),
        ('Монолитный', 'Монолитный'),
        ('Монолитно-кирпичный', 'Монолитно-кирпичный')
    ), blank=True, null=True)
    floors = models.IntegerField(default=0, verbose_name='Количество этажей', validators=[MinValueValidator(0)])
    show= models.BooleanField(default=False, verbose_name='Принудительно отображать?')
    is_deleted = models.BooleanField(default=False, verbose_name='Удалено?')
    hide = models.BooleanField(default=False, verbose_name='Спрятано?')
    domclick_hide = models.BooleanField(default=True, verbose_name='Спрятано на домклик?')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')

    def __str__(self):
        if self.parent:
            return f'{self.parent.name} - {self.name}'
        return self.name

    class Meta(object):
        app_label = 'main'
        db_table = 'objects'
        verbose_name = 'объект'
        verbose_name_plural = 'объекты'
