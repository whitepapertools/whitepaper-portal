# Расстояния

Модификатор темы `gap` используются для формирования отступов внутри обвязок и сеток. Значений всего три: `small`, `medium`, `large`.

Переменные с префиксом `--col-gap-`, `--row-gap-` задают расстояния между колонками и строками [сетки](http://whitepaper.tools/doc.html#/layout-inner). Они наследуются от одной корневой переменной `--gap`, которая переопределяется в зависимости от [разрешения](http://whitepaper.tools/doc.html#/theme-breakpoint).

<div class="tpl-grid tpl-grid_s-ratio_1-1 tpl-grid_col-gap_half tpl-grid_row-gap_half decorator decorator_indent-t_xxxl">
	<div class="tpl-grid__fraction">
		<div class="gap">
			<div class="gap__view decorator decorator_indent-b_s"><img src="../../assets/i/col-gap-full.svg" alt="" class="image"></div>
			<code>--col-gap_full</code>
		</div>
	</div>
	<div class="tpl-grid__fraction">
		<div class="gap">
			<div class="gap__view decorator decorator_indent-b_s"><img src="../../assets/i/col-gap-two-thirds.svg" alt="" class="image"></div>
			<code>--col-gap_two-thirds</code>
		</div>
	</div>
	<div class="tpl-grid__fraction">
		<div class="gap">
			<div class="gap__view decorator decorator_indent-b_s"><img src="../../assets/i/col-gap-half.svg" alt="" class="image"></div>
			<code>--col-gap_half</code>
		</div>
	</div>
	<div class="tpl-grid__fraction">
		<div class="gap">
			<div class="gap__view decorator decorator_indent-b_s"><img src="../../assets/i/col-gap-third.svg" alt="" class="image"></div>
			<code>--col-gap_third</code>
		</div>
	</div>
	<div class="tpl-grid__fraction">
		<div class="gap">
			<div class="gap__view decorator decorator_indent-b_s"><img src="../../assets/i/col-gap-none.svg" alt="" class="image"></div>
			<code>--col-gap_none</code>
		</div>
	</div>
	<div class="tpl-grid__fraction">
		<div class="gap">
			<div class="gap__view decorator decorator_indent-b_s"><img src="../../assets/i/col-gap-row-gap.svg" alt="" class="image"></div>
			<code>--col-gap_third</code>
			<code>--row-gap_third</code>
		</div>
	</div>
</div>

## Структура

В значение переменной `--gap` указывается любая переменная из [отступов](http://whitepaper.tools/doc.html#/theme-space).

```css
:root {
	/* Размеры отступа у контента */
	--gap: var(--space-l);

	/* Размеры отступов в колонках относительно --gap */
	--col-gap-third: calc(var(--gap) * 0.33); /* Одна треть */
	--col-gap-half: calc(var(--gap) * 0.5); /* Половина */
	--col-gap-two-thirds: calc(var(--gap) * 0.66); /* Две трети */
	--col-gap-full: var(--gap); /* Полный */
	--col-gap-2x: calc(var(--gap) * 2); /* Двойной */
	--col-gap-3x: calc(var(--gap) * 3); /* Тройной */
}

@media screen and (min-width: $screen-s) {
	:root { --gap: var(--space-xxxl); }
}

@media screen and (min-width: $screen-m) {
	:root { --gap: var(--space-xxxxl); }
}

@media screen and (min-width: $screen-l) {
	:root { --gap: var(--space-xxxxxl); }
}
```
