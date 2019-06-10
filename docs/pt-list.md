# pt-list

<div class="preview">
    <div class="pt-list pt-list_border_all pt-list_view_default" style="min-width: 280px">
    <div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
        <div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
            Первая операция
        </div>
        <div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
            +1000 ₽
        </div>
    </div>
    <div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
        <div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
            Вторая операция
        </div>
        <div class="text text_size_m text_view_alert text_weight_bold text_transform_uppercase text_spacing_s">
            -500 ₽
        </div>
    </div>
    <div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
        <div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
            Третья операция
        </div>
        <div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
            +2000 ₽
        </div>
    </div>
    </div>
</div>

`pt-list` используется для вертикального представления повторяющихся сущностей. Отлично подходит для отображения истории, контактов, вертикальных меню.

* [Модификаторы блока](#Модификаторы)
* [Элементы](#Элементы)
* [Пример](#Пример)

___


## Модификаторы блока

Модификатор      | Значение                                      | Описание
---------------- | --------------------------------------------- | ----------------------------------
`bordered`       | –                                             | Устанавливает границу между элементами
`distribute`     | `between` `default`                           | Распределяет контент внутри элементов `item` по горизонтали
`vertical-align` | `baseline` `center` `top`                     | Распределяет контент внутри элементов `item` по вертикали
`space-a`        | `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` | Внутренние отступы со всех сторон
`space-h`        | `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` | Внутренние отступы по горизонтали
`space-v`        | `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` | Внутренние отступы по вертикали
`space-r`        | `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` | Внутренний отступ справа
`space-l`        | `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` | Внутренний отступ слева
`stripe`         | `even` `odd`                                  | Зебрирование строк списка
`view`           | `default` `ghost`                             | Управляет фоном списка

___


## Элементы

### Элемент item

Единственный элемент паттерна, который определяет строку списка. Является контейнером для контента строки. Элементы `item` могут включать в себя друг друга.

___


## Пример

<div class="pt-list pt-list_border_all pt-list_view_default">
    <div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
        <div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
            Первая операция
        </div>
        <div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
            +1000 ₽
        </div>
    </div>
    <div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
        <div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
            Вторая операция
        </div>
        <div class="text text_size_m text_view_alert text_weight_bold text_transform_uppercase text_spacing_s">
            -500 ₽
        </div>
    </div>
    <div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
        <div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
            Третья операция
        </div>
        <div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
            +2000 ₽
        </div>
    </div>
</div>

```html
<div class="pt-list pt-list_border_all pt-list_view_default">
    <div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
        <div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
            Первая операция
        </div>
        <div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
            +1000 ₽
        </div>
    </div>
    <div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
        <div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
            Вторая операция
        </div>
        <div class="text text_size_m text_view_alert text_weight_bold text_transform_uppercase text_spacing_s">
            -500 ₽
        </div>
    </div>
    <div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
        <div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
            Третья операция
        </div>
        <div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
            +2000 ₽
        </div>
    </div>
</div>
```
