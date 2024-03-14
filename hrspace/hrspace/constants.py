BENEFITS_PACKAGE_LENGTH = 200
BUSINESS_TRIP_LENGTH = 50
EDUCATION_LENGTH = 50
LINE_OF_BUSINESS = 200
PAYMENT_LENGTH = 50
PORTFOLIO_LENGTH = 50
TYPE_EMPLOYMENT_LENGTH = 200
VACANCY_NAME = 200
WORK_EXPERIENCE_LENGTH = 100
WORK_FORMAT_LENGTH = 200

BENEFITS_PACKAGE_CHOICES = [
    ("VHI", "ДМС"),
    ("vocation", "Отпуск"),
    ("employment_record", "Оформление по ТК"),
    ("free_education", "Компенсация обучения"),
    ("free_meals", "Компенсация питания")
]

BUSINESS_TRIP_CHOICES = [
    ("yes", "Да"),
    ("no", "Нет"),
    ("sometimes", "Иногда")
]

EDUCATION_CHOICES = [
   ("is_required", "Требуется"),
   ("not_required", "Не требуется")
]

EMPLOYMENT_CHOICES = [
    ("full_day", "Полный день"),
    ("shift_schedule", "Сменный график"),
    ("flexible_schedule", "Гибкий график"),
    ("remote_work", "Удалённая работа"),
    ("watch_method", "Вахтовый метод")
]

FORMAT_INTERVIEWS_CHOICES = [
    (1, "Со всеми кандидатами с релевантным резюме"),
    (2, "Итоговое собеседование с кандидатами, "
        "прошедшими предварительный отбор")
]

PAYMENT_CHOCES = [
    ("credit_card", "Банковская карта"),
    ("instant_payment_system", "СБП")
]

PORTFOLIO_CHOICES = [
   ("is_required", "Требуется"),
   ("not_required", "Не требуется")
]

RESPONSIBILITY_HR_CHOICES = [
    (1, "Поиск и предоставление релевантных резюме"),
    (2, "Проведение первичных интервью"),
    (3, "Организация собеседований с заказчиком + "
        "присутствие на собеседованиях"),
    (4, "Запрос рекомендаций с предыдущих мест работы"),
    (5, "Отправка кандидату тестового задания"),
    (6, "Отправка кандидату дополнительной анкеты"),
    (7, "Отправка финалисту приглашения на работу")
]

WORK_EXPERIENCE_CHOICES = [
   ("without_experience", "Без опыта"),
   ("up_to_year", "До года"),
   ("from_one_to_three_years", "От 1 года до 3 лет"),
   ("more_three_years", "Более 3 лет")
]

WORK_FORMAT_CHOICES = [
    ("remote", "Удалённая"),
    ("mixed", "Гибрид"),
    ("office", "Офис")
]
