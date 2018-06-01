# Сетки

`tpl-grid` – Сетка для контентный блоков. "Дети" такой сетки подчиняются ее правилам, им не надо дополнительно указывать размеры.

```js 
{
	block: 'tpl-grid',
	content: [
	{ elem: 'fraction' },
	{ elem: 'fraction' },
	{ elem: 'fraction' }]
}
```

## Сетка с равными секциями

Для такой сетки понадобится указать только количество секций в строке.

Модификатор | Значение                                        | Описание
----------- | ----------------------------------------------- | --------------------------
ratio       | 1-1 / 1-1-1 / 1-1-1-1 / 1-1-1-1-1 / 1-1-1-1-1-1 | Колличество секций в сетке

<iframe height='500' scrolling='no' title='tpl-grid. ratio' src='//codepen.io/whitepapertools/embed/5dc797f4ecf179d175ac940ceb11f893/?height=500&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/whitepapertools/pen/5dc797f4ecf179d175ac940ceb11f893/'>tpl-grid. ratio</a> by whitepaper (<a href='https://codepen.io/whitepapertools'>@whitepapertools</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

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
