# Generated by Django 4.2 on 2024-03-14 19:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Application',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vacancy', models.CharField(max_length=200, verbose_name='Название вакансии')),
                ('work_format', models.CharField(choices=[('remote', 'Удалённая'), ('mixed', 'Гибрид'), ('office', 'Офис')], max_length=200, verbose_name='Формат работы')),
                ('salary', models.DecimalField(decimal_places=2, max_digits=8, verbose_name='Заработная плата')),
                ('type_of_employment', models.CharField(choices=[('full_day', 'Полный день'), ('shift_schedule', 'Сменный график'), ('flexible_schedule', 'Гибкий график'), ('remote_work', 'Удалённая работа'), ('watch_method', 'Вахтовый метод')], max_length=200, verbose_name='Тип занятости')),
                ('amount_of_subordinate', models.PositiveSmallIntegerField(verbose_name='Количество подчинённых в управлении')),
                ('benefits_package', models.CharField(choices=[('VHI', 'ДМС'), ('vocation', 'Отпуск'), ('employment_record', 'Оформление по ТК'), ('free_education', 'Компенсация обучения'), ('free_meals', 'Компенсация питания')], max_length=200, verbose_name='Социальный пакет')),
                ('business_trip', models.CharField(choices=[('yes', 'Да'), ('no', 'Нет'), ('sometimes', 'Иногда')], max_length=50, verbose_name='Командировка')),
                ('work_experience', models.CharField(choices=[('without_experience', 'Без опыта'), ('up_to_year', 'До года'), ('from_one_to_three_years', 'От 1 года до 3 лет'), ('more_three_years', 'Более 3 лет')], max_length=100, verbose_name='Опыт работы')),
                ('employee_skills_include', models.TextField(verbose_name='Обязанности сотрудника')),
                ('skill', models.TextField(verbose_name='Ключевые навыки сотрудника')),
                ('employee_stop_list', models.TextField(verbose_name='Стоп-лист сотрудников')),
                ('education', models.CharField(choices=[('is_required', 'Требуется'), ('not_required', 'Не требуется')], max_length=50, verbose_name='Образование')),
                ('portfolio', models.CharField(choices=[('is_required', 'Требуется'), ('not_required', 'Не требуется')], max_length=50, verbose_name='Портфолио')),
                ('amount_of_employees', models.PositiveSmallIntegerField(verbose_name='Количество сотрудников')),
                ('award', models.DecimalField(decimal_places=2, max_digits=8, verbose_name='Вознаграждение за сотрудника')),
                ('responsibility_hr', models.PositiveSmallIntegerField(choices=[(1, 'Поиск и предоставление релевантных резюме'), (2, 'Проведение первичных интервью'), (3, 'Организация собеседований с заказчиком + присутствие на собеседованиях'), (4, 'Запрос рекомендаций с предыдущих мест работы'), (5, 'Отправка кандидату тестового задания'), (6, 'Отправка кандидату дополнительной анкеты'), (7, 'Отправка финалисту приглашения на работу')], verbose_name='Обязанности рекрутера')),
                ('required_hr_skills', models.TextField(verbose_name='Обязательные навыки рекрутера')),
                ('start_work', models.DateField(verbose_name='Дата вступления сотрудника в должность')),
                ('start_interview', models.DateField(verbose_name='Старт собеседований с кандидатом')),
                ('format_interviews', models.PositiveSmallIntegerField(choices=[(1, 'Со всеми кандидатами с релевантным резюме'), (2, 'Итоговое собеседование с кандидатами, прошедшими предварительный отбор')], verbose_name='Формат собеседований')),
                ('payment', models.CharField(choices=[('credit_card', 'Банковская карта'), ('instant_payment_system', 'СБП')], max_length=50, verbose_name='Тип оплаты')),
            ],
            options={
                'verbose_name': 'Заявка',
                'verbose_name_plural': 'Заявки',
            },
        ),
    ]
