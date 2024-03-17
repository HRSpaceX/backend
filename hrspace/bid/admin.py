from django.contrib import admin

from .models import (BenefitsPackage, City, HrResponsibility, Order,
                     Profession, Skill, TypeEmployment)

admin.site.register(BenefitsPackage)
admin.site.register(City)
admin.site.register(HrResponsibility)
admin.site.register(Order)
admin.site.register(Profession)
admin.site.register(Skill)
admin.site.register(TypeEmployment)
