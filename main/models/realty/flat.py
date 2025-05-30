import glob

from django.conf import settings
from django.core.validators import MinValueValidator
from django.db import models


class Flat(models.Model):
    TYPES = [('Flat', 'Квартира'),
        ('Commerce', 'Коммерческая недвижимость'),
        ('House', 'Дом'),
        ('Elite', 'Элитная недвижимость')]
    obj = models.ForeignKey('Object', on_delete=models.CASCADE, verbose_name='Объект')
    import_id = models.BigIntegerField(verbose_name='Import ID', default=0)
    description = models.TextField(verbose_name='Описание', blank=True, null=True)
    price = models.FloatField(default=0, verbose_name='Цена', validators=[MinValueValidator(0)])
    floor = models.IntegerField(default=0, verbose_name='Этаж', validators=[MinValueValidator(0)])
    apartment_number = models.CharField(max_length=10, verbose_name='Номер квартиры')
    rooms = models.CharField(verbose_name='Количество комнат', default='1', choices=(
        ('Студия', 'Студия'), ('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'), ('6', '6'), ('7', '7'),
        ('8', '8'), ('9', '9'), ('10 и более', '10 и более'), ('Своб.планировка', 'Своб.планировка')
    ))
    kitchen_space = models.FloatField(default=0, verbose_name='Площадь кухни')
    square = models.FloatField(default=0, verbose_name='Площадь')
    living_space = models.FloatField(default=0, verbose_name='Жилая площадь')
    decoration = models.CharField(verbose_name='Отделка', choices=(
        ('Без отделки', 'Без отделки'), ('Предчистовая', 'Предчистовая'), ('Чистовая', 'Чистовая')
    ), default='Без отделки', max_length=13)
    is_deleted = models.BooleanField(default=False, verbose_name='Удалено?')
    hide = models.BooleanField(default=False, verbose_name='Спрятано?')
    domclick_hide = models.BooleanField(default=False, verbose_name='Спрятано на домклик?')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    type = models.CharField(max_length=60, verbose_name='Тип', choices=TYPES, blank=True, null=True)
    def __str__(self):
        if self.rooms in ['1', '2', '3', '4', '5', '6', '7', '8', '9']:
            return f'{self.rooms}-комнатная квартира'
        return self.rooms

    def get_description(self):
        if self.obj.description:
            return self.obj.description
        elif self.obj.parent and self.obj.parent.description:
            return self.obj.parent.description
        return self.description
    
    def get_alternative_description(self):
        if self.obj.alternative_description:
            return self.obj.alternative_description
        elif self.obj.parent and self.obj.parent.alternative_description:
            return self.obj.parent.alternative_descriptions
        return self.description

    class Meta(object):
        app_label = 'main'
        db_table = 'flats'
        verbose_name = 'квартира'
        verbose_name_plural = 'квартиры'

    
    
