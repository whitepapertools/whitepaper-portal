# BEMJSON

BEMJSON – формат, в котором описывается разметка в БЭМ-терминах. 

<iframe height='500' scrolling='no' title='BEMJSON' src='//codepen.io/whitepapertools/embed/67a82ac26b21dcfd27d0af62fdbb7f0b/?height=500&theme-id=0&default-tab=css,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/whitepapertools/pen/67a82ac26b21dcfd27d0af62fdbb7f0b/'>BEMJSON</a> by whitepaper (<a href='https://codepen.io/whitepapertools'>@whitepapertools</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Блок

Чтобы описать блок, нужно знать только его название.

```js
{ block: 'page' }
```

В результирующем HTML получаем

```html
<div class="page"></div>
```

## Элемент

Для описания элемента нужно знать имя родителя и имя элемента.

```js
{
	block: 'page',
	content: [
	{
		elem: 'header'
	}]
}
```

Так как вложенность у сущностей может быть любая, если элемент обернут в другой блок, нужно ему явно указать кто его родитель.

```js
{
	block: 'page',
	content: [
	{
		block: 'layout',
		content: [
		{
			block: 'page',
			elem: 'header'
		}]
	}]
}
```

В результирующем HTML получаем

```html
<div class="page">
	<div class="layout">
		<div class="page__header"></div>
	</div>
</div>
```

## Модификатор

Модификаторы блока и элемента отличаются по синтаксису и могут быть формата ключ-значение или простыми.

```js
{
	block: 'tab',
	mods: { name: 'index', visible: true },
	content: [
	{
		elem: 'item',
		elemMods: { status: 'active' }
	}]
}
```

```html
<div class="tab tab_name_index tab_visible">
	<div class="tab__item tab__item_status_active"></div>
</div>
```

## Контент

В примерах выше видно, что вложенность сущностей осуществляется с помощью поля `content`. В него можно складывать как одну, так и несколько сущностей.

```js
{
	block: 'page',
	content: [
		{ block: 'header'},
		{ block: 'article', content: '…' },
		'© 2017'
	]
}
```

```html
<div class="page">
	<div class="header"></div>
	<div class="article">...</div>
	© 2017
</div>
```

## Микс

Миксуемая сущность описывается так же, как и основной блок. НО! [Шаблоны](bemhtml.md) этого блока не применятся, как и его контент.

```js
{
	block: 'link',
	mix: { block: 'controller' }
}
```

```html
<div class="link controller"></div>
```

## Атрибуты

У любого тега в HTML-разметке есть набор атрибутов. В BEMJSON-разметке их указывает поле `attrs`.

```js
{
	attrs: {
		id: 'anchor',
		name: 'Мультфильм "Tom & Jerry"',
		style: 'color: red; background: green;'
	}
}
```

```html
<div id="anchor" name="Мультфильм &quot;Tom &amp; Jerry&quot;" style="color: red; background: green;"></div>
```

## Тег

По умолчанию шаблонизатор всем сущностям выставляет тег `div`. Его можно поменять на любой другой, указав в поле `tag`

```js
{
	tag: 'a',
	block: 'link',
	attrs: { href: 'bem.design' },
	content: 'Click me!'
}
```

```html
<a href="whitepaper.tools" class="link">Click me!</a>
```
