# pt-informer

<div class="pt-informer pt-informer_view_success theme theme_color_whitepaper-success">
	<div class="pt-informer__content pt-informer__content_space-a_l">
		<div class="text text_size_xl text_view_primary text_weight_bold decorator decorator_indent-b_xxxs">Success message</div>
		<div class="text text_size_m text_view_primary decorator decorator_indent-b_xxxs">Small message description</div>
	</div>
</div>

`pt-informer` — информационный блок, имеющий статус. Вставляется, как в контент, так и на отдельный интерфейсный слой.

* [Модификаторы блока](#Модификаторы)
* [Элементы](#Элементы)
* [Пример](#Пример)

___

## Модификаторы блока

Модификаторы | Значение                                              | Описание
------------ | ----------------------------------------------------- | ----------------
[border](#border)       | all                                                   | Обводка
[view](#view)         | normal / success / warning / alert / system / default | Статус информера

### border:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">Не задан</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<div class="pt-informer pt-informer_view_normal theme theme_color_whitepaper-normal">
			<div class="pt-informer__content pt-informer__content_space-a_l">
				<div class="text text_size_xl text_view_primary text_weight_bold decorator decorator_indent-b_xxxs"> Message</div>
				<div class="text text_size_m text_view_primary decorator decorator_indent-b_xxxs">Small message description</div>
			</div>
		</div>
	</div>
</div>
<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
			<div class="text text_size_xl text_view_ghost">all</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<div class="pt-informer pt-informer_view_normal theme theme_color_whitepaper-normal pt-informer_border_all">
			<div class="pt-informer__content pt-informer__content_space-a_l">
				<div class="text text_size_xl text_view_primary text_weight_bold decorator decorator_indent-b_xxxs">Message</div>
				<div class="text text_size_m text_view_primary decorator decorator_indent-b_xxxs">Small message description</div>
			</div>
		</div>
	</div>
</div>

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

___

## Элементы

### Content

Информер может быть любого размера. Когда он занимает большую площадь, контент можно разбить на столбцы, чтобы было легче читать.

Модификаторы элемента `content`     | Значение                   | Описание
----------------------------------- | -------------------------- | -------------------------------------
[distribute](#distribute)           | default / between / center | Распределение контента по горизонтали
space-a                             | s / m / l / xl / xxl       | Внутренние отступы по всем сторонам
space-h                             | s / m / l / xl / xxl       | Внутренние отступы по горизонтали
space-v                             | s / m / l / xl / xxl       | Внутренние отступы по вертикали

#### distribute:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">default</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<div class="pt-informer pt-informer_view_success theme theme_color_whitepaper-success" >
			<div class="text text_size_xl text_view_primary text_weight_bold decorator decorator_space-h_l decorator_space-t_l">Success message</div>
			<div class="pt-informer__content pt-informer__content_space-a_l pt-informer__content_distribute_default">
				<div class="text text_size_m text_view_primary decorator decorator_indent-b_xxxs">First column with small message description</div>
				<div class="text text_size_m text_view_primary decorator decorator_indent-b_xxxs">Second column with small message description</div>
			</div>
		</div>
	</div>
</div>
<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">between</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<div class="pt-informer pt-informer_view_success theme theme_color_whitepaper-success" >
			<div class="text text_size_xl text_view_primary text_weight_bold decorator decorator_space-h_l decorator_space-t_l">Success message</div>
			<div class="pt-informer__content pt-informer__content_space-a_l pt-informer__content_distribute_between">
				<div class="text text_size_m text_view_primary decorator decorator_indent-b_xxxs">First column with small message description</div>
				<div class="text text_size_m text_view_primary decorator decorator_indent-b_xxxs">Second column with small message description</div>
			</div>
		</div>
	</div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">center</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<div class="pt-informer pt-informer_view_success theme theme_color_whitepaper-success" >
			<div class="text text_size_xl text_view_primary text_weight_bold decorator decorator_space-h_l decorator_space-t_l">Success message</div>
			<div class="pt-informer__content pt-informer__content_space-a_l pt-informer__content_distribute_center">
				<div class="text text_size_m text_view_primary decorator decorator_indent-b_xxxs">Small message description</div>
			</div>
		</div>
	</div>
</div>

### Элемент action

Располагается в конце информера для кнопок и других контролов.

Модификаторы элемента `action`     | Значение              | Описание
---------------------------------- | --------------------- | ---------------------------------------
[align](#align)                    | center / right        | Выравнивание по горизонтали и вертикали
space-a                            | s / m / l / xl / xxl  | Внутренние отступы по всем сторонам
space-h                            | s / m / l / xl / xxl  | Внутренние отступы по горизонтали
space-v                            | s / m / l / xl / xxl  | Внутренние отступы по вертикали
space-b                            | s / m / l / xl / xxl  | Внутренний отступ снизу

#### align:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">не указан</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<div class="pt-informer pt-informer_view_success theme theme_color_whitepaper-success" >
			<div class="text text_size_xl text_view_primary text_weight_bold decorator decorator_space-h_l decorator_space-t_l">Success message</div>
			<div class="pt-informer__content pt-informer__content_space-h_l pt-informer__content_space-v_s pt-informer__content_distribute_center">
				<div class="text text_size_m text_view_primary decorator decorator_indent-b_xs">Small message description</div>
			</div>
			<div class="pt-informer__action component component_whitepaper_success decorator decorator_space-h_l decorator_space-b_l">
				<button class="button button_theme_islands button_size_m button_type_submit button_view_action button__control i-bem button_js_inited button__control_js_inited" data-bem="{&quot;button&quot;:{}}" role="button" type="submit" name="subscribe" id="mc-embedded-subscribe"><span class="button__text">Подписаться</span></button>
			</div>
		</div>
	</div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">center</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<div class="pt-informer pt-informer_view_success theme theme_color_whitepaper-success" >
			<div class="text text_size_xl text_view_primary text_weight_bold decorator decorator_space-h_l decorator_space-t_l">Success message</div>
			<div class="pt-informer__content pt-informer__content_space-h_l pt-informer__content_space-v_s pt-informer__content_distribute_center">
				<div class="text text_size_m text_view_primary decorator decorator_indent-b_xs">Small message description</div>
			</div>
			<div class="pt-informer__action pt-informer__action_align_center component component_whitepaper_success decorator decorator_space-h_l decorator_space-b_l">
				<button class="button button_theme_islands button_size_m button_type_submit button_view_action button__control i-bem button_js_inited button__control_js_inited" data-bem="{&quot;button&quot;:{}}" role="button" type="submit" name="subscribe" id="mc-embedded-subscribe"><span class="button__text">Подписаться</span></button>
			</div>
		</div>
	</div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">right</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<div class="pt-informer pt-informer_view_success theme theme_color_whitepaper-success" >
			<div class="text text_size_xl text_view_primary text_weight_bold decorator decorator_space-h_l decorator_space-t_l">Success message</div>
			<div class="pt-informer__content pt-informer__content_space-h_l pt-informer__content_space-v_s pt-informer__content_distribute_center">
				<div class="text text_size_m text_view_primary decorator decorator_indent-b_xs">Small message description</div>
			</div>
			<div class="pt-informer__action pt-informer__action_align_right component component_whitepaper_success decorator decorator_space-h_l decorator_space-b_l">
				<button class="button button_theme_islands button_size_m button_type_submit button_view_action button__control i-bem button_js_inited button__control_js_inited" data-bem="{&quot;button&quot;:{}}" role="button" type="submit" name="subscribe" id="mc-embedded-subscribe"><span class="button__text">Подписаться</span></button>
			</div>
		</div>
	</div>
</div>

___

## Пример

<div class="pt-informer pt-informer_view_success theme theme_color_whitepaper-success">
	<div class="pt-informer__content pt-informer__content_space-a_l">
		<div class="text text_size_xl text_view_primary text_weight_bold decorator decorator_indent-b_xxxs">Success message</div>
		<div class="text text_size_m text_view_primary decorator decorator_indent-b_xxxs">Small message description</div>
	</div>
</div>

```html
<div class="pt-informer pt-informer_view_success theme theme_color_whitepaper-success">
	<div class="pt-informer__content pt-informer__content_space-a_l">
		<div class="text text_size_xl text_view_primary text_weight_bold decorator decorator_indent-b_xxxs">Success message</div>
		<div class="text text_size_m text_view_primary decorator decorator_indent-b_xxxs">Small message description</div>
	</div>
</div>
```
