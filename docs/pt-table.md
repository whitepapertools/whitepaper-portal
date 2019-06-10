# pt-table

<div class="preview">
    <table class="pt-table pt-table_border_between pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
        <tr class="pt-table__row">
            <td class="pt-table__col pt-table__col_width_15">
                <div class="text text_size_m text_view_primary">FEJKA</div>
            </td>
            <td class="pt-table__col pt-table__col_width_15">
                <div class="text text_size_m text_view_primary">$4.99</div>
            </td>
            <td class="pt-table__col pt-table__col_width_70">
                <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
            </td>
        </tr>
        <tr class="pt-table__row">
            <td class="pt-table__col pt-table__col_width_15">
                <div class="text text_size_m text_view_primary">FEJKA</div>
            </td>
            <td class="pt-table__col pt-table__col_width_15">
                <div class="text text_size_m text_view_primary">$4.99</div>
            </td>
            <td class="pt-table__col pt-table__col_width_70">
                <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
            </td>
        </tr>
        <tr class="pt-table__row">
            <td class="pt-table__col pt-table__col_width_15">
                <div class="text text_size_m text_view_primary">FEJKA</div>
            </td>
            <td class="pt-table__col pt-table__col_width_15">
                <div class="text text_size_m text_view_primary">$4.99</div>
            </td>
            <td class="pt-table__col pt-table__col_width_70">
                <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
            </td>
        </tr>
    </table>
</div>

`pt-table` — паттерн для создания простых плоских таблиц. Набор модификаторов покрывает максимальное количество как стилистических так и структурных потребностей. Также есть возможность маркеровать строки по статусу.

* [Модификаторы блока](#Модификаторы)
* [Элементы](#Элементы)
* [Пример](#Пример)

___


## Модификаторы блока

Модификаторы     | Значение                | Описание
---------------- | ----------------------- | -------------------------------
`border`         | `around` `between`      | Параметры обводки таблицы: вокруг всей таблицы или после каждой строк
`view`           | `default`               | Фон всей таблицы
`stripe`         | `even` `odd`            | Выделение фона чётных или нечётных строк
`vertical-align` | `bottom` `center` `top` | Вертикальное выравние контента в строках
`space-a`        | `xs` `s` `m` `l`        | Отступы со всех сторон у вложенных элементов `col`
`space-h`        | `xs` `s` `m` `l`        | Отступы по горизонтали у вложенных элементов `col`
`space-v`        | `xs` `s` `m` `l`        | Отступы по вертикали у вложенных элементов `col`


### border:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">не задан</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <table class="pt-table pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
        </table>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">around</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <table class="pt-table pt-table_view_default pt-table_border_around pt-table_space-h_m pt-table_space-v_s">
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
        </table>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">between</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <table class="pt-table pt-table_view_default pt-table_border_between pt-table_space-h_m pt-table_space-v_s">
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
        </table>
    </div>
</div>


### stripe:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">не задан</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <table class="pt-table pt-table_border_between pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
        </table>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">even</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <table class="pt-table pt-table_border_between pt-table_view_default pt-table_stripe_even pt-table_space-h_m pt-table_space-v_s">
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
        </table>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">odd</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <table class="pt-table pt-table_border_between pt-table_view_default pt-table_stripe_odd pt-table_space-h_m pt-table_space-v_s">
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
        </table>
    </div>
</div>

___


## Элементы блока

Элемент              | Описание
-------------------- | -----------------------------------------
[row](#Элемент-row)  | Строка таблицы
[col](#Элемент-col)  | Колонка таблицы, вкладывается в строку


### Элемент row

Основные дочерние элементы паттерна — элементы `row`.

Модификаторы элемента `row` | Значение                              | Описание
--------------------------- | ------------------------------------- | -------------------------------------
`view`                      | `head`                                | Оформление строки как шапки таблицы
`status`                    | `alert` `default` `success` `warning` | Статусная маркировка строки


#### status:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">не задан</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <table class="pt-table pt-table_border_between pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
        </table>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">default</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <table class="pt-table pt-table_border_between pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <tr class="pt-table__row pt-table__row_status_default">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row pt-table__row_status_default">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row pt-table__row_status_default">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
        </table>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">success</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <table class="pt-table pt-table_border_between pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <tr class="pt-table__row pt-table__row_status_success">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </div>
            <tr class="pt-table__row pt-table__row_status_success">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </div>
            <tr class="pt-table__row pt-table__row_status_success">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
        </table>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">alert</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <table class="pt-table pt-table_border_between pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <tr class="pt-table__row pt-table__row_status_alert">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row pt-table__row_status_alert">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row pt-table__row_status_alert">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
        </table>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">warning</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <table class="pt-table pt-table_border_between pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <tr class="pt-table__row pt-table__row_status_warning">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row pt-table__row_status_warning">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row pt-table__row_status_warning">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
        </table>
    </div>
</div>


#### view:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">head</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <table class="pt-table pt-table_border_between pt-table_view_default pt-table_space-h_m pt-table_space-v_s pt-table_stripe_odd">
            <tr class="pt-table__row pt-table__row_view_head">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">Item</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">Price</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Discription</div>
                </td>
            </tr>
            <tr class="pt-table__row ">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row ">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
        </table>
    </div>
</div>


### Элемент col

Элемент `col` отвечает за колонки таблицы. Колонки вкладываются в элемент `row`.

Модификаторы элемента `col`  | Значение                | Описание
---------------------------- | ----------------------- | ---------------------------
`align`                      | `left` `center` `right` | Выравнивание по горизонтали
`width`                      | `5` `10` `15` `20` `25` `30` `35` `40` `45` `50` `55` `60` `65` `70` `75` `80` `85` `90` `95` `100` | Ширина ячейки в процентах от ширины таблицы

#### align

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">не задан</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <table class="pt-table pt-table_border_between pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
        </table>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">right</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <table class="pt-table pt-table_border_between pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70 pt-table__col_align_right">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70 pt-table__col_align_right">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
            <tr class="pt-table__row">
                <td class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </td>
                <td class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </td>
                <td class="pt-table__col pt-table__col_width_70 pt-table__col_align_right">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </td>
            </tr>
        </table>
    </div>
</div>

___

## Пример

<table class="pt-table pt-table_border_between pt-table_view_default pt-table_space-h_m pt-table_space-v_s pt-table_stripe_even">
    <tr class="pt-table__row pt-table__row_view_head">
        <td class="pt-table__col pt-table__col_width_15">
            <div class="text text_size_m text_view_primary">Item</div>
        </td>
        <td class="pt-table__col pt-table__col_width_70">
            <div class="text text_size_m text_view_primary">Discription</div>
        </td>
        <td class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
            <div class="text text_size_m text_view_primary">Price</div>
        </td>
    </tr>
    <tr class="pt-table__row pt-table__row_status_success">
        <td class="pt-table__col pt-table__col_width_15">
            <div class="text text_size_m text_view_primary">FEJKA</div>
        </td>
        <td class="pt-table__col pt-table__col_width_70">
            <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
        </td>
        <td class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
            <div class="text text_size_m text_view_primary">$4.99</div>
        </td>
    </tr>
    <tr class="pt-table__row pt-table__row_status_default">
        <td class="pt-table__col pt-table__col_width_15">
            <div class="text text_size_m text_view_primary">MALM</div>
        </td>
        <td class="pt-table__col pt-table__col_width_70">
            <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
        </td>
        <td class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
            <div class="text text_size_m text_view_primary">$120.99</div>
        </td>
    </tr>
    <tr class="pt-table__row pt-table__row_status_alert">
        <td class="pt-table__col pt-table__col_width_15">
            <div class="text text_size_m text_view_primary">PROMBLE</div>
        </td>
        <td class="pt-table__col pt-table__col_width_70">
            <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
        </td>
        <td class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
            <div class="text text_size_m text_view_primary">$14.99</div>
        </td>
    </tr>
</table>

```html
<table class="pt-table pt-table_border_between pt-table_view_default pt-table_space-h_m pt-table_space-v_s pt-table_stripe_even">
    <tr class="pt-table__row pt-table__row_view_head">
        <td class="pt-table__col pt-table__col_width_15">
            <div class="text text_size_m text_view_primary">Item</div>
        </td>
        <td class="pt-table__col pt-table__col_width_70">
            <div class="text text_size_m text_view_primary">Discription</div>
        </td>
        <td class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
            <div class="text text_size_m text_view_primary">Price</div>
        </td>
    </tr>
    <tr class="pt-table__row pt-table__row_status_success">
        <td class="pt-table__col pt-table__col_width_15">
            <div class="text text_size_m text_view_primary">FEJKA</div>
        </td>
        <td class="pt-table__col pt-table__col_width_70">
            <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
        </td>
        <td class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
            <div class="text text_size_m text_view_primary">$4.99</div>
        </td>
    </tr>
    <tr class="pt-table__row pt-table__row_status_default">
        <td class="pt-table__col pt-table__col_width_15">
            <div class="text text_size_m text_view_primary">MALM</div>
        </td>
        <td class="pt-table__col pt-table__col_width_70">
            <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
        </td>
        <td class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
            <div class="text text_size_m text_view_primary">$120.99</div>
        </td>
    </tr>
    <tr class="pt-table__row pt-table__row_status_alert">
        <td class="pt-table__col pt-table__col_width_15">
            <div class="text text_size_m text_view_primary">PROMBLE</div>
        </td>
        <td class="pt-table__col pt-table__col_width_70">
            <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
        </td>
        <td class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
            <div class="text text_size_m text_view_primary">$14.99</div>
        </td>
    </tr>
</table>
```
