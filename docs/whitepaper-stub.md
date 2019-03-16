# Локальная среда, bem-design-stub

Чтобы развернуть тренировочную среду у себя на компьютере, тебе понадобится:
+ Завести аккаунт на [GitHub](https://github.com/join?source=header-home)
+ Скачать [GitHub Desktop](https://desktop.github.com)
+ Склонировать репозиторий [bem-design-stub](https://github.com/bemdesign/bem-design). 'Clone or download' > 'Open in Desktop'
+ Открой консоль и зайди в директорию, куда склонировал репозиторий `cd /Users/username/bem-design-stub`
+ Установить [npm и nodeJS](https://nodejs.org/en/download/)
+ Установи все зависимости проекта `npm i`
+ Обнови все зависимости проекта `npm update`
+ Сохрани путь до исполняемых файлов в глобальную переменную PATH `export PATH=./node_modules/.bin:$PATH`
+ Собери проект с очисткой кэша `enb make -n`
+ Запусти проект `npm start`
+ В браузере перейди по ссылке 0.0.0.0:8080. Здесь отображаются все созданные страницы проекта

## Проект-шаблон

Попробовать работу с проектом на БЭМ-стеке можно на нашем [шаблоне](https://github.com/whitepapertools/whitepaper-stub).
