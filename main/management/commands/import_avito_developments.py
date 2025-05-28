from urllib.request import urlopen
from xml.etree import ElementTree

from django.core.management import BaseCommand

from main.models.realty import Object, Developer


class Command(BaseCommand):
    help = 'Load complexes and buildings from avito developments'

    url = 'https://autoload.avito.ru/format/New_developments.xml'

    def handle(self, *args, **options):
        root_node = ElementTree.parse(urlopen(self.url)).getroot()
        for region in root_node.findall('./Region'):
            if (region_name := region.attrib['name']) in ['Московская область', 'Воронежская область']:
                for city in region.findall('./City'):
                    city_name = city.attrib['name']
                    for obj in city.findall('./Object'):
                        try:
                            complex_obj = Object.objects.get(avito_id=obj.attrib['id'])
                        except Object.DoesNotExist:
                            complex_obj = Object()
                            complex_obj.avito_id = obj.attrib['id']
                        complex_obj.name = obj.attrib['name']
                        complex_obj.address = obj.attrib['address']
                        if 'developer' in obj.attrib:
                            complex_obj.developer = Developer.objects.get_or_create(name=obj.attrib['developer'])[0]
                        complex_obj.city = city_name
                        complex_obj.region = region_name
                        complex_obj.save()

                        for building in obj.findall('./Housing'):
                            try:
                                building_obj = Object.objects.get(avito_id=building.attrib['id'])
                            except Object.DoesNotExist:
                                building_obj = Object()
                                building_obj.avito_id = building.attrib['id']
                            building_obj.parent = complex_obj
                            building_obj.name = building.attrib['name']
                            building_obj.address = building.attrib['address']
                            building_obj.save()
