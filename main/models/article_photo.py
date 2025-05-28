from django.db import models


def directory_path(instance, filename):
    return f'article/{instance.article.pk}/{filename}'


class ArticlePhoto(models.Model):
    article = models.ForeignKey('Article', on_delete=models.CASCADE, verbose_name='Новость', null=True, blank=True)
    photo = models.FileField(verbose_name='Фото', upload_to=directory_path,
                             help_text='Фото формата .png, .jpg, .jpeg. Не более 2мб')

    class Meta(object):
        app_label = 'main'
        db_table = 'article_photo'
        verbose_name = 'фото новости'
        verbose_name_plural = 'фотография новости'
