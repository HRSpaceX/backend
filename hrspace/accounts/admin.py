from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserChangeForm
from accounts.models import Account

User = get_user_model()


class AccountAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'phone',
        'role',
    )


class AccountInline(admin.StackedInline):
    model = Account
    can_delete = False
    verbose_name_plural = 'Аккаунты'


class AccountUserAdmin(UserAdmin):
    inlines = (AccountInline, )
    form = UserChangeForm


class CompanyAdmin(admin.ModelAdmin):
    list_display = (
        'name',
    )


class HeadHunterAdmin(admin.ModelAdmin):
    list_display = (
        'id',
    )


class HeadHunterAgencyAdmin(admin.ModelAdmin):
    list_display = (
        'id',
    )


admin.site.unregister(User)
admin.site.register(User, AccountUserAdmin)
