# Тема

Блок, отвечающий за глобальные переменные цветов, типографики и отступов.
Миксуется к самому внешнему блоку, например `body`. Это обязательное условие для работы системы.

```html
<body class="page
  theme
  theme_color_default
  theme_space_default
  theme_size_default
  theme_gap_medium
  ">
  ...
</body>
```

Получается, что слой темы состоит из нескольких маленьких тем. Их можно менять независимо друг от друга. Т.е. можно поменять цвет, не трогая типографику и отступы.

На странице можно использовать несколько тем.

```html
<body class="page
  theme
  theme_color_default
  theme_space_default
  theme_size_default
  theme_gap_medium
  ">

  <section class="section theme theme_color_inverse">
    <!-- секция с инверсией цветов -->
    ...
  </section>

  <section class="section theme theme_color_brand">
    <!-- секция с цветами бренда -->
    ...
  </section>
</body>
```

Модификаторы       | Значение                                                     | Описание
------------------ | ------------------------------------------------------------ | ----------------------------------
`color`            | `whitepaper-brand` `whitepaper-default` `whitepaper-inverse` | Цветовая схема
`size`             | `default`                                                    | Размеры и высоты строк типографики
`space`            | `default`                                                    | Размеры отступов
`breakpoint`       | `default`                                                    | Точки изменения интерфейса при адаптиве
`font`             | `default`                                                    | Используемый шрифт
`gap`              | `large` `medium` `small`                                     | Размер расстояния между колонками сетки
`menu`             | `default`                                                    | Размер бокового меню

## Новая тема

Чтобы создать темы для своего проекта, скопируй на [уровень своего проекта](whitepaper-stub.md) блок `theme`. Файловая структура блока:

```
theme/
  color/
  default.css   // по аналогии создай файл с названием своей темы
  size/
  default.css   // по аналогии создай файл с названием своей темы
  space/
  default.css   // по аналогии создай файл с названием своей темы
  breakpoint/
  default.css   // по аналогии создай файл с названием своей темы
  font/
  default.css   // по аналогии создай файл с названием своей темы
  menu/
  default.css   // по аналогии создай файл с названием своей темы
  gap/
  large.css     // эти значения зависят от значений модификатора space
  medium.css
  small.css
```
