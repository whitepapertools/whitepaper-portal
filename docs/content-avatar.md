# Аватар

![Аватарка](_images/avatar.png)

Блок, отображающий аватарку пользователя.

```js
{
	block: 'avatar',
	content: [
	// здесь может быть блок счетчика или уведомлений, 
	// которые располагаются поверх аватарки
	{
		elem: 'photo',
		elemMods: { size: 'm' },
		content: [
		{
			block: 'image',
			url: 'http://image'
		}]
	}]
}
```

Модификатор элемента 'photo'   | Значение
------------------------------ | --------------
size                           | xs / s / m / l

<iframe height='250' scrolling='no' title='avatar' src='//codepen.io/whitepapertools/embed/22222a8a7ecf82d941fe57a170619ac8/?height=250&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/whitepapertools/pen/22222a8a7ecf82d941fe57a170619ac8/'>avatar</a> by whitepaper (<a href='https://codepen.io/whitepapertools'>@whitepapertools</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
