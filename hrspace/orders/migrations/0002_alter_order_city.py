# Generated by Django 4.2 on 2024-03-16 17:38

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("orders", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="order",
            name="city",
            field=models.ManyToManyField(
                related_name="cities", to="orders.city", verbose_name="Город"
            ),
        ),
    ]
