from django.contrib import admin
from .models import (BenefitsPackage, City, HrResponsibility, Order,
                     Profession, TypeEmployment, Skill)

admin.site.register(BenefitsPackage)
admin.site.register(City)
admin.site.register(HrResponsibility)
admin.site.register(Order)
admin.site.register(Profession)
admin.site.register(TypeEmployment)
admin.site.register(Skill)
