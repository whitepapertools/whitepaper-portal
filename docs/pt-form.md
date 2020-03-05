# pt-form

<div class="preview">
    <div class="pt-form pt-form_view_default pt-form_space-v_xs pt-form_structure_40-60 pt-form_vertical-align_center decorator decorator_space-a_l component component_whitepaper_default" style="width: 300px">
        <div class="pt-form__item">
            <div class="pt-form__label text text_size_m text_view_secondary">Name</div>
            <div class="pt-form__control">
                <span class="input input_theme_islands input_size_m">
                    <span class="input__box">
                        <input class="input__control">
                    </span>
                </span>
            </div>
        </div>
        <div class="pt-form__item">
            <div class="pt-form__label text text_size_m text_view_secondary">Last name</div>
            <div class="pt-form__control">
                <span class="input input_theme_islands input_size_m">
                    <span class="input__box">
                        <input class="input__control required">
                    </span>
                </span>
            </div>
        </div>
        <div class="pt-form__item">
            <div class="pt-form__label text text_size_m text_view_secondary">E-mail</div>
            <div class="pt-form__control">
                <span class="input input_theme_islands input_size_m">
                    <span class="input__box">
                        <input class="input__control required">
                    </span>
                </span>
            </div>
        </div>
        <div class="pt-form__item">
            <div class="pt-form__control pt-form__control_distribute_right">
                <button class="button button_theme_islands button_size_s button_type_submit button_view_action button__control" role="button" type="submit">
                    <span class="button__text">Подтвердить</span>
                </button>
            </div>
        </div>
    </div>
</div>

Паттерн `pt-form` — это визуальное представление веб-формы, которая принимает и отправляет данные пользователя.

* [Модификаторы блока](#Модификаторы-блока)
* [Элементы](#Элементы-блока)

___


## Модификаторы блока

Модификаторы     | Значение                           | Описание
---------------- | ---------------------------------- | --------------------------------------------------
`view`           | `default`                          | Фон всей формы
`border`         | `around` `all`(depricated)         | Обводка всей формы
`bordered`       | —                                  | Разделение строк формы полоской
`vertical-align` | `bottom` `center` `baseline` `top` | Выравнивание конента в элементах item по вертикали
`space-a`        | `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` | Отступы со всех сторон у вложенных элементов `item`
`space-h`        | `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` | Отступы по горизонтали у вложенных элементов `item`
`space-v`        | `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` | Отступы по вертикали у вложенных элементов `item`
`structure`      | `10-90` `20-80` `30-70` `40-60` `50-50` `60-40` `70-30` `80-20` `90-10` | Задает пропорцию между лейблом и контролами внутри элементов item


### border:

<div class="preview" style="background: white;">
    <div class="pt-form pt-form_view_default pt-form_border_all pt-form_space-v_xs pt-form_structure_40-60 pt-form_vertical-align_center decorator decorator_space-a_l component component_whitepaper_default" style="width: 300px">
        <div class="pt-form__item">
            <div class="pt-form__label text text_size_m text_view_secondary">Name</div>
            <div class="pt-form__control">
                <span class="input input_theme_islands input_size_m">
                    <span class="input__box">
                        <input class="input__control">
                    </span>
                </span>
            </div>
        </div>
        <div class="pt-form__item">
            <div class="pt-form__label text text_size_m text_view_secondary">Last name</div>
            <div class="pt-form__control">
                <span class="input input_theme_islands input_size_m">
                    <span class="input__box">
                        <input class="input__control required">
                    </span>
                </span>
            </div>
        </div>
        <div class="pt-form__item">
            <div class="pt-form__label text text_size_m text_view_secondary">E-mail</div>
            <div class="pt-form__control">
                <span class="input input_theme_islands input_size_m">
                    <span class="input__box">
                        <input class="input__control required">
                    </span>
                </span>
            </div>
        </div>
        <div class="pt-form__item">
            <div class="pt-form__control pt-form__control_distribute_right">
                <button class="button button_theme_islands button_size_s button_type_submit button_view_action button__control" role="button" type="submit">
                    <span class="button__text">Подтвердить</span>
                </button>
            </div>
        </div>
    </div>
</div>


### bordered:

<div class="preview">
    <div class="pt-form pt-form_view_default pt-form_bordered pt-form_space-v_xs pt-form_structure_40-60 pt-form_vertical-align_center decorator decorator_space-a_l component component_whitepaper_default" style="width: 300px">
        <div class="pt-form__item">
            <div class="pt-form__label text text_size_m text_view_secondary">Name</div>
            <div class="pt-form__control">
                <span class="input input_theme_islands input_size_m">
                    <span class="input__box">
                        <input class="input__control">
                    </span>
                </span>
            </div>
        </div>
        <div class="pt-form__item">
            <div class="pt-form__label text text_size_m text_view_secondary">Last name</div>
            <div class="pt-form__control">
                <span class="input input_theme_islands input_size_m">
                    <span class="input__box">
                        <input class="input__control required">
                    </span>
                </span>
            </div>
        </div>
        <div class="pt-form__item">
            <div class="pt-form__label text text_size_m text_view_secondary">E-mail</div>
            <div class="pt-form__control">
                <span class="input input_theme_islands input_size_m">
                    <span class="input__box">
                        <input class="input__control required">
                    </span>
                </span>
            </div>
        </div>
        <div class="pt-form__item">
            <div class="pt-form__control pt-form__control_distribute_right">
                <button class="button button_theme_islands button_size_s button_type_submit button_view_action button__control" role="button" type="submit">
                    <span class="button__text">Подтвердить</span>
                </button>
            </div>
        </div>
    </div>
</div>

___


## Элементы блока

Элемент                              | Описание
------------------------------------ | ---------------------------------------------------
[section](#Элемент-section)          | Логическая группа строк формы
[item](#Элемент-item)                | Структурная единица паттерна, обычно строчка формы
[label](#Элементы-label-и-control)   | Лейбл для инпута или другого контрола
[control](#Элементы-label-и-control) | Контейнер для инпута или другого контрола

___


### Элемент section

Обёртка для логической группы элементов `item`. Форма может не иметь `section`

Модификаторы элемента `section` | Значение                                      | Описание
------------------------------- | --------------------------------------------- | ----------------------------
`space-v`                       | `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` | Вертикальные отсутпы
`border`                        | `top` `bottom` `both`                         | Разделители сверху или снизу

___


### Элемент item

Основные дочерние элементы паттерна — элементы `item`.

Модификаторы элемента `item` | Значение | Описание
---------------------------- | -------- | --------------------------------------
`no-structure`               | –        | Отмена выстраивания элементов в строку

___


### Элементы label и control

Используются в паре, когда лейбл и контрол должны стоять в одну строку. В этом случае у их родительского `pt-form` должен быть модификатор `structure`.

Если для конкретной строки не нужно ставить контрол и лейбл в одну строку, но в остальных такое используется, то для конкретного item можно применить модификатор `no-structure`

Модификаторы элемента `control` | Значение                    | Описание
------------------------------- | --------------------------- | --------------------------------------
`distribute`                    | `default` `between` `right` | Распределение элементов по горизонтали
`vertical-align`                | `top` `center` `bottom`     | Распределение элементов по вертикали
