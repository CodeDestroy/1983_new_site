from OSMPythonTools.nominatim import Nominatim
from OSMPythonTools.overpass import Overpass, overpassQueryBuilder
from django.http import JsonResponse
from django.views import View


class AjaxMapObjects(View):
    def post(self, request, *args, **kwargs):
        city = request.POST.get('city')
        c_name = request.POST.get('c_name')
        c_var = request.POST.get('c_var')
        elem_type = request.POST.getlist('elem_type[]')
        if city and c_name and c_var and elem_type:
            nominatim = Nominatim()
            area_id = nominatim.query(city + ', Россия').areaId()
            overpass = Overpass()
            query = overpassQueryBuilder(area=area_id, elementType=elem_type, selector=f'"{c_name}"="{c_var}"',
                                         includeGeometry=True)
            return JsonResponse(
                [{'geometry': e.geometry(), 'tags': e.tags()} for e in overpass.query(query).elements()], safe=False)
