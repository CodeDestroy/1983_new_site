from django.conf import settings
from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=50, verbose_name='Название')
    description = models.TextField(null=True, blank=True, verbose_name='Описание')
    created_at = models.DateTimeField(auto_created=True, auto_now_add=True, verbose_name='Дата создания')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Дата обновления')
    is_deleted = models.BooleanField(default=False, verbose_name='Удалена?')

    def __str__(self):
        return f'{self.pk}) {self.title}'

    def images(self):
        import glob
        imgs = []
        for file_type in ['jpg', 'png', 'jpeg', 'gif']:
            for img in glob.glob(f'{settings.ARTICLES_ROOT}/{self.pk}/*.{file_type}', recursive=True):
                imgs.append(img.replace(settings.ARTICLES_ROOT, settings.ARTICLES_URL))
        return imgs

    class Meta(object):
        app_label = 'main'
        db_table = 'articles'
        verbose_name = 'новость'
        verbose_name_plural = 'новости'
