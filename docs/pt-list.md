# pt-list

<div class="pt-list pt-list_border_all pt-list_view_default">
	<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
		<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
			Первая операция
		</div>
		<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
			+1000 ₽
		</div>
	</div>
	<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
		<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
			Вторая операция
		</div>
		<div class="text text_size_m text_view_alert text_weight_bold text_transform_uppercase text_spacing_s">
			-500 ₽
		</div>
	</div>
	<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
		<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
			Третья операция
		</div>
		<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
			+2000 ₽
		</div>
	</div>
</div>

`pt-list` используется для вертикального представления повторяющихся сущностей. Отлично подходит для отображения истории, контактов, вертикальных меню.

* [Модификаторы блока](#Модификаторы)
* [Элементы](#Элементы)
* [Пример](#Пример)

___

## Модификаторы блока

Модификатор        | Значение        | Описание
------------------ | --------------- | ---------------
[border](#border)  | all             | Устанавливает границу вокруг блока
[view](#view)      | default / ghost | Управляет фоном списка

### border

<div class="demo__row">
	<div class="doc-view" style="margin-bottom: var(--space-xl);">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">не задан</div>
		</div>
		<div class="pt-list pt-list_view_default" style="min-width: 400px;">
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Первая операция
				</div>
				<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
					+1000 ₽
				</div>
			</div>
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Вторая операция
				</div>
				<div class="text text_size_m text_view_alert text_weight_bold text_transform_uppercase text_spacing_s">
					-500 ₽
				</div>
			</div>
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Третья операция
				</div>
				<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
					+2000 ₽
				</div>
			</div>
		</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">all</div>
		</div>
		<div class="pt-list pt-list_border_all pt-list_view_default" style="min-width: 400px;">
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Первая операция
				</div>
				<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
					+1000 ₽
				</div>
			</div>
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Вторая операция
				</div>
				<div class="text text_size_m text_view_alert text_weight_bold text_transform_uppercase text_spacing_s">
					-500 ₽
				</div>
			</div>
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Третья операция
				</div>
				<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
					+2000 ₽
				</div>
			</div>
		</div>
	</div>
</div>

### view

<div class="demo__row">
	<div class="doc-view" style="margin-bottom: var(--space-xl);">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">default</div>
		</div>
		<div class="pt-list pt-list_view_default" style="min-width: 400px;">
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Первая операция
				</div>
				<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
					+1000 ₽
				</div>
			</div>
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Вторая операция
				</div>
				<div class="text text_size_m text_view_alert text_weight_bold text_transform_uppercase text_spacing_s">
					-500 ₽
				</div>
			</div>
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Третья операция
				</div>
				<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
					+2000 ₽
				</div>
			</div>
		</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">ghost</div>
		</div>
		<div class="pt-list pt-list_view_ghost" style="min-width: 400px;">
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Первая операция
				</div>
				<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
					+1000 ₽
				</div>
			</div>
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Вторая операция
				</div>
				<div class="text text_size_m text_view_alert text_weight_bold text_transform_uppercase text_spacing_s">
					-500 ₽
				</div>
			</div>
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Третья операция
				</div>
				<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
					+2000 ₽
				</div>
			</div>
		</div>
	</div>
</div>

___

## Элементы

### item

Элемент определяет строку списка. Является контейнером для контента строки. Элементы `item` могут включать в себя друг друга.

Модификаторы элемента `item` | Значение                         | Описание
---------------------------- | -------------------------------- | -------------------------------------
[border](#border)            | bottom / top                     | Обводка
[distribute](#distribute)    | default / between                | Распределение контента по горизонтали
vertical-align               | center / top / baseline          | Вертикальное выравнивание контента
indent-a                     | xs / s / m / l / xl / xxl / xxxl | Внешние отступы со всех сторон
indent-h                     | xs / s / m / l / xl / xxl / xxxl | Внешние отступы по горизонтали
indent-v                     | xs / s / m / l / xl / xxl / xxxl | Внешние отступы по вертикали
indent-t                     | xs / s / m / l / xl / xxl / xxxl | Внешний отступ сверху
indent-r                     | xs / s / m / l / xl / xxl / xxxl | Внешний отступ справа
indent-b                     | xs / s / m / l / xl / xxl / xxxl | Внешний отступ снизу
indent-l                     | xs / s / m / l / xl / xxl / xxxl | Внешний отступ слева
space-a                      | xxs / xs / s / m / l / xl / xxl  | Внутренние отступы со всех сторон
space-h                      | xxs / xs / s / m / l / xl / xxl  | Внутренние отступы по горизонтали
space-v                      | xxs / xs / s / m / l / xl / xxl  | Внутренние отступы по вертикали
space-t                      | xxs / xs / s / m / l / xl / xxl  | Внутренний отступ сверху
space-r                      | xxs / xs / s / m / l / xl / xxl  | Внутренний отступ справа
space-b                      | xxs / xs / s / m / l / xl / xxl  | Внутренний отступ снизу
space-l                      | xxs / xs / s / m / l / xl / xxl  | Внутренний отступ слева

#### border

<div class="demo__row">
	<div class="doc-view" style="margin-bottom: var(--space-xl);">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">не задан</div>
		</div>
		<div class="pt-list pt-list_view_default" style="min-width: 400px;">
			<div class="pt-list__item pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Первая операция
				</div>
				<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
					+1000 ₽
				</div>
			</div>
			<div class="pt-list__item pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Вторая операция
				</div>
				<div class="text text_size_m text_view_alert text_weight_bold text_transform_uppercase text_spacing_s">
					-500 ₽
				</div>
			</div>
			<div class="pt-list__item pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Третья операция
				</div>
				<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
					+2000 ₽
				</div>
			</div>
		</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">bottom</div>
		</div>
		<div class="pt-list pt-list_view_default" style="min-width: 400px;">
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Первая операция
				</div>
				<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
					+1000 ₽
				</div>
			</div>
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Вторая операция
				</div>
				<div class="text text_size_m text_view_alert text_weight_bold text_transform_uppercase text_spacing_s">
					-500 ₽
				</div>
			</div>
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Третья операция
				</div>
				<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
					+2000 ₽
				</div>
			</div>
		</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">top</div>
		</div>
		<div class="pt-list pt-list_view_default" style="min-width: 400px;">
			<div class="pt-list__item pt-list__item_border_top pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Первая операция
				</div>
				<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
					+1000 ₽
				</div>
			</div>
			<div class="pt-list__item pt-list__item_border_top pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Вторая операция
				</div>
				<div class="text text_size_m text_view_alert text_weight_bold text_transform_uppercase text_spacing_s">
					-500 ₽
				</div>
			</div>
			<div class="pt-list__item pt-list__item_border_top pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Третья операция
				</div>
				<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
					+2000 ₽
				</div>
			</div>
		</div>
	</div>
</div>

#### distribute

<div class="demo__row">
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">default</div>
		</div>
		<div class="pt-list pt-list_view_default" style="min-width: 400px;">
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_default pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s" style="padding-right: var(--space-l);">
					Первая операция
				</div>
				<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
					+1000 ₽
				</div>
			</div>
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_default pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s" style="padding-right: var(--space-l);">
					Вторая операция
				</div>
				<div class="text text_size_m text_view_alert text_weight_bold text_transform_uppercase text_spacing_s">
					-500 ₽
				</div>
			</div>
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_default pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s" style="padding-right: var(--space-l);">
					Третья операция
				</div>
				<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
					+2000 ₽
				</div>
			</div>
		</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">between</div>
		</div>
		<div class="pt-list pt-list_view_default" style="min-width: 400px;">
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Первая операция
				</div>
				<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
					+1000 ₽
				</div>
			</div>
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Вторая операция
				</div>
				<div class="text text_size_m text_view_alert text_weight_bold text_transform_uppercase text_spacing_s">
					-500 ₽
				</div>
			</div>
			<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_s">
				<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
					Третья операция
				</div>
				<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
					+2000 ₽
				</div>
			</div>
		</div>
	</div>
</div>

___

## Пример

<div class="pt-list pt-list_border_all pt-list_view_default">
	<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
		<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
			Первая операция
		</div>
		<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
			+1000 ₽
		</div>
	</div>
	<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
		<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
			Вторая операция
		</div>
		<div class="text text_size_m text_view_alert text_weight_bold text_transform_uppercase text_spacing_s">
			-500 ₽
		</div>
	</div>
	<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
		<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
			Третья операция
		</div>
		<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
			+2000 ₽
		</div>
	</div>
</div>

```html
<div class="pt-list pt-list_border_all pt-list_view_default">
	<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
		<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
			Первая операция
		</div>
		<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
			+1000 ₽
		</div>
	</div>
	<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
		<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
			Вторая операция
		</div>
		<div class="text text_size_m text_view_alert text_weight_bold text_transform_uppercase text_spacing_s">
			-500 ₽
		</div>
	</div>
	<div class="pt-list__item pt-list__item_border_bottom pt-list__item_distribute_between pt-list__item_space-a_m">
		<div class="text text_size_m text_view_primary text_transform_uppercase text_spacing_s">
			Третья операция
		</div>
		<div class="text text_size_m text_view_success text_weight_bold text_transform_uppercase text_spacing_s">
			+2000 ₽
		</div>
	</div>
</div>
```
