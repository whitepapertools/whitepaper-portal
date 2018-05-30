# Аватар

<div class="preview">
	<div class="avatar">
		<div class="avatar__photo avatar__photo_size_m">
		</div>
	</div>
</div>

Блок для отображения аватарки пользователя. Если изображение неопределено вставляется дефолтная картинка.

* [Элементы](#Элементы-блока)
* [Пример](#Пример)

___

## Элементы блока

### Элемент photo

Элемент в который вставляется аватарка пользователя. За счёт модификаторов регулируется размер изображения.

Модификатор элемента 'photo'   | Значение       | Описание
------------------------------ | -------------- | --------------
size                           | xs / s / m / l | Размер аватарки

#### size

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">xs</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<div class="avatar">
			<div class="avatar__photo avatar__photo_size_xs">
			</div>
		</div>
	</div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">s</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<div class="avatar">
			<div class="avatar__photo avatar__photo_size_s">
			</div>
		</div>
	</div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">m</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<div class="avatar">
			<div class="avatar__photo avatar__photo_size_m">
			</div>
		</div>
	</div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">l</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<div class="avatar">
			<div class="avatar__photo avatar__photo_size_l">
			</div>
		</div>
	</div>
</div>

___

## Пример

<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
	<div class="avatar">
		<div class="avatar__photo avatar__photo_size_l">
		</div>
	</div>
</div>

``` html
<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
	<div class="avatar">
		<div class="avatar__photo avatar__photo_size_l">
		</div>
	</div>
</div>
```
