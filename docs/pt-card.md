# pt-card

<!-- ![pt-card](_images/pt-card.png) -->

<div class="card-doc-preview theme theme_color_whitepaper-inverse component component_whitepaper_inverse pt-card" >
	<img class="image pt-card__image pt-card__image_size_cover" src="../../assets/doc/doc-card-preview.jpg">
	<div class="card-doc-preview__header pt-card__header pt-card__header_space-a_xxl pt-card__header_distribute_center">
		<div class="card-doc-preview__info">
			<div class="text text_view_primary text_size_xxxl text_weight_bold decorator decorator_indent-b_m">Card header</div>
			<div class="text text_view_primary text_size_l text_weight_regular decorator decorator_indent-b_l">Multi-line paragraph containing a short description of the card</div>
		</div>
	</div>
	<div class="card-doc-preview__footer pt-card__footer pt-card__footer_space-a_xxl pt-card__footer_distribute_center">
		<div class="text text_view_primary text_size_m">Card footer</div>
	</div>
</div>

Блок `pt-card` — карточка для представления информации в компактном формате.

```html
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
