# Иконки

<div class="preview">
    <div class="icon icon_name_preview icon_view_brand icon_size_m">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L13.4617 8.47109L19.0711 4.92893L15.5289 10.5383L22 12L15.5289 13.4617L19.0711 19.0711L13.4617 15.5289L12 22L10.5383 15.5289L4.92893 19.0711L8.47109 13.4617L2 12L8.47109 10.5383L4.92893 4.92893L10.5383 8.47109L12 2Z"/>
        </svg>
    </div>
</div>

* [Модификаторы блока](#Модификаторы-блока)
* [Пример](#Пример)

___


В whitepaper на уровне контента предусмотрен блок `icon` для вставки иконок. Иконки тематизируются аналогично тексту с помощью модификаторов. Иконки можно вставлять инлайново, или с помощью шаблонизаторов.


## Модификаторы блока

Модификатор | Значение | Описание
----------- | -------- | --------
`view`      | `alert` `brand` `ghost` `link` `primary` `secondary` `success` `warning` | Цвет иконки
`round`     | `alert` `brand` `ghost` `primary` `secondary` `success` `warning` `default` | Цвет круглой подложки
`border`    | `alert` `brand` `ghost` `primary` `secondary` `success` `warning` | Цвет бордера бесцветной круглой подложки
`size`      | `s` `m` | Размер иконки


## Графические файлы

Все графические элементы должны быть подвязаны на модификатор `name`. Соответственно, должен быть css-класс `.icon_name_burger` и для него графический элемент `icon_name_burger.svg`.

___


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
