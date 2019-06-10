# pt-informer

`pt-informer` — информационный блок, имеющий статус. Вставляется, как в контент, так и на отдельный интерфейсный слой.

<div class="preview">
    <div class="pt-informer pt-informer_view_success theme theme_color_whitepaper-success" style="min-width: 240px; width: 50%;">
        <div class="pt-informer__content pt-informer__content_space-a_l">
            <div class="text text_size_xl text_view_primary text_weight_bold decorator decorator_indent-b_xxxs">Success message</div>
            <div class="text text_size_m text_view_primary decorator decorator_indent-b_xxxs">Small message description</div>
        </div>
    </div>
</div>

___


## Модификаторы блока

Модификаторы | Значение                                                | Описание
------------ | ------------------------------------------------------- | -----------------------------------
`view`       | `normal` `success` `warning` `alert` `system` `default` | Статус информера
`space-a`    | `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl`                | Внутренние отступы по всем сторонам
`space-h`    | `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl`                | Внутренние отступы по горизонтали
`space-v`    | `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl`                | Внутренние отступы по вертикали


### view:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
            <div class="text text_size_xl text_view_ghost">default</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-informer pt-informer_view_default theme theme_color_whitepaper-default">
        <div class="pt-informer__content pt-informer__content_space-a_l">
            <div class="text text_size_xl text_view_primary text_weight_bold decorator decorator_indent-b_xxxs">Message</div>
            <div class="text text_size_m text_view_primary decorator decorator_indent-b_xxxs">Small message description</div>
        </div>
        </div>
    </div>
</div>
<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
            <div class="text text_size_xl text_view_ghost">normal</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-informer pt-informer_view_normal theme theme_color_whitepaper-normal">
        <div class="pt-informer__content pt-informer__content_space-a_l">
            <div class="text text_size_xl text_view_primary text_weight_bold decorator decorator_indent-b_xxxs">Message</div>
            <div class="text text_size_m text_view_primary decorator decorator_indent-b_xxxs">Small message description</div>
        </div>
        </div>
    </div>
</div>
<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
            <div class="text text_size_xl text_view_ghost">success</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-informer pt-informer_view_success theme theme_color_whitepaper-success">
        <div class="pt-informer__content pt-informer__content_space-a_l">
            <div class="text text_size_xl text_view_primary text_weight_bold decorator decorator_indent-b_xxxs">Success message</div>
            <div class="text text_size_m text_view_primary decorator decorator_indent-b_xxxs">Small message description</div>
        </div>
        </div>
    </div>
</div>
<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
            <div class="text text_size_xl text_view_ghost">warning</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-informer pt-informer_view_warning theme theme_color_whitepaper-warning">
        <div class="pt-informer__content pt-informer__content_space-a_l">
            <div class="text text_size_xl text_view_primary text_weight_bold decorator decorator_indent-b_xxxs">Warning message</div>
            <div class="text text_size_m text_view_primary decorator decorator_indent-b_xxxs">Small message description</div>
        </div>
        </div>
    </div>
</div>
<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
            <div class="text text_size_xl text_view_ghost">alert</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-informer pt-informer_view_alert theme theme_color_whitepaper-alert">
        <div class="pt-informer__content pt-informer__content_space-a_l">
            <div class="text text_size_xl text_view_primary text_weight_bold decorator decorator_indent-b_xxxs">Alert message</div>
            <div class="text text_size_m text_view_primary decorator decorator_indent-b_xxxs">Small message description</div>
        </div>
        </div>
    </div>
</div>
<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
            <div class="text text_size_xl text_view_ghost">system</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-informer pt-informer_view_system theme theme_color_whitepaper-system">
        <div class="pt-informer__content pt-informer__content_space-a_l">
            <div class="text text_size_xl text_view_primary text_weight_bold decorator decorator_indent-b_xxxs">System message</div>
            <div class="text text_size_m text_view_primary decorator decorator_indent-b_xxxs">Small message description</div>
        </div>
        </div>
    </div>
</div>
