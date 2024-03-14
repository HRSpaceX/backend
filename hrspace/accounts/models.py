from django.db import models
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
        max_length=17,
        blank=False,
        null=False,
    )
    role = models.CharField(
        max_length=18,
        blank=False,
        choices=Role.choices,
        default=Role.COMPANY,
        verbose_name='Роль',
    )

    class Meta:
        verbose_name = 'Аккаунт'
        verbose_name_plural = 'Аккаунты'

    def __str__(self) -> str:
        return f'Аккаунт {self.user.first_name} {self.user.second_name}'


class Company(models.Model):
    """Модель Компании и Кадрового Агенства"""
    account = models.ForeignKey(
        Account,
        on_delete=models.CASCADE,
        related_name='account',
        verbose_name='Аккаунт'
    )
    name = models.CharField(
        max_length=50,
        verbose_name='Название'
    )


class HeadHunter(models.Model):
    """Модель Рекрутера"""
    account = models.ForeignKey(
        Account,
        on_delete=models.CASCADE,
        related_name='account',
        verbose_name='Аккаунт'
    )
