# Generated by Django 4.2 on 2024-03-15 14:22

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="City",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        choices=[("tver", "Тверь"), ("pskov", "Псков")],
                        max_length=100,
                        verbose_name="Город",
                    ),
                ),
            ],
            options={
                "verbose_name": "Город",
                "verbose_name_plural": "Города",
                "ordering": ("name",),
            },
        ),
        migrations.CreateModel(
            name="Profession",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        choices=[
                            ("analyst", "Аналитик данных"),
                            ("data_scientist", "Специалист по Data Science"),
                            ("python_dev", "Python-разработчик"),
                            ("web_dev", "Веб-разработчик"),
                            ("qa_engineer", "Инженер по тестированию(QA)"),
                        ],
                        max_length=200,
                        verbose_name="Профессия",
                    ),
                ),
            ],
            options={
                "verbose_name": "Профессия",
                "verbose_name_plural": "Профессии",
                "ordering": ("name",),
            },
        ),
        migrations.CreateModel(
            name="Order",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        max_length=200,
                        validators=[
                            django.core.validators.RegexValidator(
                                message="Принимаются слова из букв", regex="[a-zа-я]+"
                            )
                        ],
                        verbose_name="Название вакансии",
                    ),
                ),
                (
                    "type_employment",
                    models.CharField(
                        choices=[
                            ("full_day", "Полный день"),
                            ("shift_schedule", "Сменный график"),
                            ("flexible_schedule", "Гибкий график"),
                            ("remote_work", "Удалённая работа"),
                            ("watch_method", "Вахтовый метод"),
                        ],
                        max_length=200,
                        verbose_name="Тип занятости",
                    ),
                ),
                (
                    "salary_from",
                    models.PositiveIntegerField(
                        default=0,
                        validators=[
                            django.core.validators.MinValueValidator(
                                17000, "Заработная плата по ТК не менее 17 000"
                            )
                        ],
                        verbose_name="Минимальная зарплата gross(до вычета НДФЛ)",
                    ),
                ),
                (
                    "salary_to",
                    models.PositiveIntegerField(
                        default=0,
                        validators=[
                            django.core.validators.MaxValueValidator(
                                17000, "Проверьте предлагаемую з/п"
                            )
                        ],
                        verbose_name="Максимальная зарплата gross(до вычета НДФЛ)",
                    ),
                ),
                (
                    "city",
                    models.ManyToManyField(
                        related_name="cities", to="bid.profession", verbose_name="Город"
                    ),
                ),
                (
                    "profession",
                    models.ManyToManyField(
                        related_name="professions",
                        to="bid.profession",
                        verbose_name="Профессия",
                    ),
                ),
            ],
            options={
                "verbose_name": "Заявка",
                "verbose_name_plural": "Заявки",
            },
        ),
    ]
