# pt-list

![pt-list](_images/pt-list.png)

`pt-list` – это описание списка похожих друг на друга вертикально перечисленных сущностей.

Структура блока очень простая:

```js
{
	block: 'pt-list',
	content: [
	{
		elem: 'item'
	},
	{
		elem: 'item'
	}]
}
```

Пример списка.

<iframe height='500' scrolling='no' title='pt-list. flat' src='//codepen.io/whitepapertools/embed/138d1417680b2e1e4c75f9f5fffb7d39/?height=500&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/whitepapertools/pen/138d1417680b2e1e4c75f9f5fffb7d39/'>pt-list. flat</a> by whitepaper (<a href='https://codepen.io/whitepapertools'>@whitepapertools</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Модификатор | Значение
----------- | ---------------
border      | all
view        | default / ghost


Элементы `item` могут включать в себя друг друга.

<iframe height='500' scrolling='no' title='pt-list. nested' src='//codepen.io/whitepapertools/embed/60834c80ab573c6afdd1ed88f6b71f1f/?height=500&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/whitepapertools/pen/60834c80ab573c6afdd1ed88f6b71f1f/'>pt-list. nested</a> by whitepaper (<a href='https://codepen.io/whitepapertools'>@whitepapertools</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Модификаторы элемента `item` | Значение                         | Описание
---------------------------- | -------------------------------- | -------------------------------------
border                       | bottom / top                     | Обводка
distribute                   | default / between                | Распределение контента по горизонтали
vertical-align               | center / top / baseline          | Вертикальное выравнивание контента
indent-a                     | xs / s / m / l / xl / xxl / xxxl | Внешние отступы со всех сторон
indent-h                     | xs / s / m / l / xl / xxl / xxxl | Внешние отступы по горизонтали
indent-v                     | xs / s / m / l / xl / xxl / xxxl | Внешние отступы по вертикали
indent-t                     | xs / s / m / l / xl / xxl / xxxl | Внешний отступ сверху
indent-r                     | xs / s / m / l / xl / xxl / xxxl | Внешний отступ справа
indent-b                     | xs / s / m / l / xl / xxl / xxxl | Внешний отступ снизу
indent-l                     | xs / s / m / l / xl / xxl / xxxl | Внешний отступ слева
space-a                      | xxs / xs / s / m / l / xl / xxl  | Внутренние отступы со всех сторон
space-h                      | xxs / xs / s / m / l / xl / xxl  | Внутренние отступы по горизонтали
space-v                      | xxs / xs / s / m / l / xl / xxl  | Внутренние отступы по вертикали
space-t                      | xxs / xs / s / m / l / xl / xxl  | Внутренний отступ сверху
space-r                      | xxs / xs / s / m / l / xl / xxl  | Внутренний отступ справа
space-b                      | xxs / xs / s / m / l / xl / xxl  | Внутренний отступ снизу
space-l                      | xxs / xs / s / m / l / xl / xxl  | Внутренний отступ слева
