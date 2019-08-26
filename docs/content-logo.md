# Логотипы

<div class="preview">
    <div class="brand-logo brand-logo_form_round brand-logo_name_preview brand-logo_size_m" style="background-image: url('../../assets/doc/content/content-logo/brand-logo_name_preview.svg');">
    </div>
</div>

Служит для отображения логотипов брендов, вписанных в разные формы. Открытая библиотека с логотипами доступна [тут](#).

* [Модификаторы блока](#Модификаторы-блока)
* [Пример](#Пример)

___

## Модификаторы блока

Модификатор     | Значение                   | Описание
--------------- | -------------------------- | -----------
[form](#form)   | `mask` `round`             | Форма логотипа
[size](#size)   | `xxs` `xs` `s` `m` `l`     | Размер логотипа

### form

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">не задан</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="brand-logo brand-logo_name_preview brand-logo_size_l" style="background-image: url('../../assets/doc/content/content-logo/brand-logo_name_preview.svg');">
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">mask</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="brand-logo brand-logo_form_mask brand-logo_name_preview brand-logo_size_l" style="background-image: url('../../assets/doc/content/content-logo/brand-logo_name_preview.svg');">
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">round</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="brand-logo brand-logo_form_round brand-logo_name_preview brand-logo_size_l" style="background-image: url('../../assets/doc/content/content-logo/brand-logo_name_preview.svg');">
        </div>
    </div>
</div>

### size

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">s</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="brand-logo brand-logo_form_round brand-logo_name_preview brand-logo_size_s" style="background-image: url('../../assets/doc/content/content-logo/brand-logo_name_preview.svg');">
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">m</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="brand-logo brand-logo_form_round brand-logo_name_preview brand-logo_size_m" style="background-image: url('../../assets/doc/content/content-logo/brand-logo_name_preview.svg');">
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">l</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="brand-logo brand-logo_form_round brand-logo_name_preview brand-logo_size_l" style="background-image: url('../../assets/doc/content/content-logo/brand-logo_name_preview.svg');">
        </div>
    </div>
</div>

___

## Пример

<div class="brand-logo brand-logo_form_round brand-logo_name_preview brand-logo_size_m" style="background-image: url('../../assets/doc/content/content-logo/brand-logo_name_preview.svg');">
</div>

``` html
<div class="brand-logo brand-logo_form_round brand-logo_name_preview brand-logo_size_m" style="background-image: url('../../assets/doc/content/content-logo/brand-logo_name_preview.svg');">
</div>
```



## Как подготовить логотипы?
В интерфейсах сервисов используются логотипы брендов компаний партнеров, часто партнеры не готовы выслать вам хорошие лого, и вы делаете их сами. Для визуальной консистентности важно соблюдать простые правила построения если вы решили сделать лого самостоятельно.

### Как работать
Лого важно делать векторе. Самый простой способ векторизировать растровый логотип если не найти вектор (svg,ai), это отрисовать его вручую. Как лайфхак, автоматическая векторизация хорошо работает в VectorMagic

### Цвета фона
Фон у лого лучше использовать яркий и контрастный, использующий бренд цвет (или похожий) компании, например рассмотрим логотип Аквафор:

<img src="../../assets/doc/content/content-logo/brand-logo-all.png" alt="brand-logo-all" class="image">

Видно, что бренд цвет у Аквафор синий, часто чтобы разобраться в оттенке проще зайти на сайт компании выбрать самостоятельно самый активный (например взять из кнопок на сайте или из шапки сайта)
<img src="../../assets/doc/content/content-logo/brand-logo-prepare.png" alt="brand-logo-prepare" class="image">

Найденный активный цвет мы используем для фона круга, на котором мы будем располагать сам логотип.

Важно не использовать белый и чисто черный активный цвет бренда, чтобы логотип считывался нормально на белом или черном фоне в наших интерфейсах

Если у бренда много фирменных цветов, то можно расположить их на серой (#E6E6E6) или темной подложке.
<img src="../../assets/doc/content/content-logo/brand-logo-multicolor.png" alt="brand-logo-multicolor" class="image">

### Цвет символа
Разобравшись с фоном, нужно найти цвет для символа. В большинстве случаев у ярких фоновых цветов лучше использовать белый цвет у начертания. В примере с Аквафором, мы нашли синий цвет для фона и использовали белый цвет для текстовой части.

Часто бывает, что у символа много цветов, и монохромный символ (белый или черный) полностью отсутствует, тогда сам символ можно расположить на серой или темной подложке.

### Дополнительный цвет
Иногда мы используем дополнительный цвет лого, например если лого лежит на краточке, а на карточку нужно сделать акцент мы красим эту карточку в более темный аналог цвета бренда логотипа, тут нет особых требований, главное не темнить и не грязнить)

Бывает так же ситуация если лого лежит на сером или черном фоне (или очень темном цвете), в случае с серым стоит использовать цвет символа который лежит на сером круге, а в ситуациях с темным лого,брать для дополнительного цвета более светлый оттенок.

<img src="../../assets/doc/content/content-logo/brand-logo-additional.png" alt="brand-logo-additional" class="image">

### О пропорциях символа
Одно основное требование которое мы сформировали - это не стоит мельчить, мы делаем логотипы не только для портальной команды, но и для мобилки так что если у логотипа есть мелкие детали от них стоит избавляться, увеличивать однопиксельные линии, упрощать формы.

Часто у логотипа нет символа или слишком длинное текстовое начертания, тогда просто используйте заглавные буквы из названия. Или просто свяжитесь с брендом)

Я надеюсь этот текст поможет делать классные и нужные всем логотипы, удачи!
