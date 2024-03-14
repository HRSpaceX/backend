from django.db import models
from hrspace.constants import (
    BENEFITS_PACKAGE_CHOICES,
    BENEFITS_PACKAGE_LENGTH,
    BUSINESS_TRIP_CHOICES,
    BUSINESS_TRIP_LENGTH,
    EDUCATION_CHOICES,
    EDUCATION_LENGTH,
    EMPLOYMENT_CHOICES,
    FORMAT_INTERVIEWS_CHOICES,
    PAYMENT_CHOCES,
    PAYMENT_LENGTH,
    PORTFOLIO_CHOICES,
    PORTFOLIO_LENGTH,
    RESPONSIBILITY_HR_CHOICES,
    TYPE_EMPLOYMENT_LENGTH,
    VACANCY_NAME,
    WORK_EXPERIENCE_CHOICES,
    WORK_EXPERIENCE_LENGTH,
    WORK_FORMAT_CHOICES,
    WORK_FORMAT_LENGTH,
)


class Application(models.Model):
    '''Модель заявки.'''

    # 1.1
    vacancy = models.CharField("Название вакансии",
                               max_length=VACANCY_NAME)
    # line_of_business = models.CharField("Сфера деятельности",
    #                                     max_length=LINE_OF_BUSINESS)
    # city = models.ForeignKey('cities_light.City',
    #                          on_delete=models.SET_NULL,
    #                          null=True,
    #                          blank=True,
    #                          verbose_name="Город")
    work_format = models.CharField("Формат работы",
                                   choices=WORK_FORMAT_CHOICES,
                                   max_length=WORK_FORMAT_LENGTH)

    # 1.2
    salary = models.DecimalField("Заработная плата",
                                 max_digits=8,
                                 decimal_places=2)
    type_of_employment = models.CharField("Тип занятости",
                                          choices=EMPLOYMENT_CHOICES,
                                          max_length=TYPE_EMPLOYMENT_LENGTH)
    amount_of_subordinate = models.PositiveSmallIntegerField(
        "Количество подчинённых в управлении"
    )
    # work_schedule = ("График работы")

    # 1.3
    benefits_package = models.CharField("Социальный пакет",
                                        choices=BENEFITS_PACKAGE_CHOICES,
                                        max_length=BENEFITS_PACKAGE_LENGTH)
    business_trip = models.CharField("Командировка",
                                     choices=BUSINESS_TRIP_CHOICES,
                                     max_length=BUSINESS_TRIP_LENGTH)

    # 2
    work_experience = models.CharField("Опыт работы",
                                       choices=WORK_EXPERIENCE_CHOICES,
                                       max_length=WORK_EXPERIENCE_LENGTH)
    employee_skills_include = models.TextField("Обязанности сотрудника")
    skill = models.TextField("Ключевые навыки сотрудника")
    employee_stop_list = models.TextField("Стоп-лист сотрудников")
    education = models.CharField("Образование",
                                 choices=EDUCATION_CHOICES,
                                 max_length=EDUCATION_LENGTH)
    portfolio = models.CharField("Портфолио",
                                 choices=PORTFOLIO_CHOICES,
                                 max_length=PORTFOLIO_LENGTH)

    # 3.1
    amount_of_employees = models.PositiveSmallIntegerField(
        "Количество сотрудников"
    )
    award = models.DecimalField("Вознаграждение за сотрудника",
                                max_digits=8,
                                decimal_places=2)
    responsibility_hr = models.PositiveSmallIntegerField(
        "Обязанности рекрутера",
        choices=RESPONSIBILITY_HR_CHOICES
    )
    required_hr_skills = models.TextField("Обязательные навыки рекрутера")

    # 3.2
    start_work = models.DateField("Дата вступления сотрудника в должность")
    start_interview = models.DateField("Старт собеседований с кандидатом")
    format_interviews = models.PositiveSmallIntegerField(
        "Формат собеседований",
        choices=FORMAT_INTERVIEWS_CHOICES
    )

    # 4
    payment = models.CharField("Тип оплаты",
                               choices=PAYMENT_CHOCES,
                               max_length=PAYMENT_LENGTH)

    class Meta:
        verbose_name = "Заявка"
        verbose_name_plural = "Заявки"

    def __str__(self):
        return self.vacancy
