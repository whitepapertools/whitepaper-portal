# Точки перестроения

Postcss-переменные с префиксом `$screen-` используются для адаптива сеточных конструкций и уникальных блоков.

```css
/* Переменные для mobile-first подхода */
$screen-xs: 320px; /* Смартфоны */
$screen-s: 720px; /* Планшеты в вертикальном режиме */
$screen-m: 1024px; /* Планшеты в горизонтальном режиме */
$screen-l: 1280px; /* Ноутбуки */
$screen-xl: 1440px; /* Настольные компьютеры и ноутбуки */
$screen-xxl: 1600px; /* Настольные компьютеры */

/* Переменные для desktop-first подхода */
$screen-xs-max: 719px;
$screen-s-max: 1023px;
$screen-m-max: 1279px;
$screen-l-max: 1439px;
$screen-xl-max: 1599px;
$screen-xxl-max: 1920px;
```

## Использование в уникальных блоках

?> Значения брейкпоинтов хранятся в postcss-переменных, для лёгкого применениях их в любых блоках проекта.

```css
@import "your/path/to/theme_breakpoint_default.post.css";
.block {
	width: 200px;
	...
}
@media screen and (min-width: $screen-s) {
	.block {
		width: 300px;
		...
	}
}
@media screen and (min-width: $screen-l) {
	.block {
		width: 450px;
		...
	}
}
```
