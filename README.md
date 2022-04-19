# Gulp 4 - сборка UIUX-Designer

> Используется Gulp 4

## Начало работы

Для работы с данной сборкой в новом проекте, склонируйте все содержимое репозитория <br>
https://github.com/dr-uiux-design/gulp4_starter2022.git

Затем, находясь в корне проекта, запустите команду `npm i`, которая установит все находящиеся в package.json зависимости.
После этого вы можете использовать любую из предложенных команд сборки (итоговые файлы попадают в папку **dist** корневой директории): <br>
`npm start` - базовая команда, которая запускает сборку для разработки, используя browser-sync

`npm run build` - команда для продакшн-сборки проекта. Все ассеты сжаты и оптимизированы для выкладки на хостинг.

`npm run zip` - команда собирает папку продакшн-сборки в zip-архив (выполнить после команды `npm run build`).

`npm run clean` - удаляет папку dist.

## Работа со шрифтами (папка ./src/fonts/)
`npm run fontTTF` - конвертирует шрифты otf в ttf.
`npm run fontWoff` - конвертирует шрифты ttf в woff. 
`npm run fontWoff2` - конвертирует шрифты ttf в woff2.

## SVG спрайты (папка ./src/img/_svg/)
1) Закинуть svg иконки в эту папку и выполнить команду
`npm run spriteSvg` - конвертирует svg иконки в спрайт.
## Структура папок и файлов

├── gulp/                         # Папки с тасками и плагинами Gulp

├── src/                          # Рабочие файлы проекта
│   ├── components                # папка для хранения личных компонентов или плагинов
│   ├── files                     # папка для хранения favicon / mail.php и других файлов, которые нужны в корне
│   ├── fonts                     # папка для хранения шрифтов формате ttf и otf (для конвертации и подключения локально)
│   ├── html                  		# папка для хранения html-частей всех страниц
│       └── blocks             	  # Файлы html блоков страницы
│       └── chank                 # Файлы для подключения шрифтов в head + сам head
│       └── index.html            # Главный html-файл
│       └── privacy-policy.html   # Политика конфиденциальности
│       └── template.html         # Шаблон html-разметки
│       └── thank-you.html       	# Страница "Спасибо за заявку!"
│   ├── img                       # Главная папка для хранения картинок
│   │   └── _svg         				  # Папка хранения иконок для svg спрайта
│   │   ├── icons                 # Папка для хранения иконок для прямого подключения
│   ├── js                        # Скрипты
│   │   └── module                # Папка для хранения js модулей
│   │   └── vendor                # Папка для хранения сторонних js библиотек
│   │   └── main.js               # Главный файл скриптов
│   ├── scss                      # Стили сайта (препроцессор sass в scss-синтаксисе)
│   │   └── _config/_base.scss    # Файл для написания глобальных стилей
│   │   └── _config/_fonts.scss   # Файл для подключения локальных шрифтов
│   │   └── _config/_vars.scss  	# Файл для написания css- или scss-переменных
│   │   └── _blocks/  						# Папка для хранения стилей для блоков
│   │   └── _pages/  							# Папка для хранения стилей для доп. страниц
│   │   └── vendor/  							# Папка для хранения стилей библиотек
│   │   └── mixins/  							# Папка для хранения миксинов
│   │   └── libs.scss      				# Подключение стилей библиотек
│   │   └── main.scss             # Главный файл стилей
└── .gitignore                    # файл с исключениями для экспорта на github
└── gulpfile.js                   # файл с настройками gulp-сборки
└── .htmlhintrc                   # файл с настройками валидации html кода
└── package.json                  # файл с настройками сборки и установленными пакетами
└── .editorconfig                 # файл с настройками форматирования кода
└── .ecrc                         # файл с настройками пакета editorconfig-checker (исключает ненужные папки)
└── .stylelintrc                  # файл с настройками валидации css кода
└── README.md                     # документация сборки
