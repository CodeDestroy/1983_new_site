import hashlib

from django.core.management import BaseCommand

from main.models.realty import FlatPhoto


class Command(BaseCommand):
    help = 'Check duplicated photos'

    def handle(self, *args, **options):
        photo_hashes = {}
        for photo in FlatPhoto.objects.all():
            with photo.photo.open('rb') as f:
                hash = hashlib.md5()
                if f.multiple_chunks():
                    for chunk in f.chunks():
                        hash.update(chunk)
                else:
                    hash.update(f.read())
                hash = hash.hexdigest()
                if not hash in photo_hashes:
                    photo_hashes[hash] = []
                photo_hashes[hash].append(photo.pk)
        for hash in photo_hashes:
            if len(photo_hashes[hash]) > 1:
                photos = FlatPhoto.objects.filter(pk__in=photo_hashes[hash])
                first = photos[0]
                photos = photos[1:]
                for photo in photos:
                    if photo.photo != first.photo:
                        photo.photo.delete()
                        photo.photo = first.photo
                        photo.save()
