# Используем базовый образ с поддержкой Linux
FROM node:14

# Установка утилиты pdftoppm
RUN apt-get update && apt-get install -y poppler-utils

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копирование зависимостей и package.json
COPY package*.json ./
RUN npm install

# Копируем необходимые файлы из вашего проекта
COPY . .

# Указываем команду для запуска вашего приложения
CMD ["node", "app.js"]
