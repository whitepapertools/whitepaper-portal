# Текст

В основе любого интерфейса лежит типографика. В вебе у текстовых блоков есть много разных свойств, влияющих на отображение.

Для манипуляции всеми этими свойствами у нас есть блок `text`. С его помощью каждый текстовый блок можно обернуть и применять модификаторы.

## Модификаторы

Модификатор | Значение                                         | Описание
----------- | ------------------------------------------------ | ------------------------------------
align | center / left / right                        | Горизонтальное выравнивание текста
[decoration](#decoration) | underline                          | Подчеркивание
display | block / inline-block / inline            | Способ отображения блока на странице
[size](#size) | xs / s / m / l / xl / xxl / xxxl / xxxxl       | Размер
[spacing](#spacing) | xs / s / m                               | Межбуквенное расстояние
[style](#style) | italic                                       | Курсив
[transform](#transform) | uppercase                            | Верхний регистр
type | h1 / h2 / h3 / p / blockquote                  | Стиль текста
[view](#view) | alert / brand / disable / ghost / link-minor / link / primary / promo / secondary / success / letter / income | Цвет
[weight](#view) | black / bold / semibold / regular / light / thin | Жирность шрифта

### decoration:
<div class="demo__row">
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">default</div>
        </div>
        <div class="text text_size_xl">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">underline</div>
        </div>
        <div class="text text_size_xl text_decoration_underline">Typography</div>
    </div>
</div>

### size:
<div class="demo__row">
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">xxxl</div>
        </div>
        <div class="text text_size_xxxl">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">xxl</div>
        </div>
        <div class="text text_size_xxl">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">xl</div>
        </div>
        <div class="text text_size_xl">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">l</div>
        </div>
        <div class="text text_size_l">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">m</div>
        </div>
        <div class="text text_size_m">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">s</div>
        </div>
        <div class="text text_size_s">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">xs</div>
        </div>
        <div class="text text_size_xs">Typography</div>
    </div>
</div>

### spacing:
<div class="demo__row">
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">xl</div>
        </div>
        <div class="text text_size_xl text_transform_uppercase text_spacing_xs">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">s</div>
        </div>
        <div class="text text_size_xl text_transform_uppercase text_spacing_s">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">m</div>
        </div>
        <div class="text text_size_xl text_transform_uppercase text_spacing_m">Typography</div>
    </div>
</div>

### style:
<div class="demo__row">
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">default</div>
        </div>
        <div class="text text_size_xl">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">italic</div>
        </div>
        <div class="text text_size_xl text_style_italic">Typography</div>
    </div>
</div>

### transform:
<div class="demo__row">
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">default</div>
        </div>
        <div class="text text_size_xl">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">uppercase</div>
        </div>
        <div class="text text_size_xl text_transform_uppercase">Typography</div>
    </div>
</div>

<!-- ### type:
<div class="demo__row tpl-grid_row-gap_one-thirds">
    <div class="doc-view">

            <div class="doc-view__mod-name">
                <div class="text text_size_xl text_view_ghost">h1</div>
            </div>
            <div>
                <div class="text text_size_xl text_view_ghost">Часть текста предыдушего параграфа</div>
                <div class="text text_size_xl text_type_h1">Typography</div>
                <div class="text text_size_xl text_view_ghost">Начало нового параграфа</div>
            </div>
        </div>
    </div>
    <div class="doc-view">

            <div class="doc-view__mod-name">
                <div class="text text_size_xl text_view_ghost">h2</div>
            </div>
            <div>
                <div class="text text_size_xl text_view_ghost">Часть текста предыдушего параграфа</div>
                <div class="text text_size_xl text_type_h2">Typography</div>
                <div class="text text_size_xl text_view_ghost">Начало нового параграфа</div>
            </div>
        </div>
    </div>
    <div class="doc-view">

            <div class="doc-view__mod-name">
                <div class="text text_size_xl text_view_ghost">h3</div>
            </div>
            <div>
                <div class="text text_size_xl text_view_ghost">Часть текста предыдушего параграфа</div>
                <div class="text text_size_xl text_type_h3">Typography</div>
                <div class="text text_size_xl text_view_ghost">Начало нового параграфа</div>
            </div>
        </div>
    </div>
    <div class="doc-view">

            <div class="doc-view__mod-name">
                <div class="text text_size_xl text_view_ghost">p</div>
            </div>
            <div>
                <div class="text text_size_xl text_view_ghost">Часть текста предыдушего параграфа</div>
                <div class="text text_size_xl text_type_p">Typography</div>
                <div class="text text_size_xl text_view_ghost">Начало нового параграфа</div>
            </div>
        </div>
    </div>
    <div class="doc-view">

            <div class="doc-view__mod-name">
                <div class="text text_size_xl text_view_ghost">blockquote</div>
            </div>
            <div>
                <div class="text text_size_xl text_view_ghost">Часть текста предыдушего параграфа</div>
                <div class="text text_size_xl text_type_blockquote">Typography</div>
                <div class="text text_size_xl text_view_ghost">Начало нового параграфа</div>
            </div>
        </div>
    </div>
</div> -->

### view:
<div class="demo__row">
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">primary</div>
        </div>
        <div class="text text_size_xl">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">secondary</div>
        </div>
        <div class="text text_size_xl text_view_secondary">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">ghost</div>
        </div>
        <div class="text text_size_xl text_view_ghost">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">disable</div>
        </div>
        <div class="text text_size_xl text_view_disable">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">success</div>
        </div>
        <div class="text text_size_xl text_view_success">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">income</div>
        </div>
        <div class="text text_size_xl text_view_income">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">letter</div>
        </div>
        <div class="text text_size_xl text_view_letter">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">alert</div>
        </div>
        <div class="text text_size_xl text_view_alert">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">link</div>
        </div>
        <div class="text text_size_xl text_view_link">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">link-minor</div>
        </div>
        <div class="text text_size_xl text_view_link-minor">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">brand</div>
        </div>
        <div class="text text_size_xl text_view_brand">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">promo</div>
        </div>
        <div class="text text_size_xl text_view_promo">Typography</div>
    </div>
</div>

### weight:
<div class="demo__row">
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">thin</div>
        </div>
        <div class="text text_size_xl text_weight_thin">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">light</div>
        </div>
        <div class="text text_size_xl text_weight_light">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">regular</div>
        </div>
        <div class="text text_size_xl text_weight_regular">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">semibold</div>
        </div>
        <div class="text text_size_xl text_weight_semibold">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">bold</div>
        </div>
        <div class="text text_size_xl text_weight_bold">Typography</div>
    </div>
    <div class="doc-view">
        <div class="doc-view__mod-name">
            <div class="text text_size_xl text_view_ghost">black</div>
        </div>
        <div class="text text_size_xl text_weight_black">Typography</div>
    </div>
</div>

## Пример

<div class="text text_size_xxl text_view_brand text_weight_bold text_type_h2 text_align_center">
  Заголовок второго уровня
</div>
<div class="text text_size_l text_view_primary text_type_p text_align_center">
  Пример текста для первого параграфа, следующего после заголовка, изображающий возможные стили текста, а вот кстати <div class="text text_display_inline text_view_link">ссылка</div>
</div>


```html
<div class="text text_size_xxl text_view_brand text_weight_bold text_type_h2 text_align_center">
  Заголовок второго уровня
</div>
<div class="text text_size_l text_view_primary text_type_p text_align_center">
  Пример текста для первого параграфа, следующего после заголовка, изображающий возможные стили текста, а вот кстати <div class="text text_display_inline text_view_link">ссылка</div>
</div>
```
