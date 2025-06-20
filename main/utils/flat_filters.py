from django.db.models import F
from main.models import Flat

def apply_flat_filters(request, queryset=None):
    flats = queryset or Flat.objects.filter(is_deleted=False)

    if (flat_type := request.GET.get('type')):
        flats = flats.filter(type=flat_type)

    if (rooms := request.GET.get('rooms')):
        flats = flats.filter(rooms=rooms)

    if (floor_min := request.GET.get('floor_min')):
        flats = flats.filter(floor__gte=floor_min)
    if (floor_max := request.GET.get('floor_max')):
        flats = flats.filter(floor__lte=floor_max)

    if request.GET.get('not_first_floor'):
        flats = flats.exclude(floor=1)

    """ if request.GET.get('not_last_floor'):
        max_floors = Flat.objects.values_list('max_floor', flat=True).distinct()
        flats = flats.exclude(floor__in=max_floors)
    if request.GET.get('only_last_floor'):
        flats = flats.filter(floor=F('max_floor')) """

    if (price_min := request.GET.get('price_min')):
        flats = flats.filter(price__gte=price_min)
    if (price_max := request.GET.get('price_max')):
        flats = flats.filter(price__lte=price_max)

    if (square_min := request.GET.get('square_min')):
        flats = flats.filter(square__gte=square_min)
    if (square_max := request.GET.get('square_max')):
        flats = flats.filter(square__lte=square_max)

    if (kitchen_min := request.GET.get('kitchen_min')):
        flats = flats.filter(kitchen_space__gte=kitchen_min)
    if (kitchen_max := request.GET.get('kitchen_max')):
        flats = flats.filter(kitchen_space__lte=kitchen_max)

    if (decoration := request.GET.getlist('decoration')):
        flats = flats.filter(decoration__in=decoration)

    price = request.GET.get('price')
    if price == '2000000':
        flats = flats.filter(price__lte=price)
    elif price == '5000000':
        flats = flats.filter(price__gte='2000000').filter(price__lte=price)
    elif price == '1000000':
        flats = flats.filter(price__gte='5000000').filter(price__lte=price)
    elif price == '1000000+':
        flats = flats.filter(price__gte='1000000')
    
    square = request.GET.get('square')
    if square == '30':
        flats = flats.filter(square__lte=square)
    elif square == '50':
        flats = flats.filter(square__gte='2000000').filter(square__lte=square)
    elif square == '70':
        flats = flats.filter(square__gte='5000000').filter(square__lte=square)
    elif square == '100':
        flats = flats.filter(square__gte='7000000').filter(square__lte=square)
    elif square == '100+':
        flats = flats.filter(square__gte='100')
    

    """ if (finish := request.GET.getlist('finish')):
        flats = flats.filter(finish__in=finish)

    if (house_type := request.GET.getlist('house_type')):
        flats = flats.filter(house_type__in=house_type)

    if request.GET.get('with_terrace'):
        flats = flats.filter(has_terrace=True)
    if request.GET.get('with_master_bedroom'):
        flats = flats.filter(has_master_bedroom=True)
    if request.GET.get('with_window_in_bathroom'):
        flats = flats.filter(window_in_bathroom=True)
    if request.GET.get('with_erker'):
        flats = flats.filter(has_erker=True)

    if (districts := request.GET.getlist('district')):
        flats = flats.filter(district__in=districts) """

    if (sort := request.GET.get('sort')):
        if sort == 'priceGte':
            flats = flats.order_by('-price')
        elif sort == 'priceLte':
            flats = flats.order_by('price')
        elif sort == 'squareGte':
            flats = flats.order_by('-square')
        elif sort == 'squareLte':
            flats = flats.order_by('square')
        elif sort == 'roomsGte':
            flats = flats.order_by('-rooms')
        elif sort == 'roomsLte':
            flats = flats.order_by('rooms')

    return flats
