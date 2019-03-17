# pt-table

<div class="preview">
    <div class="pt-table pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
        <div class="pt-table__row pt-table__row_border_bottom">
            <div class="pt-table__col pt-table__col_width_15">
                <div class="text text_size_m text_view_primary">FEJKA</div>
            </div>
            <div class="pt-table__col pt-table__col_width_15">
                <div class="text text_size_m text_view_primary">$4.99</div>
            </div>
            <div class="pt-table__col pt-table__col_width_70">
                <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
            </div>
        </div>
        <div class="pt-table__row pt-table__row_border_bottom">
            <div class="pt-table__col pt-table__col_width_15">
                <div class="text text_size_m text_view_primary">FEJKA</div>
            </div>
            <div class="pt-table__col pt-table__col_width_15">
                <div class="text text_size_m text_view_primary">$4.99</div>
            </div>
            <div class="pt-table__col pt-table__col_width_70">
                <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
            </div>
        </div>
        <div class="pt-table__row pt-table__row_border_bottom">
            <div class="pt-table__col pt-table__col_width_15">
                <div class="text text_size_m text_view_primary">FEJKA</div>
            </div>
            <div class="pt-table__col pt-table__col_width_15">
                <div class="text text_size_m text_view_primary">$4.99</div>
            </div>
            <div class="pt-table__col pt-table__col_width_70">
                <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
            </div>
        </div>
    </div>
</div>


`pt-table` — паттерн для создания простых плоских таблиц. Набор модификаторов покрывает максимальное количество как стилистических так и структурных потребностей. Также есть возможность маркеровать строки по статусу.

* [Модификаторы блока](#Модификаторы)
* [Элементы](#Элементы)
* [Пример](#Пример)

___

## Модификаторы блока

Модификаторы | Значение        | Описание
------------ | --------------- | ---------------------------------------------
[border](#border)       | all             | Обводка всей таблицы
[stripe](#stripe)       | even / odd      | Зебрирование строк
view         | default         | Фон таблицы
space-a      | xs / s / m / l  | Внутренние отступы в ячейках по всем сторонам
space-h      | xs / s / m / l  | Внутренние отступы в ячейках по горизонтали
space-v      | xs / s / m / l  | Внутренние отступы в ячейках по вертикали

### border:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">не задан</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-table pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">all</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-table pt-table_view_default pt-table_border_all pt-table_space-h_m pt-table_space-v_s">
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
        </div>
    </div>
</div>

### stripe:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">не задан</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-table pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">even</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-table pt-table_view_default pt-table_stripe_even pt-table_space-h_m pt-table_space-v_s">
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">odd</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-table pt-table_view_default pt-table_stripe_odd pt-table_space-h_m pt-table_space-v_s">
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
        </div>
    </div>
</div>

___

## Элементы блока

Элемент              | Описание
-------------------- | -----------------------------------------
[row](#Элемент-row)  | Строка таблицы, используется и как шапка
[col](#Элемент-col)  | Колонка таблицы

### Элемент row

Строки могут отделяться друг от друга полосой или отступом, если не задан модификатор `border`.

Модификаторы элемента `row`  | Значение                            | Описание
---------------------------- | ----------------------------------- | -------------
[border](#border-1)          | bottom / top                        | Обводка
[status](#status)            | default / success / warning / alert | Статус строки
[view](#view)                | head                                | Тип строки

#### border:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">не задан</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-table pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <div class="pt-table__row">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">top</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-table pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <div class="pt-table__row pt-table__row_border_top">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_top">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_top">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">bottom</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-table pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
        </div>
    </div>
</div>

#### status:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">не задан</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-table pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">default</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-table pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <div class="pt-table__row pt-table__row_border_bottom pt-table__row_status_default">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom pt-table__row_status_default">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom pt-table__row_status_default">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">success</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-table pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <div class="pt-table__row pt-table__row_border_bottom pt-table__row_status_success">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom pt-table__row_status_success">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom pt-table__row_status_success">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">alert</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-table pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <div class="pt-table__row pt-table__row_border_bottom pt-table__row_status_alert">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom pt-table__row_status_alert">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom pt-table__row_status_alert">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">warning</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-table pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <div class="pt-table__row pt-table__row_border_bottom pt-table__row_status_warning">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom pt-table__row_status_warning">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom pt-table__row_status_warning">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
        </div>
    </div>
</div>

#### view:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">head</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-table pt-table_view_default pt-table_space-h_m pt-table_space-v_s pt-table_stripe_odd">
            <div class="pt-table__row pt-table__row_border_bottom pt-table__row_view_head">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">Item</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">Price</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Discription</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom ">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom ">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
        </div>
    </div>
</div>

### Элемент col

Элемент, отвечающий за ячейку таблицы.

Модификаторы элемента `col`  | Значение   | Описание
---------------------------- | ---------- | ---------------------------
[align](#align)              | right      | Выравнивание по горизонтали
grow                         | evenly     | Растягивание ячейки пропорционально при наличии пустого места
width                        | 5 / 10 / 15 / 20 / 25 / 30 / 35 / 40 / 45 / 50 / 55 / 60 / 65 / 70 / 75 / 80 / 85 / 90 / 95 / 100 | Ширина ячейки в процентах от ширины таблицы

#### align

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">не задан</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-table pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
        <div class="text text_size_xl text_view_ghost">right</div>
    </div>
    <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
        <div class="pt-table pt-table_view_default pt-table_space-h_m pt-table_space-v_s">
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70 pt-table__col_align_right">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70 pt-table__col_align_right">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
            <div class="pt-table__row pt-table__row_border_bottom">
                <div class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
                    <div class="text text_size_m text_view_primary">FEJKA</div>
                </div>
                <div class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
                    <div class="text text_size_m text_view_primary">$4.99</div>
                </div>
                <div class="pt-table__col pt-table__col_width_70 pt-table__col_align_right">
                    <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
                </div>
            </div>
        </div>
    </div>
</div>

___

## Пример

<div class="pt-table pt-table_view_default pt-table_space-h_m pt-table_space-v_s pt-table_stripe_even">
    <div class="pt-table__row pt-table__row_border_bottom pt-table__row_view_head">
        <div class="pt-table__col pt-table__col_width_15">
            <div class="text text_size_m text_view_primary">Item</div>
        </div>
        <div class="pt-table__col pt-table__col_width_70">
            <div class="text text_size_m text_view_primary">Discription</div>
        </div>
        <div class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
            <div class="text text_size_m text_view_primary">Price</div>
        </div>
    </div>
    <div class="pt-table__row pt-table__row_border_bottom pt-table__row_status_success">
        <div class="pt-table__col pt-table__col_width_15">
            <div class="text text_size_m text_view_primary">FEJKA</div>
        </div>
        <div class="pt-table__col pt-table__col_width_70">
            <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
        </div>
        <div class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
            <div class="text text_size_m text_view_primary">$4.99</div>
        </div>
    </div>
    <div class="pt-table__row pt-table__row_border_bottom pt-table__row_status_default">
        <div class="pt-table__col pt-table__col_width_15">
            <div class="text text_size_m text_view_primary">MALM</div>
        </div>
        <div class="pt-table__col pt-table__col_width_70">
            <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
        </div>
        <div class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
            <div class="text text_size_m text_view_primary">$120.99</div>
        </div>
    </div>
    <div class="pt-table__row pt-table__row_border_bottom pt-table__row_status_alert">
        <div class="pt-table__col pt-table__col_width_15">
            <div class="text text_size_m text_view_primary">PROMBLE</div>
        </div>
        <div class="pt-table__col pt-table__col_width_70">
            <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
        </div>
        <div class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
            <div class="text text_size_m text_view_primary">$14.99</div>
        </div>
    </div>
</div>

```html
<div class="pt-table pt-table_view_default pt-table_space-h_m pt-table_space-v_s pt-table_stripe_even">
    <div class="pt-table__row pt-table__row_border_bottom pt-table__row_view_head">
        <div class="pt-table__col pt-table__col_width_15">
            <div class="text text_size_m text_view_primary">Item</div>
        </div>
        <div class="pt-table__col pt-table__col_width_70">
            <div class="text text_size_m text_view_primary">Discription</div>
        </div>
        <div class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
            <div class="text text_size_m text_view_primary">Price</div>
        </div>
    </div>
    <div class="pt-table__row pt-table__row_border_bottom pt-table__row_status_success">
        <div class="pt-table__col pt-table__col_width_15">
            <div class="text text_size_m text_view_primary">FEJKA</div>
        </div>
        <div class="pt-table__col pt-table__col_width_70">
            <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
        </div>
        <div class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
            <div class="text text_size_m text_view_primary">$4.99</div>
        </div>
    </div>
    <div class="pt-table__row pt-table__row_border_bottom pt-table__row_status_default">
        <div class="pt-table__col pt-table__col_width_15">
            <div class="text text_size_m text_view_primary">MALM</div>
        </div>
        <div class="pt-table__col pt-table__col_width_70">
            <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
        </div>
        <div class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
            <div class="text text_size_m text_view_primary">$120.99</div>
        </div>
    </div>
    <div class="pt-table__row pt-table__row_border_bottom pt-table__row_status_alert">
        <div class="pt-table__col pt-table__col_width_15">
            <div class="text text_size_m text_view_primary">PROMBLE</div>
        </div>
        <div class="pt-table__col pt-table__col_width_70">
            <div class="text text_size_m text_view_primary">Liven up your living space with greenery by decorating your walls with the artificial plant panel.</div>
        </div>
        <div class="pt-table__col pt-table__col_width_15 pt-table__col_align_right">
            <div class="text text_size_m text_view_primary">$14.99</div>
        </div>
    </div>
</div>
```
