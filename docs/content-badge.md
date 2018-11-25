# Бейдж

Для отображения статуса каких-либо сущностей используется блок `badge`. Статус определяется через модификацию.

* [Модификаторы](#Модификаторы)
* [Пример](#Пример)

## Модификаторы блока

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
