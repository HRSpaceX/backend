from django.db import models


class Order(models.Model):
    """Модель заявки"""

    class WorkFormat(models.TextChoices):
        """Перечисление, представляющее
        различные форматы работы"""

        FULL_DAY = 'FD', 'Полный день'
        SHIFT_SCHEDULE = 'SS', 'Сменный график'
        FLEXIBLE_SHEDULE = 'FS', 'Гибкий график'
        REMOTE_WORK = 'RW', 'Удаленная работа'
        SHIFT_METHOD = 'SM', 'Вахтовый метод'

    class TypeOfEmployment(models.TextChoices):
        """Перечисление, представляющее
        различные типы занятости"""

        FULL_TIME_EMPLOYMENT = 'FTE', 'Полная занятость'
        PART_TIME_EMPLOYMENT = 'PTE', 'Частичная занятость'
        PROJECT_WORK_OR_ONE_TIME_ASSIGMENT = (
            'PWOTA', 'Проектная работа/разовое задание')
        VOLUNTEERING = 'V', 'Волонтерство'
        INTERNSHIP = 'I', 'Стажировка'

    name = models.CharField(
        max_lenght=100,
        verbose_name='Название вакансии'
    )
    profession = ...
    city = ...
    salary_from = models.PositiveIntegerField()
    salary_to = models.PositiveIntegerField()
    currancy = models.CharField(
        verbose_name='Валюта'
    )
    work_format = models.CharField(
        max_length=20,
        choices=WorkFormat.choices,
        verbose_name='Формат работы',
    )
    type_of_employment = models.CharField(
        max_length=50,
        choices=TypeOfEmployment.choices,
        verbose_name='Тип занятости'
    )
    # Описание вакансии
    description = ...


class VacancyDescription(models.Model):
    """Модель описания вакансии"""
    ...


class City(models.Model):
    name = models.CharField()


class Profession(models.Model):
    name = models.CharField()


class Currancy(models.Model):
    ...
