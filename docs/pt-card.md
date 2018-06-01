# pt-card

![pt-card](_images/pt-card.png)

Способ представления информации в маленьком формате.

```js
{
	block: 'pt-card',
	content: [
	{
		elem: 'image'
	},
	{
		elem: 'header'
	},
	{
		elem: 'content'
	},
	{
		elem: 'footer'
	}]
}
```

<iframe height='500' scrolling='no' title='pt-card' src='//codepen.io/whitepapertools/embed/6dfa7d09f4c412333aa70bf475064679/?height=500&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/whitepapertools/pen/6dfa7d09f4c412333aa70bf475064679/'>pt-card</a> by whitepaper (<a href='https://codepen.io/whitepapertools'>@whitepapertools</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Элемент header

Располагается поверх всего контента и висит в верху карточки. Выполняет роль шапки. Может использоваться, как шапка карточки, так и как шапка контента.

Модификаторы `pt-card__header` | Значение
------------------------------ | -------------------------
align                          | center / right
space-a                        | xs / s / m / l / xl / xxl
space-h                        | xs / s / m / l / xl / xxl
space-v                        | xs / s / m / l / xl / xxl

## Элемент content

Основной ребенок паттерна `pt-card`, в котором лежит весь контент.

Модификаторы `pt-card__content` | Значение
------------------------------- | -------------------------
align                           | center
vertical-align                  | center
space-a                         | xs / s / m / l / xl / xxl
space-h                         | xs / s / m / l / xl / xxl
space-v                         | xs / s / m / l / xl / xxl
space-t                         | xs / s / m / l / xl / xxl
space-r                         | xs / s / m / l / xl / xxl
space-b                         | xs / s / m / l / xl / xxl
space-l                         | xs / s / m / l / xl / xxl

## Элемент footer

Располагается поверх всего контента и висит в внизу карточки. Выполняет роль подвала. Может использоваться, как подвал карточки, так и как подвал контента.

Модификаторы элемента `footer`  | Значение
------------------------------- | -------------------------
align                           | center / top / bottom
distribute                      | right / between
space-a                         | xs / s / m / l / xl / xxl
space-h                         | xs / s / m / l / xl / xxl
space-v                         | xs / s / m / l / xl / xxl

## Элемент image

Элемент для отображения изображения.

Модификаторы элемента `image` | Значение
----------------------------- | -------------
shadow                        | bottom / top
size                          | cover

## Элемент play

Этот элемент показывает, что карточка является ссылкой на видео. Вставляется в элемент `image`.
