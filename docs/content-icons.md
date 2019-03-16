# Иконки

<div class="preview">
	<div class="icon icon_name_preview icon_view_brand icon_size_m">
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 2L13.4617 8.47109L19.0711 4.92893L15.5289 10.5383L22 12L15.5289 13.4617L19.0711 19.0711L13.4617 15.5289L12 22L10.5383 15.5289L4.92893 19.0711L8.47109 13.4617L2 12L8.47109 10.5383L4.92893 4.92893L10.5383 8.47109L12 2Z"/>
		</svg>
	</div>
</div>

В whitepaper на уровне контента предусмотрен блок `icon` для вставки иконок. Иконки тематизируются аналогично тексту с помощью модификаторов. Для шаблонизации иконок мы рекомендуем использовать bemhtml, который позволяет инлайново вставлять svg-иконки в вёрстку, а также прокидывать модификаторы и переменные для тематизации.

## Модификаторы блока

| Модификатор   | Значение                            | Описание
|---------------|-------------------------------------| ---------------------------------
| name          | Названия ваших иконок               | Отвечает за загрузку самих иконок
| round         | default / disable / primary / secondary / ghost / success / warning / alert | Добавляет круглую подложку
| view          | default / disable / primary / secondary / ghost / success / warning / alert | Тема иконки
| size          | s / m | Размер иконки

## Пример

<div class="icon icon_name_preview icon_view_brand icon_size_m">
	<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 2L13.4617 8.47109L19.0711 4.92893L15.5289 10.5383L22 12L15.5289 13.4617L19.0711 19.0711L13.4617 15.5289L12 22L10.5383 15.5289L4.92893 19.0711L8.47109 13.4617L2 12L8.47109 10.5383L4.92893 4.92893L10.5383 8.47109L12 2Z"/>
	</svg>
</div>

``` html
<div class="icon icon_name_preview icon_view_brand icon_size_m">
	<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 2L13.4617 8.47109L19.0711 4.92893L15.5289 10.5383L22 12L15.5289 13.4617L19.0711 19.0711L13.4617 15.5289L12 22L10.5383 15.5289L4.92893 19.0711L8.47109 13.4617L2 12L8.47109 10.5383L4.92893 4.92893L10.5383 8.47109L12 2Z"/>
	</svg>
</div>
```



<!-- В библиотеке иконки предусмотрены для использования, как самостоятельно в интерфейсе, так и в паре с текстовым блоком. Поэтому все иконки существуют в тех же цветах, что и текст. Визуально модификации текста можно посмотреть в разделе [Типографика](http://whitepaper.tools/icon.html).

Размеров всего два: `s` – 16×16px и `m` – 20×20px.

Чтобы вставить иконку, нужно знать название иконки, размер и необходимый цвет. Иконки вставляются в разметку шаблоном инлайново. Это позволяет перекрашивать их на лету. -->

<!-- | Модификаторы `icon` | Значения                                                          |
|---------------------|-------------------------------------------------------------------|
| size                | s / m                                                             |
| view                | alert / disable / ghost / primary / secondary / success / warning |
| name                | add-1 / add-2 / user / album / allert-2 / anchor / arrow-down / arrow-left-circle / arrow-left / arrow-right-circle / arrow-right / arrow-up / attention-circle / attention / back / blog / bug / cancel / canceled / check-circle / check / cheque-fail / cheque-progress / cheque-success / close-circle / close / comment / connect-circle / crop / devices / double-arrow-down / double-arrow-up / enter / export / fail / fave-1 / filter / front / globe / hamburger / help / list / lock-circle / lock / mail-1 / marker / minus / next / output / part / pause / phone-1 / photo / picture / play / playlist / previous / protect / refresh / repeat-song / repeat / save / search / shuffle / statistic / swap / target / time / track / trash / upload / user / volume / wait-2 / wait | -->
