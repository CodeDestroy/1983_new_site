from django.contrib import admin
from main.models import *
from main.models.realty import *

admin.site.register(User)


class FlatPhotoInline(admin.StackedInline):
    model = FlatPhoto
    extra = 1
    

class FlatPriceHistoryInline(admin.StackedInline):
    model = FlatPriceHistory
    extra = 1


@admin.register(Flat)
class FlatAdmin(admin.ModelAdmin):
    search_fields = ('description', 'obj__developer__name', 'obj__description', 'obj__alternative_description',
                     'obj__name', 'obj__parent__name', 'obj__region', 'obj__city')
    list_display = ('__str__', 'price', 'floor', 'apartment_number', 'is_deleted', 'hide', 'domclick_hide')
    list_filter = ('rooms', 'decoration', 'is_deleted', 'hide', 'domclick_hide')
    inlines = [FlatPhotoInline, FlatPriceHistoryInline]
    
    class Media:
        js = ('libs/tinymce/tinymce.min.js', 'js/admin/promo.js')


class SubobjectInline(admin.StackedInline):
    model = Object
    extra = 1


@admin.register(Object)
class ObjectAdmin(admin.ModelAdmin):
    search_fields = ('name', 'description', 'developer__name', 'alternative_description', 'region', 'city', 'avito_id')
    list_display = ('name', 'region', 'city', 'is_deleted', 'hide', 'domclick_hide')
    list_filter = ('is_deleted', 'hide', 'domclick_hide')
    inlines = [SubobjectInline]

    def get_queryset(self, request):
        return super().get_queryset(request).filter(parent=None)
    
    class Media:
        js = ('libs/tinymce/tinymce.min.js', 'js/admin/promo.js')


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    class Media:
        js = ('libs/tinymce/tinymce.min.js', 'js/admin/promo.js')

@admin.register(Promo)
class PromoAdmin(admin.ModelAdmin):
    class Media:
        js = ('libs/tinymce/tinymce.min.js', 'js/admin/promo.js')


@admin.register(Bonus)
class BonusAdmin(admin.ModelAdmin):
    class Media:
        js = ('libs/tinymce/tinymce.min.js', 'js/admin/promo.js')
