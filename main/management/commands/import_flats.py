import os
from urllib.request import urlopen, urlretrieve
from xml.etree import ElementTree

from django.core.management import BaseCommand
from django.core.files import File

from main.models.realty import Object, Flat, FlatPriceHistory, FlatPhoto


class Command(BaseCommand):
    help = 'Load from nmarket'

    urls = [
        # nmarket
        'https://ecatalog-service.nmarket.pro/BasePro/?login=xml_feed_2246114777&password=unA87ed4AFHD&regionGroupId=36',
        # raz
        'https://rzv.ru/xml/AvitoHabitable.XML'
    ]

    def handle(self, *args, **options):
        # Скрываем все квартиры
        Flat.objects.update(is_deleted=True)
        exist_object = []
        for url in self.urls:
            print(url)
            root_node = ElementTree.parse(urlopen(url)).getroot()
            for ad in root_node.findall('Ad'):
                apartment_number = ad.findtext('ApartmentNumber')
                avito_id = ad.findtext('NewDevelopmentId')
                obj = Object.objects.filter(avito_id=avito_id).last()
                if not obj:
                    continue
                if obj.hide:
                    continue
                obj.floors = int(ad.findtext('Floors'))
                obj.material = ad.findtext('HouseType')
                obj.is_deleted = False
                obj.save()
                if obj.parent:
                    obj.parent.is_deleted = False
                    obj.parent.save()
                    exist_object.append(obj.parent.pk)
                exist_object.append(obj.pk)

                import_id = int(ad.findtext('Id'))
                created = False
                try:
                    flat = Flat.objects.get(import_id=import_id, obj=obj)
                    if flat.hide:
                        continue
                    flat.is_deleted = False
                except Flat.DoesNotExist:
                    flat = Flat()
                    flat.obj = obj
                    flat.import_id = import_id
                    created = True
                flat.apartment_number = apartment_number
                if not flat.description:
                    flat.description = ad.findtext('Description')
                if price := float(ad.findtext('Price').replace(',', '.')):
                    if price != flat.price and not created:
                        FlatPriceHistory.objects.create(flat=flat, price=price)
                    flat.price = price
                flat.floor = int(ad.findtext('Floor'))
                flat.rooms = ad.findtext('Rooms')
                if kitchen_space := ad.findtext('KitchenSpace'):
                    flat.kitchen_space = float(kitchen_space.replace(',', '.'))
                flat.square = float(ad.findtext('Square').replace(',', '.'))
                if living_space := ad.findtext('LivingSpace'):
                    flat.living_space = float(living_space.replace(',', '.'))
                flat.decoration = ad.findtext('Decoration')
                flat.save()
                # загрузка картинок
                if not flat.flatphoto_set.all().exists():
                    i = 1
                    images = ad.findall('Images/Image')
                    if not images:
                        images = ad.findall('Images/image')
                    for image in images:
                        if image.attrib['url']:
                            result = urlretrieve(image.attrib['url'])
                            ph = FlatPhoto()
                            ph.flat = flat
                            ph.photo.save(f"photo{i}.jpg", File(open(result[0], 'rb')))
                            ph.save()
                            i += 1
        Object.objects.exclude(pk__in=exist_object).update(is_deleted=True)
