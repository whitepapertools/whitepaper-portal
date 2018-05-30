# pt-form

<div class="preview">
	<div class="pt-form pt-form_shadow_cloud pt-form_view_default decorator decorator_space-a_l component component_whitepaper_default" style="width: 300px">
		<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_default pt-form__item_vertical-align_center">
			<div class="pt-form__label text text_size_m text_view_secondary">Name</div>
			<div class="pt-form__control">
				<span class="input input_theme_islands input_size_m i-bem input_js_inited" data-bem="{&quot;input&quot;:{}}">
					<span class="input__box">
						<input class="input__control required i-bem input__control_js_inited mce_inline_error" aria-required="true" aria-invalid="true">
					</span>
				</span>
			</div>
		</div>
		<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_default pt-form__item_vertical-align_center">
			<div class="pt-form__label text text_size_m text_view_secondary">Last name</div>
			<div class="pt-form__control">
				<span class="input input_theme_islands input_size_m i-bem input_js_inited" data-bem="{&quot;input&quot;:{}}">
					<span class="input__box">
						<input class="input__control required i-bem input__control_js_inited mce_inline_error" aria-required="true" aria-invalid="true">
					</span>
				</span>
			</div>
		</div>
		<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_indent-b_xl pt-form__item_distribute_default pt-form__item_vertical-align_center">
			<div class="pt-form__label text text_size_m text_view_secondary">E-mail</div>
			<div class="pt-form__control">
				<span class="input input_theme_islands input_size_m i-bem input_js_inited" data-bem="{&quot;input&quot;:{}}">
					<span class="input__box">
						<input class="input__control required i-bem input__control_js_inited mce_inline_error" aria-required="true" aria-invalid="true">
					</span>
				</span>
			</div>
		</div>
		<div class="pt-form__item pt-form__item_distribute_right">
			<button class="button button_theme_islands button_size_s button_type_submit button_view_action button__control i-bem button_js_inited button__control_js_inited" data-bem="{&quot;button&quot;:{}}" role="button" type="submit" name="subscribe" id="mc-embedded-subscribe">
				<span class="button__text">Подтвердить</span>
			</button>
		</div>
	</div>
</div>

Паттерн `pt-form` — это визуальное представление веб-формы, которая принимает и отправляет данные пользователя.

* [Модификаторы блока](#Модификаторы)
* [Элементы](#Элементы)
* [Пример кода](#Пример)

___

## Модификаторы блока

Модификаторы          | Значение | Описание
--------------------- | -------- | ------------------
[border](#border)     | all      | Обводка всей формы
shadow                | cloud    | Тень от формы
view                  | default  | Фон

### border:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">all</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<div class="pt-form pt-form_border_all pt-form_view_default decorator decorator_space-a_l component component_whitepaper_default" style="width: 300px">
			<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_default pt-form__item_vertical-align_center">
				<div class="pt-form__label text text_size_m text_view_secondary">Name</div>
				<div class="pt-form__control">
					<span class="input input_theme_islands input_size_m i-bem input_js_inited" data-bem="{&quot;input&quot;:{}}">
						<span class="input__box">
							<input class="input__control required i-bem input__control_js_inited mce_inline_error" aria-required="true" aria-invalid="true">
						</span>
					</span>
				</div>
			</div>
			<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_right">
				<button class="button button_theme_islands button_size_s button_type_submit button_view_action button__control i-bem button_js_inited button__control_js_inited" data-bem="{&quot;button&quot;:{}}" role="button" type="submit" name="subscribe" id="mc-embedded-subscribe">
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
[item](#Элемент-item)                | Структурная единица паттерна, обычно строчка формы
[label](#Элементы-label-и-control)   | Лейбл для инпута или другого контрола
[control](#Элементы-label-и-control) | Контейнер для инпута или другого контрола

### Элемент item

Основные дочерние элементы паттерна — элементы `item`. Допускается любая вложенность элементов.

Модификаторы элемента`item`  | Значение                         | Описание
---------------------------- | -------------------------------- | -------------------------------------
border                       | all / bottom / top               | Обводка
distribute                   | default / between / right        | Распределение контента по горизонтали
vertical-align               | default / center / baseline      | Выравнивание конента по вертикали
indent-a                     | xs / s / m / l / xl / xxl / xxxl | Внешние отступы по всем сторонам
indent-h                     | xs / s / m / l / xl / xxl / xxxl | Внешние отступы по горизонтали
indent-v                     | xs / s / m / l / xl / xxl / xxxl | Внешние отступы по вертикали
indent-t                     | xs / s / m / l / xl / xxl / xxxl | Внешний отступ сверху
indent-r                     | xs / s / m / l / xl / xxl / xxxl | Внешний отступ справа
indent-b                     | xs / s / m / l / xl / xxl / xxxl | Внешний отступ снизу
indent-l                     | xs / s / m / l / xl / xxl / xxxl | Внешний отступ слева
space-a                      | xs / s / m / l / xl / xxl / xxxl | Внутренние отступы по всем сторонам
space-h                      | xs / s / m / l / xl / xxl / xxxl | Внутренние отступы по горизонтали
space-v                      | xs / s / m / l / xl / xxl / xxxl | Внутренние отступы по вертикали
space-t                      | xs / s / m / l / xl / xxl / xxxl | Внутренний отступ сверху
space-r                      | xs / s / m / l / xl / xxl / xxxl | Внутренний отступ справа
space-b                      | xs / s / m / l / xl / xxl / xxxl | Внутренний отступ внизу
space-l                      | xs / s / m / l / xl / xxl / xxxl | Внутренний отступ слева

#### distribute

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">default</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<div class="pt-form pt-form_border_all pt-form_view_default decorator decorator_space-a_l component component_whitepaper_default" style="width: 300px">
			<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_default pt-form__item_vertical-align_center">
				<div class="pt-form__label text text_size_m text_view_secondary">Name</div>
				<div class="pt-form__control">
					<span class="input input_theme_islands input_size_m i-bem input_js_inited" data-bem="{&quot;input&quot;:{}}">
						<span class="input__box">
							<input class="input__control required i-bem input__control_js_inited mce_inline_error" aria-required="true" aria-invalid="true">
						</span>
					</span>
				</div>
			</div>
			<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_default pt-form__item_vertical-align_center">
				<div class="pt-form__label text text_size_m text_view_secondary">Last name</div>
				<div class="pt-form__control">
					<span class="input input_theme_islands input_size_m i-bem input_js_inited" data-bem="{&quot;input&quot;:{}}">
						<span class="input__box">
							<input class="input__control required i-bem input__control_js_inited mce_inline_error" aria-required="true" aria-invalid="true">
						</span>
					</span>
				</div>
			</div>
			<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_default">
				<button class="button button_theme_islands button_size_s button_type_submit button_view_action button__control i-bem button_js_inited button__control_js_inited" data-bem="{&quot;button&quot;:{}}" role="button" type="submit" name="subscribe" id="mc-embedded-subscribe">
					<span class="button__text">Подтвердить</span>
				</button>
			</div>
		</div>
	</div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">right</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<div class="pt-form pt-form_border_all pt-form_view_default decorator decorator_space-a_l component component_whitepaper_default" style="width: 300px">
			<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_default pt-form__item_vertical-align_center">
				<div class="pt-form__label text text_size_m text_view_secondary">Name</div>
				<div class="pt-form__control">
					<span class="input input_theme_islands input_size_m i-bem input_js_inited" data-bem="{&quot;input&quot;:{}}">
						<span class="input__box">
							<input class="input__control required i-bem input__control_js_inited mce_inline_error" aria-required="true" aria-invalid="true">
						</span>
					</span>
				</div>
			</div>
			<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_default pt-form__item_vertical-align_center">
				<div class="pt-form__label text text_size_m text_view_secondary">Last name</div>
				<div class="pt-form__control">
					<span class="input input_theme_islands input_size_m i-bem input_js_inited" data-bem="{&quot;input&quot;:{}}">
						<span class="input__box">
							<input class="input__control required i-bem input__control_js_inited mce_inline_error" aria-required="true" aria-invalid="true">
						</span>
					</span>
				</div>
			</div>
			<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_right">
				<button class="button button_theme_islands button_size_s button_type_submit button_view_action button__control i-bem button_js_inited button__control_js_inited" data-bem="{&quot;button&quot;:{}}" role="button" type="submit" name="subscribe" id="mc-embedded-subscribe">
					<span class="button__text">Подтвердить</span>
				</button>
			</div>
		</div>
	</div>
</div>

#### vertical-align:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">center</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<div class="pt-form pt-form_border_all pt-form_view_default decorator decorator_space-a_l component component_whitepaper_default" style="width: 300px">
			<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_default pt-form__item_vertical-align_center">
				<div class="pt-form__label text text_size_m text_view_secondary">Name</div>
				<div class="pt-form__control">
					<span class="input input_theme_islands input_size_m i-bem input_js_inited" data-bem="{&quot;input&quot;:{}}">
						<span class="input__box">
							<input class="input__control required i-bem input__control_js_inited mce_inline_error" aria-required="true" aria-invalid="true">
						</span>
					</span>
				</div>
			</div>
			<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_default pt-form__item_vertical-align_center">
				<div class="pt-form__label text text_size_m text_view_secondary">Last name</div>
				<div class="pt-form__control">
					<span class="input input_theme_islands input_size_m i-bem input_js_inited" data-bem="{&quot;input&quot;:{}}">
						<span class="input__box">
							<input class="input__control required i-bem input__control_js_inited mce_inline_error" aria-required="true" aria-invalid="true">
						</span>
					</span>
				</div>
			</div>
			<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_right">
				<button class="button button_theme_islands button_size_s button_type_submit button_view_action button__control i-bem button_js_inited button__control_js_inited" data-bem="{&quot;button&quot;:{}}" role="button" type="submit" name="subscribe" id="mc-embedded-subscribe">
					<span class="button__text">Подтвердить</span>
				</button>
			</div>
		</div>
	</div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">default</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<div class="pt-form pt-form_border_all pt-form_view_default decorator decorator_space-a_l component component_whitepaper_default" style="width: 300px">
			<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_default pt-form__item_vertical-align_default">
				<div class="pt-form__label text text_size_m text_view_secondary">Name</div>
				<div class="pt-form__control">
					<span class="input input_theme_islands input_size_m i-bem input_js_inited" data-bem="{&quot;input&quot;:{}}">
						<span class="input__box">
							<input class="input__control required i-bem input__control_js_inited mce_inline_error" aria-required="true" aria-invalid="true">
						</span>
					</span>
				</div>
			</div>
			<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_default pt-form__item_vertical-align_default">
				<div class="pt-form__label text text_size_m text_view_secondary">Last name</div>
				<div class="pt-form__control">
					<span class="input input_theme_islands input_size_m i-bem input_js_inited" data-bem="{&quot;input&quot;:{}}">
						<span class="input__box">
							<input class="input__control required i-bem input__control_js_inited mce_inline_error" aria-required="true" aria-invalid="true">
						</span>
					</span>
				</div>
			</div>
			<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_right">
				<button class="button button_theme_islands button_size_s button_type_submit button_view_action button__control i-bem button_js_inited button__control_js_inited" data-bem="{&quot;button&quot;:{}}" role="button" type="submit" name="subscribe" id="mc-embedded-subscribe">
					<span class="button__text">Подтвердить</span>
				</button>
			</div>
		</div>
	</div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">baseline</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<div class="pt-form pt-form_border_all pt-form_view_default decorator decorator_space-a_l component component_whitepaper_default" style="width: 300px">
			<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_default pt-form__item_vertical-align_baseline">
				<div class="pt-form__label text text_size_m text_view_secondary">Name</div>
				<div class="pt-form__control">
					<span class="input input_theme_islands input_size_m i-bem input_js_inited" data-bem="{&quot;input&quot;:{}}">
						<span class="input__box">
							<input class="input__control required i-bem input__control_js_inited mce_inline_error" aria-required="true" aria-invalid="true">
						</span>
					</span>
				</div>
			</div>
			<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_default pt-form__item_vertical-align_baseline">
				<div class="pt-form__label text text_size_m text_view_secondary">Last name</div>
				<div class="pt-form__control">
					<span class="input input_theme_islands input_size_m i-bem input_js_inited" data-bem="{&quot;input&quot;:{}}">
						<span class="input__box">
							<input class="input__control required i-bem input__control_js_inited mce_inline_error" aria-required="true" aria-invalid="true">
						</span>
					</span>
				</div>
			</div>
			<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_right">
				<button class="button button_theme_islands button_size_s button_type_submit button_view_action button__control i-bem button_js_inited button__control_js_inited" data-bem="{&quot;button&quot;:{}}" role="button" type="submit" name="subscribe" id="mc-embedded-subscribe">
					<span class="button__text">Подтвердить</span>
				</button>
			</div>
		</div>
	</div>
</div>

### Элементы label и control

Используются в паре, когда лейбл и контрол должны стоять в одну строку. В случае, когда лейбл находится над контролом, обёртки не нужны.

Модификаторы элемента `label` | Значение          | Описание
----------------------------- | ----------------- | ---------------------------------------------
width                         | default / inverse | Ширина элемента 35% / 65% относительно строки

___

## Пример

<div class="pt-form pt-form_border_all pt-form_view_default decorator decorator_space-a_l component component_whitepaper_default" style="width: 300px">
	<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_default pt-form__item_vertical-align_center">
		<div class="pt-form__label text text_size_m text_view_secondary">Name</div>
		<div class="pt-form__control">
			<span class="input input_theme_islands input_size_m i-bem input_js_inited" data-bem="{&quot;input&quot;:{}}">
				<span class="input__box">
					<input class="input__control required i-bem input__control_js_inited mce_inline_error" aria-required="true" aria-invalid="true">
				</span>
			</span>
		</div>
	</div>
	<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_default pt-form__item_vertical-align_center">
		<div class="pt-form__label text text_size_m text_view_secondary">Last name</div>
		<div class="pt-form__control">
			<span class="input input_theme_islands input_size_m i-bem input_js_inited" data-bem="{&quot;input&quot;:{}}">
				<span class="input__box">
					<input class="input__control required i-bem input__control_js_inited mce_inline_error" aria-required="true" aria-invalid="true">
				</span>
			</span>
		</div>
	</div>
	<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_indent-b_xl pt-form__item_distribute_default pt-form__item_vertical-align_center">
		<div class="pt-form__label text text_size_m text_view_secondary">E-mail</div>
		<div class="pt-form__control">
			<span class="input input_theme_islands input_size_m i-bem input_js_inited" data-bem="{&quot;input&quot;:{}}">
				<span class="input__box">
					<input class="input__control required i-bem input__control_js_inited mce_inline_error" aria-required="true" aria-invalid="true">
				</span>
			</span>
		</div>
	</div>
	<div class="pt-form__item pt-form__item_distribute_right">
		<button class="button button_theme_islands button_size_s button_type_submit button_view_action button__control i-bem button_js_inited button__control_js_inited" data-bem="{&quot;button&quot;:{}}" role="button" type="submit" name="subscribe" id="mc-embedded-subscribe">
			<span class="button__text">Подтвердить</span>
		</button>
	</div>
</div>

``` html
<div class="preview">
	<div class="pt-form pt-form_border_all pt-form_view_default decorator decorator_space-a_l component component_whitepaper_default" style="width: 300px">
		<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_default pt-form__item_vertical-align_center">
			<div class="pt-form__label text text_size_m text_view_secondary">Name</div>
			<div class="pt-form__control">
				<span class="input input_theme_islands input_size_m i-bem input_js_inited" data-bem="{&quot;input&quot;:{}}">
					<span class="input__box">
						<input class="input__control required i-bem input__control_js_inited mce_inline_error" aria-required="true" aria-invalid="true">
					</span>
				</span>
			</div>
		</div>
		<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_distribute_default pt-form__item_vertical-align_center">
			<div class="pt-form__label text text_size_m text_view_secondary">Last name</div>
			<div class="pt-form__control">
				<span class="input input_theme_islands input_size_m i-bem input_js_inited" data-bem="{&quot;input&quot;:{}}">
					<span class="input__box">
						<input class="input__control required i-bem input__control_js_inited mce_inline_error" aria-required="true" aria-invalid="true">
					</span>
				</span>
			</div>
		</div>
		<div class="pt-form__item pt-form__item_space-v_xs pt-form__item_indent-b_xl pt-form__item_distribute_default pt-form__item_vertical-align_center">
			<div class="pt-form__label text text_size_m text_view_secondary">E-mail</div>
			<div class="pt-form__control">
				<span class="input input_theme_islands input_size_m i-bem input_js_inited" data-bem="{&quot;input&quot;:{}}">
					<span class="input__box">
						<input class="input__control required i-bem input__control_js_inited mce_inline_error" aria-required="true" aria-invalid="true">
					</span>
				</span>
			</div>
		</div>
		<div class="pt-form__item pt-form__item_distribute_right">
			<button class="button button_theme_islands button_size_s button_type_submit button_view_action button__control i-bem button_js_inited button__control_js_inited" data-bem="{&quot;button&quot;:{}}" role="button" type="submit" name="subscribe" id="mc-embedded-subscribe">
				<span class="button__text">Подтвердить</span>
			</button>
		</div>
	</div>
</div>
```
