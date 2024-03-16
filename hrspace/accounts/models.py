from django.db import models

from core.constants import AccLimits
from django.conf import settings


class Account(models.Model):
    """Модель Аккаунта, расширяющая модель
    Пользователя с помощью подключения OneToOne."""

    class Role(models.TextChoices):
        """Список доступных значений для поля 'роль'."""
        HEADHUNTER = 'HH', 'Рекрутер',
        HH_AGENCY = 'AH', 'Кадровое Агенство',
        COMPANY = 'СO', 'Компания'

    user = models.OneToOneField(settings.AUTH_USER_MODEL,
                                on_delete=models.CASCADE,
                                verbose_name='Пользователь')
    phone = models.CharField(
        max_length=AccLimits.PHONE_MAX_LEN.value,
        blank=False,
        null=False,
    )
    role = models.CharField(
        max_length=AccLimits.ROLE_MAX_LEN.value,
        blank=False,
        choices=Role.choices,
        default=Role.COMPANY,
        verbose_name='Роль',
    )

    class Meta:
        verbose_name = 'Аккаунт'
        verbose_name_plural = 'Аккаунты'

    def __str__(self) -> str:
        return f'Аккаунт {self.user.username}'


class Company(models.Model):
    """Модель Компании"""
    account = models.OneToOneField(
        'Account',
        on_delete=models.CASCADE,
        related_name='company',
        verbose_name='Компания'
    )
    name = models.CharField(
        max_length=AccLimits.NAME_MAX_LEN.value,
        verbose_name='Название'
    )


class HeadHunter(models.Model):
    """Модель Рекрутера"""
    account = models.OneToOneField(
        'Account',
        on_delete=models.CASCADE,
        related_name='headhunter',
        verbose_name='Аккаунт'
    )


class HeadHunterAgency(models.Model):
    """Модель кадрового агентсва"""
    account = models.OneToOneField(
        'Account',
        on_delete=models.CASCADE,
        related_name='hh_agency',
        verbose_name='Аккаунт'
    )
    name = models.CharField(
        max_length=AccLimits.NAME_MAX_LEN.value,
        verbose_name='Название'
    )
