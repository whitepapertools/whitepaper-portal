# Отступы

Переменные отступов используются как для ритма внутри сеток, так и для обозначения уровней вложенности и разделения смысловых сущностей внутри паттернов.

<div class="tpl-grid tpl-grid_s-ratio_1-1-1 tpl-grid_m-ratio_1-1-1-1 tpl-grid_row-gap_third decorator decorator_indent-b_xxxxl" style="padding-top: 0px; grid-row-gap: var(--col-gap-third);">
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_xxxxxxl"></div>
        </div>
        <code>--space-xxxxxxl</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_xxxxxl"></div>
        </div>
        <code>--space-xxxxxl</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_xxxxl"></div>
        </div>
        <code>--space-xxxxl</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_xxxl"></div>
        </div>
        <code>--space-xxxl</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_xxl"></div>
        </div>
        <code>--space-xxl</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_xl"></div>
        </div>
        <code>--space-xl</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_l"></div>
        </div>
        <code>--space-l</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_m"></div>
        </div>
        <code>--space-m</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_s"></div>
        </div>
        <code>--space-s</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_xs"></div>
        </div>
        <code>--space-xs</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_xxs"></div>
        </div>
        <code>--space-xxs</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_xxxs"></div>
        </div>
        <code>--space-xxxs</code>
    </div>
</div>

Вышеуказанные переменные указываются для значений модификаторов паттернов на внешние и внутренние отступы. В дефолтной теме используются отступы с модулем 4px + самое маленькое значение 2px.
Также используется для блока `decorator`, который можно миксовать к блокам на страницах, чтобы не дублировать CSS и держать интерфейс консистентным.

Эти переменные можно использовать, как в локальных стилях блока, так и в разметке с помощью специального блока `decorator`.

```css
.your-block {
    padding: var(--space-m);
}
```
```html
<div class="your-block decorator decorator_indent-a_l decorator_space-a_l"></div>
```
## Decorator

Модификаторы decorator | Значение                                                               | Описание
---------------------- | ---------------------------------------------------------------------- | ----------------
`space-a`              | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внутренний отступ со всех сторон
`space-v`              | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внутренний отступ по вертикали
`space-h`              | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внутренний отступ по горизонтали
`space-t`              | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внутренний отступ сверху
`space-r`              | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внутренний отступ справа
`space-b`              | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внутренний отступ снизу
`space-l`              | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внутренний отступ слева
`indent-a`             | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внешний отступ со всех сторон
`indent-v`             | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внешний отступ по вертикали
`indent-h`             | `auto`                                                                 | Центрирование блока по горизонтали
`indent-h`             | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внешний отступ по горизонтали
`indent-t`             | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внешний отступ сверху
`indent-r`             | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внешний отступ справа
`indent-b`             | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внешний отступ снизу
`indent-l`             | `3xs` `2xs` `xs` `s` `m` `l` `xl` `2xl` `3xl` `4xl` `5xl` `6xl` `none` | Внешний отступ слева
