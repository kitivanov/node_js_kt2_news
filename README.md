# Парсинг новостей

## Установка и запуск:
npm init -y

npm install express ejs axios


## Использование

Запустить сервер:

node server.js

Открыть браузер и запросить, например:

http://localhost:3000/3/news/for/politics

3 — количество последних новостей

politics — категория (business, economic, finances, politics, auto)

Сервер вернёт HTML со списком новостей, заголовком и описанием.
