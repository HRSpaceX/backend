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
    patronymic = models.CharField(
        max_length=50,
        blank=False,
        null=False,
        verbose_name='Отчество'
    )
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
        return f'Аккаунт {self.user.first_name} {self.patronymic}'


class Company(models.Model):
    ...
