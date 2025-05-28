from django import template

register = template.Library()


@register.simple_tag(name='fix_page_request')
def fix_page_request(request):
    request = request.copy()
    if 'page' in request:
        del request['page']
    if request.urlencode():
        return request.urlencode() + '&'
    return ''
