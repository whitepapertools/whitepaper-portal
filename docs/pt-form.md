# pt-form

<!-- ![pt-form](_images/pt-form.png) -->

<div class="preview">
	<img src="../../docs/_images/pt-form.png" alt="pt-form example" height="300" width="200">
</div>

Этот паттерн используется для представления информации, требующей ввода данных или выбора настроек, для дальнейшей отправки.

* [Модификаторы блока](#Модификаторы)
* [Элементы](#Элементы)
* [Пример кода](#Пример)


<!-- ```js
{
	block: 'pt-form',
	content: [
	{
		elem: 'item'
	},
	{
		elem: 'item'
	},
	{
		elem: 'item'
	}]
}
``` -->

## Модификаторы блока

Модификаторы | Значение        | Описание
------------ | --------------- | ------------------
[border](#border)     | all             | Обводка всей формы
[shadow](#shadow)     | cloud           | Тень от формы
[view](#view)         | default / ghost | Фон


### border:


<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-b_xxxl">
 <div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
  <div class="text text_size_xl text_view_ghost">border</div>
 </div>
 <div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
	 <div class="pt-form pt-form_border_all">
		 <div class="pt-form__label text text_size_m">First name</div>
		 <div class="pt-form__control">
		 	<div class="input input__theme_islands input__size_m input__width_available"></div>
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
   <div class="pt-informer__content pt-informer__content_space-a_l pt-informer__content_distribute_center">
    <div class="text text_size_xl text_view_primary text_weight_bold decorator decorator_indent-b_xxxs">Success message</div>
    <div class="text text_size_m text_view_primary decorator decorator_indent-b_xxxs">Small message description</div>
   </div>
  </div>
 </div>
</div>







<div class="tpl-grid tpl-grid_m-solumns_6 tpl-grid_l-columns_6">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_3 tpl-grid__fraction_l-col_3">
		<div class="text text_size_xl text_view_ghost">border</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_7 tpl-grid__fraction_l-col_7">
		<div class="pt-form pt-form_border_all">
			<div class="pt-form__label text text_size_m">First name</div>
			<div clas="pt-form__control "></div>
		</div>
	</div>
</div>


## Элемент item

Каждый логический блок формы – элемент `item`. Их вложенность может быть любой глубины.

<iframe height='500' scrolling='no' title='pt-form' src='//codepen.io/whitepapertools/embed/ff8d206dcb0f5670c6072825ed74968a/?height=500&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/whitepapertools/pen/ff8d206dcb0f5670c6072825ed74968a/'>pt-form</a> by whitepaper (<a href='https://codepen.io/whitepapertools'>@whitepapertools</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

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

## Элементы label и controls

Используются в паре, когда лейбл и контрол должны стоять в одну строку. В случае, когда лейбл находится над контролом, обёртки не нужны.

Модификаторы элемента `label` | Значение          | Описание
----------------------------- | ----------------- | ---------------------------------------------
width                         | default / inverse | Ширина элемента 35% / 65% относительно строки
