**Реализовать приложение CLIENT\SERVER для
создания акции по рассылки подарков.**

Требования к CLIENT.
Страница с таблицей со всеми созданными акциями.
Модалка создания акции.
Модалка редактирования акции.
1. Использовать react@16.0.0.
2. Для валидации форм использовать библиотеки Formik и Yup.
3. Для стейта использовать redux, redux-thunk.
4. В таблице должна быть пагинация и сортировка реализованная на стороне сервера.
5. В таблице на каждом item должна быть конпка удалить по нажатию на которую
удаляется акция и кнопка редактирования акции.
6. Таблица должна содержать следующие колонки:
"Название рассылки",
"Дата рассылки",
"Кол-во отправленных подарков",
"Отмена рассылки" (удалить),
"Редактировать рассылку" (редактировать).
7. В таблице должен быть реализован через сервер поиск.
8. В модалке создания\редактирования акции должны быть следующие поля (Название и
критерии для валидации), все поля должны быть обязательно заполнены:
Название рассылки
Кнопка выбора подарка, по нажатию на которую открывается модальное окно,
где будут отображены карточки всех доступных подарков для рассылки, они
подгружаются с сервера. На карточке подарка должно быть отображено:
Название подарка, кол-во оставшихся подарков, дата сгорания подарка,
наминал подарка (Все подарки захардкожены в базе, не менее 5ти штук).
Кол-во подарков (number input value > 0 && не больше оставшихся).
Кол-во дней на взятие подарка (number input value > 0 && не менее 2х
дней до сгорания подарка).
Кол-во дней на получение подарка (number input value > 0 && не менее 2х
дней до сгорания подарка).
Описание акции (text field value.lenght <= 500).
Номера карт (text field value.lenght <= 5000, только цифры и запятые).
9. По нажатию кнопки создать акцию в модалке создания акции, всплывает модальное
окно о подтверждении создания акции и затем акция записывается в таблицу.
10. По нажатию на кнопки редактирование акции открывается та же модалка что и на
создании, только значения уже заполнены, по нажатию сохранить так же должно
быть подтверждение о сохранении.
11. Для запросов на сервер использовать axios
12. Можно использовать библеатеку стилей MatreialUI.
13. Можно Использовать SCSS.

Требования к SERVER.
1. Использовать express@^4.0.0.
2. Для работы с БД библиотеку mysql и БД MySQL соотвественно.
