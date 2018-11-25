# pt-icon-plus

<!-- ![pt-icon-plus](_images/pt-icon-plus.png) -->

<div class="pt-icon-plus pt-icon-plus_vertical-align_bottom">
	<div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s icon icon_size_m icon_view_primary">
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
	</div>
	<div class="pt-icon-plus__block">
		<div class="text text_size_xl">
			Добавить участника
		</div>
	</div>
</div>

Самый маленький и самый популярный паттерн. `pt-icon-plus` ставит графический элемент, не обязательно иконку, рядом с контентом.

* [Модификаторы блока](#Модификаторы)
* [Элементы](#Элементы)
* [Пример](#Пример)

___

## Модификаторы блока

Модификаторы                      | Значение                         | Описание
--------------------------------- | -------------------------------- | ----------------------------------------------------
[vertical-align](#vertical-align) | bottom / center / top / baseline | Вертикальное выравнивание иконки относительно текста
[distribute](#distribute)         | between                          | Распределение контента по горизонтали

### vertical-align:

<div class="demo__row">
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">bottom</div>
		</div>
		<div class="pt-icon-plus pt-icon-plus_vertical-align_bottom">
			<div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s icon icon_size_m icon_view_primary">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
			</div>
			<div class="pt-icon-plus__block">
				<div class="text text_size_xl">
					Добавить участника
				</div>
			</div>
		</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">center</div>
		</div>
		<div class="pt-icon-plus pt-icon-plus_vertical-align_center">
			<div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s icon icon_size_m icon_view_primary">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
			</div>
			<div class="pt-icon-plus__block">
				<div class="text text_size_xl">
					Добавить участника
				</div>
			</div>
		</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">top</div>
		</div>
		<div class="pt-icon-plus pt-icon-plus_vertical-align_top">
			<div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s icon icon_size_m icon_view_primary">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
			</div>
			<div class="pt-icon-plus__block">
				<div class="text text_size_xl">
					Добавить участника
				</div>
			</div>
		</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">baseline</div>
		</div>
		<div class="pt-icon-plus pt-icon-plus_vertical-align_baseline">
			<div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s icon icon_size_m icon_view_primary">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
			</div>
			<div class="pt-icon-plus__block">
				<div class="text text_size_xl">
					Добавить участника
				</div>
			</div>
		</div>
	</div>
</div>

### distribute:

<div class="demo__row">
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">default</div>
		</div>
		<div class="pt-icon-plus pt-icon-plus_vertical-align_center">
			<div class="pt-icon-plus__block">
				<div class="text text_size_xl">
					Добавить участника
				</div>
			</div>
			<div class="pt-icon-plus__icon pt-icon-plus__icon_indent-l_xs icon icon_size_m icon_view_primary">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M12.007 15.674L20.588 7 22 8.425 11.99 18.5 2 8.424l1.414-1.423z"/></svg>
			</div>
		</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">between</div>
		</div>
		<div class="pt-icon-plus pt-icon-plus_vertical-align_center pt-icon-plus_distribute_between" style="min-width: 300px;">
			<div class="pt-icon-plus__block">
				<div class="text text_size_xl">
					Добавить участника
				</div>
			</div>
			<div class="pt-icon-plus__icon pt-icon-plus__icon_indent-l_xs icon icon_size_m icon_view_primary">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M12.007 15.674L20.588 7 22 8.425 11.99 18.5 2 8.424l1.414-1.423z"/></svg>
			</div>
		</div>
	</div>
</div>

___

## Элементы

### icon
Элемент-контейнер для графического элемента. Может располагаться как до, так и после блока с текстом.

Модификаторы элемента `icon` | Значение              | Описание
---------------------------- | --------------------- | -------------------------
[indent-r](#indent-r)        | xxs / xs / s / m / l  | Отступ справа
[indent-l](#indent-l)        | xxs / xs / s / m / l  | Отступ слева

#### indent-r:

<div class="demo__row">
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">xxs</div>
		</div>
		<div class="pt-icon-plus pt-icon-plus_vertical-align_center">
			<div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_xxs icon icon_size_m icon_view_primary">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
			</div>
			<div class="pt-icon-plus__block">
				<div class="text text_size_xl">
					Добавить участника
				</div>
			</div>
		</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">xs</div>
		</div>
		<div class="pt-icon-plus pt-icon-plus_vertical-align_center">
			<div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs icon icon_size_m icon_view_primary">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
			</div>
			<div class="pt-icon-plus__block">
				<div class="text text_size_xl">
					Добавить участника
				</div>
			</div>
		</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">s</div>
		</div>
		<div class="pt-icon-plus pt-icon-plus_vertical-align_center">
			<div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s icon icon_size_m icon_view_primary">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
			</div>
			<div class="pt-icon-plus__block">
				<div class="text text_size_xl">
					Добавить участника
				</div>
			</div>
		</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">m</div>
		</div>
		<div class="pt-icon-plus pt-icon-plus_vertical-align_center">
			<div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_m icon icon_size_m icon_view_primary">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
			</div>
			<div class="pt-icon-plus__block">
				<div class="text text_size_xl">
					Добавить участника
				</div>
			</div>
		</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">l</div>
		</div>
		<div class="pt-icon-plus pt-icon-plus_vertical-align_center">
			<div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_l icon icon_size_m icon_view_primary">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
			</div>
			<div class="pt-icon-plus__block">
				<div class="text text_size_xl">
					Добавить участника
				</div>
			</div>
		</div>
	</div>
</div>

#### indent-l:

<div class="demo__row">
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">xxs</div>
		</div>
		<div class="pt-icon-plus pt-icon-plus_vertical-align_center">
			<div class="pt-icon-plus__block">
				<div class="text text_size_xl">
					Добавить участника
				</div>
			</div>
			<div class="pt-icon-plus__icon pt-icon-plus__icon_indent-l_xxs icon icon_size_m icon_view_primary">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M12.007 15.674L20.588 7 22 8.425 11.99 18.5 2 8.424l1.414-1.423z"/></svg>
			</div>
		</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">xs</div>
		</div>
		<div class="pt-icon-plus pt-icon-plus_vertical-align_center">
			<div class="pt-icon-plus__block">
				<div class="text text_size_xl">
					Добавить участника
				</div>
			</div>
			<div class="pt-icon-plus__icon pt-icon-plus__icon_indent-l_xs icon icon_size_m icon_view_primary">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M12.007 15.674L20.588 7 22 8.425 11.99 18.5 2 8.424l1.414-1.423z"/></svg>
			</div>
		</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">s</div>
		</div>
		<div class="pt-icon-plus pt-icon-plus_vertical-align_center">
			<div class="pt-icon-plus__block">
				<div class="text text_size_xl">
					Добавить участника
				</div>
			</div>
			<div class="pt-icon-plus__icon pt-icon-plus__icon_indent-l_s icon icon_size_m icon_view_primary">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M12.007 15.674L20.588 7 22 8.425 11.99 18.5 2 8.424l1.414-1.423z"/></svg>
			</div>
		</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">m</div>
		</div>
		<div class="pt-icon-plus pt-icon-plus_vertical-align_center">
			<div class="pt-icon-plus__block">
				<div class="text text_size_xl">
					Добавить участника
				</div>
			</div>
			<div class="pt-icon-plus__icon pt-icon-plus__icon_indent-l_m icon icon_size_m icon_view_primary">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M12.007 15.674L20.588 7 22 8.425 11.99 18.5 2 8.424l1.414-1.423z"/></svg>
			</div>
		</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">l</div>
		</div>
		<div class="pt-icon-plus pt-icon-plus_vertical-align_center">
			<div class="pt-icon-plus__block">
				<div class="text text_size_xl">
					Добавить участника
				</div>
			</div>
			<div class="pt-icon-plus__icon pt-icon-plus__icon_indent-l_l icon icon_size_m icon_view_primary">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M12.007 15.674L20.588 7 22 8.425 11.99 18.5 2 8.424l1.414-1.423z"/></svg>
			</div>
		</div>
	</div>
</div>

### block
Элемент в который вкладывается блок текста. Используется без модификаторов.

___

## Пример

<div class="pt-icon-plus pt-icon-plus_vertical-align_bottom">
	<div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s icon icon_size_m icon_view_primary">
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
	</div>
	<div class="pt-icon-plus__block">
		<div class="text text_size_xl">
			Добавить участника
		</div>
	</div>
</div>

```html
<div class="pt-icon-plus pt-icon-plus_vertical-align_bottom">
	<div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s icon icon_size_m icon_view_primary">
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M16 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-6 2h12a2 2 0 0 1 2 2v4H8v-4a2 2 0 0 1 2-2zm-7-3V8h2v3h3v2H5v3H3v-3H0v-2h3z"/></svg>
	</div>
	<div class="pt-icon-plus__block">
		<div class="text text_size_xl">
			Добавить участника
		</div>
	</div>
</div>
```
