# pt-icon-plus

![pt-icon-plus](_images/pt-icon-plus.png)

Самый маленький и самый популярный паттерн. `pt-icon-plus` ставит графический элемент, не обязательно иконку, рядом с контентом.

<iframe height='300' scrolling='no' title='pt-icon-plus' src='//codepen.io/whitepapertools/embed/2231316d382d727f5aca24a612a8e1ea/?height=300&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/whitepapertools/pen/2231316d382d727f5aca24a612a8e1ea/'>pt-icon-plus</a> by whitepaper (<a href='https://codepen.io/whitepapertools'>@whitepapertools</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Структура блока

```js
{
	block: 'pt-icon-plus',
	content: [
	{
		elem: 'icon',
		content: [
		{
			// тут иконка
		}]
	},
	{
		elem: 'block',
		content: [
		{
			// тут остальная часть
		}]
	}]
}
```

Модификаторы   | Значение              | Описание                                             
-------------- | --------------------- | ---------------------------------------------------- 
vertical-align | bottom / center / top | Вертикальное выравнивание иконки относительно текста 
indent         | xxs / xs / s / m / l  | Отступ снизу
distribute     | between               | Распределение контента по горизонтали

Модификаторы элемента `icon` | Значение              | Описание                 
---------------------------- | --------------------- | ------------------------- 
offset                       | no                    | Отмена компенсации сверху 
indent-l                     | xxs / xs / s / m / l  | Отступ слева
indent-r                     | xxs / xs / s / m / l  | Отступ справа

<iframe height='500' scrolling='no' title='pt-icon-plus. in card' src='//codepen.io/whitepapertools/embed/5452388b3a612e0fee7ee886342cc72d/?height=500&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/whitepapertools/pen/5452388b3a612e0fee7ee886342cc72d/'>pt-icon-plus. in card</a> by whitepaper (<a href='https://codepen.io/whitepapertools'>@whitepapertools</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
