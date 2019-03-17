# Бейдж

<div class="preview">
    <div class="badge badge_view_success">Успешный статус</div>
</div>

Для отображения статуса каких-либо сущностей используется блок `badge`. Статус определяется через модификацию.

* [Модификаторы блока](#Модификаторы)
* [Пример](#Пример)

___

## Модификаторы блока

| Модификатор   | Значение                            | Описание
|---------------|-------------------------------------| ------------------------
| [view](#view) | default / success / warning / alert | Определяет статус бейджа

### view:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">default</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="badge badge_view_default">default</div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">success</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="badge badge_view_success">success</div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">warning</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="badge badge_view_warning">warning</div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">alert</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="badge badge_view_alert">alert</div>
    </div>
</div>

___

## Пример

<div class="badge badge_view_success">Успешный статус</div>

```html
<div class="badge badge_view_success">Успешный статус</div>
```
