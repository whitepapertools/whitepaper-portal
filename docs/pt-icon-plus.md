# pt-icon-plus

<!-- ![pt-icon-plus](_images/pt-icon-plus.png) -->

<div class="pt-icon-plus pt-icon-plus_vertical-align_center">
	<div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_xs icon icon_size_s icon_view_link">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
			<path fill-rule="evenodd" d="M4 7h2.5v1.5H4V11H2.5V8.5H0V7h2.5V4.5H4V7zm7 1a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM8 9.5h6a2 2 0 0 1 2 2V14H6v-2.5a2 2 0 0 1 2-2z"/>
		</svg>
	</div>
	<div class="pt-icon-plus__block">
		<div class="text text_size_m text_view_link">
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

Модификаторы   | Значение                         | Описание
-------------- | -------------------------------- | ----------------------------------------------------
vertical-align | bottom / center / top / baseline | Вертикальное выравнивание иконки относительно текста
indent         | xxs / xs / s / m / l             | Отступ снизу
distribute     | between                          | Распределение контента по горизонтали

#### vertical-align:

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

#### indent-r:

<div class="demo__row">
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">bottom</div>
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
</div>

Модификаторы элемента `icon` | Значение              | Описание
---------------------------- | --------------------- | -------------------------
offset                       | no                    | Отмена компенсации сверху
indent-l                     | xxs / xs / s / m / l  | Отступ слева
indent-r                     | xxs / xs / s / m / l  | Отступ справа

<!-- <iframe height='500' scrolling='no' title='pt-icon-plus. in card' src='//codepen.io/whitepapertools/embed/5452388b3a612e0fee7ee886342cc72d/?height=500&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/whitepapertools/pen/5452388b3a612e0fee7ee886342cc72d/'>pt-icon-plus. in card</a> by whitepaper (<a href='https://codepen.io/whitepapertools'>@whitepapertools</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe> -->
