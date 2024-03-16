from __future__ import annotations

from typing import Any

from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserChangeForm
from django.db.models.query import QuerySet
from django.http import HttpRequest

from accounts.models import Account, Company, HeadHunter, HeadHunterAgency

User = get_user_model()


class CompanyAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'name',
    )


class CompanyInlines(admin.StackedInline):
    model = Company
    can_delete = False
    verbose_name_plural = 'Компании'


class HeadHunterAdmin(admin.ModelAdmin):
    list_display = (
        'id',
    )


class HeadHunterInlines(admin.StackedInline):
    model = HeadHunter
    can_delete = False
    verbose_name_plural = 'Рекрутеры'


class HeadHunterAgencyAdmin(admin.ModelAdmin):
    list_display = (
        'id',
    )


class HeadHunterAgencyInlines(admin.StackedInline):
    model = HeadHunterAgency
    can_delete = False
    verbose_name_plural = 'Кадровые Агенства'


class AccountInline(admin.StackedInline):
    model = Account
    can_delete = False
    verbose_name_plural = 'Аккаунты'


class AccountAdmin(admin.ModelAdmin):
    inlines = (CompanyInlines, HeadHunterInlines, HeadHunterAgencyInlines)
    list_display = (
        'id',
        'phone',
        'role',
    )


class AccountUserAdmin(UserAdmin):
    inlines = (AccountInline, )
    form = UserChangeForm

    def get_queryset(self, request: HttpRequest) -> QuerySet[Any] | None:
        """Возвращает набор запросов пользователей с
        загруженной соответствующей учетной записью"""
        return super().get_queryset(request).select_related('account')

    def phone(self, obj) -> str | None:
        """Возвращает номер телефона соответствующего аккаунту"""
        return obj.account.phone

    def role(self, obj) -> str | None:
        """Возвращает роль соответствующего аккаунту"""
        return obj.account.role

    phone.short_description = 'Номер телефона'
    role.short_description = 'Роль'

    list_display = (
        'id',
        'role',
        'username',
        'email',
        'phone',
        'first_name',
        'last_name',
        'is_staff',
    )


admin.site.unregister(User)
admin.site.register(User, AccountUserAdmin)
admin.site.register(Account, AccountAdmin)
