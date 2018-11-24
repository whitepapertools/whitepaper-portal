# Цвета

Переменные цветов используются в модификациях блоков и типографики, подчёркивая их смысл или состояние.

<div class="tpl-grid tpl-grid_ratio_1-1-1-1 tpl-grid_col-gap_two-thirds tpl-grid_row-gap_two-thirds decorator decorator_indent-b_xxxxl" style="padding-top: 0px;">
<div class="color">
	<div class="color__image color__image_color_brand"></div>
	<div class="text text_size_m text_weight_bold">--color-bg-brand</div>
</div>
<div class="color">
	<div class="color__image color__image_color_action"></div>
	<div class="text text_size_m text_weight_bold">--color-bg-action</div>
</div>
<div class="color">
	<div class="color__image color__image_color_selection"></div>
	<div class="text text_size_m text_weight_bold">--color-bg-selection</div>
</div>
<div class="color">
	<div class="color__image color__image_color_hover"></div>
	<div class="text text_size_m text_weight_bold">--color-bg-hover</div>
</div>
<div class="color">
	<div class="color__image color__image_color_default"></div>
	<div class="text text_size_m text_weight_bold">--color-bg-default</div>
</div>
<div class="color">
	<div class="color__image color__image_color_border"></div>
	<div class="text text_size_m text_weight_bold">--color-bg-border</div>
</div>
<div class="color">
	<div class="color__image color__image_color_ghost"></div>
	<div class="text text_size_m text_weight_bold">--color-bg-ghost</div>
</div>
<div class="color">
	<div class="color__image color__image_color_soft"></div>
	<div class="text text_size_m text_weight_bold">--color-bg-soft</div>
</div>
<div class="color">
	<div class="color__image color__image_color_tone"></div>
	<div class="text text_size_m text_weight_bold">--color-bg-tone</div>
</div>
<div class="color">
	<div class="color__image color__image_color_success"></div>
	<div class="text text_size_m text_weight_bold">--color-bg-success</div>
</div>
<div class="color">
	<div class="color__image color__image_color_alert"></div>
	<div class="text text_size_m text_weight_bold">--color-bg-alert</div>
</div>
<div class="color">
	<div class="color__image color__image_color_warning"></div>
	<div class="text text_size_m text_weight_bold">--color-bg-warning</div>
</div>
<div class="color">
	<div class="color__image color__image_color_soft"></div>
	<div class="text text_size_m text_weight_bold">--color-bg-system</div>
</div>
<div class="color">
	<div class="color__image color__image_color_normal"></div>
	<div class="text text_size_m text_weight_bold">--color-bg-normal</div>
</div>
</div>

Все переменные для цветов называются по смыслу, месту их использования. Они не обозначают значение цвета.

Цвета делятся на несколько частей:
+ **Базовые цвета.** От них наследуются все остальные. Использовать их в других случаях не рекомендуется. С префиксом --color-base-
+ **Статусные цвета.** 4 цвета для статусов. Они не наследуются от основной палитры, но влияют на цвета статусные текста и фонов блоков. С префиксом --color-base-
+ **Цвета фонов**. С префиксом --color-bg-
+ **Цвета текста**. С префиксом --color-typo-
+ **Цвета ссылок**. С префиксом --color-link

<iframe height='300' scrolling='no' title='theme. color' src='//codepen.io/whitepapertools/embed/289dd885a6773907fdff0546ce3a820a/?height=300&theme-id=0&default-tab=css,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/whitepapertools/pen/289dd885a6773907fdff0546ce3a820a/'>theme. color</a> by whitepaper (<a href='https://codepen.io/whitepapertools'>@whitepapertools</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Чтобы применить цвет к своему локальном ублоку, используй [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*).

```css
background: var(--color-bg-brand);
```
