# Generated by Django 5.0 on 2024-06-19 11:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0032_alter_objectstat_obj'),
    ]

    operations = [
        migrations.AddField(
            model_name='bonus',
            name='address',
            field=models.CharField(blank=True, max_length=150, null=True, verbose_name='Адрес'),
        ),
        migrations.AddField(
            model_name='bonus',
            name='phone',
            field=models.CharField(blank=True, max_length=50, null=True, verbose_name='Номер телефона'),
        ),
    ]
