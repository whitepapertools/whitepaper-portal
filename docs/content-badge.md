# Бейдж

<!-- ![Бейдж](_images/badge.png) -->
Для отображения статуса каких-либо сущностей используется блок `badge`. Статус определяется через модификацию.

## Модификаторы

| Модификатор   | Значение                            |
|---------------|-------------------------------------|
| [view](#view) | default / success / warning / alert |

### view:
<div class="demo__row">
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">default</div>
		</div>
		<div class="badge badge_view_default">default</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">success</div>
		</div>
		<div class="badge badge_view_success">success</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">warning</div>
		</div>
		<div class="badge badge_view_warning">warning</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">alert</div>
		</div>
		<div class="badge badge_view_alert">alert</div>
	</div>
</div>

## Пример

<div class="badge badge_view_success">Успешный статус</div>

```html
<div class="badge badge_view_success">Успешный статус</div>
```

<!-- ## Задание

Расставь `badge` соответственно статусам в строках платежей.

<iframe height='500' scrolling='no' title='badge' src='//codepen.io/whitepapertools/embed/cfc6b56114a7d5664d69c12f693227da/?height=500&theme-id=0&default-tab=js,result&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/whitepapertools/pen/cfc6b56114a7d5664d69c12f693227da/'>badge</a> by whitepaper (<a href='https://codepen.io/whitepapertools'>@whitepapertools</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe> -->
