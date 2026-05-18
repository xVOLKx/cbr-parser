# Парсер курсов валют (ЦБ РФ)

Веб-приложение для управления товарами: добавление, просмотр, редактирование, удаление (CRUD). Данные хранятся в SQLite.

## Как 🚀 запустить

1. Установи [Node.js](https://nodejs.org/)
2. Склонируй репозиторий:
   ```bash
   git clone https://github.com/xVOLKx/cbr-parser.git
   ```
3. Перейди в папку проекта:
   ```bash
   cd cbr-parser
   ```
4. Установи зависимости:
   ```bash
   npm install axios
   ```
5. Запусти:
   ```bash
   node cbr_json.js
   ```
## Результат

 В консоль выводятся первые 5 курсов
 Все 54 курса сохраняются в файл cbr_rates.json

## 🛠️ Технологии

- Node.js
- Axios
- JSON API