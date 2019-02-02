<style>
	.example .tpl-grid__fraction {
		background: var(--color-bg-brand);
		height: 100px;
	}
</style>

`tpl-grid` – Сетка для контентный блоков. Есть два сценария использования: [сетка с равными секциями](#Сетка-с-равными-секциями) для равнозначных блоков и [колоночная сетка](#Колоночная-сетка) для блоков разной ширины.

## Отступы
Для управления отступами используй модификаторы на расстояние между колонками и между строками. В них используются переменные с префиксом `--col-gap-`, `--row-gap-`, которые находятся в теме, где их можно при необходимости переопределить. Перед начало использования сеток, советуем прочитать про [отступы в теме](http://whitepaper.tools/doc.html#/theme-gap).

Модификатор | Значение                                        | Описание
----------- | ----------------------------------------------- | --------------------------
col-gap     | full / two-thirds / half / third / none         | Отступ между колонками: полный / две-трети / половина / треть / без отступа
row-gap     | full / two-thirds / half / third / none         | Отступ между строками: полный / две-трети / половина / треть / без отступа

## Сетка с равными секциями
Для такой сетки понадобится указать только количество секций в строке. Все прямые «дети» такой секции сами подстроятся по указанному правилу.

Для каждого брейкпоинта из [указанных в теме](http://whitepaper.tools/doc.html#/theme-breakpoint) можно указывать свой модификатор `ratio`, но это необязательно.

?> Помните, что адаптивные правила перестроения наследуются от меньшего брейкпоинта к большему.

Модификатор | Значение                                        | Описание
----------- | ----------------------------------------------- | --------------------------
s-ratio       | 1-1 / 1-1-1 / 1-1-1-1 / 1-1-1-1-1 / 1-1-1-1-1-1 | Колличество секций в сетке

### Примеры

<div class="example">
	<div class="tpl-grid tpl-grid_s-ratio_1-1 tpl-grid_m-ratio_1-1-1 tpl-grid_l-ratio_1-1-1-1 tpl-grid_col-gap_third tpl-grid_row-gap_third">
		<div class="tpl-grid__fraction"></div>
		<div class="tpl-grid__fraction"></div>
		<div class="tpl-grid__fraction"></div>
		<div class="tpl-grid__fraction"></div>
	</div>
</div>

```html
<div class="tpl-grid tpl-grid_s-ratio_1-1">
	<div class="tpl-grid__fraction">
		...
	</div>
</div>
```

## Колоночная сетка

Чтобы описать колоночную сетку, нужно указать несколько модификаторов: количество колонок, расстояние между колонками и расстояние между строками. Расстояния регулируются [темой](theme.md).

Если на твоем проекте сетка с другим количеством колонок, создай нужное значение модификатора на [уровне проекта](whitepaper-stub.md).

Модификатор | Значение                                | Описание
----------- | --------------------------------------- | --------------------------------------
columns     | 10 / 12                                 | Количество возможных колонок в сетке
col-gap     | none / third / half / two-thirds / full | Относительная ширина межколонника
row-gap     | none / third / half / two-thirds / full | Относительная высота межстрочника

## Элемент fraction

В колоночной сетке элементы `fraction` имеют модификатор на ширину в колонках

Модификатор | Значение                                         | Описание
----------- | ------------------------------------------------ | --------------------------
col         | 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10 / 11 / 12 | Ширина элемента в колонках


<iframe height='500' scrolling='no' title='tpl-grid. columns' src='//codepen.io/whitepapertools/embed/1b5f9e70fdae42bf89878e5a3694d34e/?height=500&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/whitepapertools/pen/1b5f9e70fdae42bf89878e5a3694d34e/'>tpl-grid. columns</a> by whitepaper (<a href='https://codepen.io/whitepapertools'>@whitepapertools</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
