# Тэг

Идентификатор для категоризации, описания, поиска данных и задания внутренней структуры.

Блок `tag` может быть информационным, а может быть ссылкой. Также тег может быть редактируемым. Если тег можно редактировать, то к нему в контент нужно положить контрол, как в примере.

* [Модификаторы](#Модификаторы)
* [Элементы](#Элементы)
* [Пример](#Пример)

## Модификаторы блока

| Модификатор    | Значение                 |
|----------------|--------------------------|
| [view](#view)  | default / disable / link |
| [size](#size)  | m / s                    |

### view:

<div class="demo__row">
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">default</div>
		</div>
		<div class="tag tag_view_default tag_size_m">default</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">link</div>
		</div>
		<div class="tag tag_view_link tag_size_m">link</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">disable</div>
		</div>
		<div class="tag tag_view_disable tag_size_m">disable</div>
	</div>
</div>

### size:

<div class="demo__row">
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">s</div>
		</div>
		<div class="tag tag_view_default tag_size_s">default</div>
	</div>
	<div class="doc-view">
		<div class="doc-view__mod-name">
			<div class="text text_size_xl text_view_ghost">m</div>
		</div>
		<div class="tag tag_view_default tag_size_m">default</div>
	</div>
</div>

## Элементы

### text
Необходим для текста внутри тега, когда он используется совместно с контролом

## Пример

<div class="tag tag_view_default tag_size_m">
	<div class="tag__text">default</div>
	<div class="tag__delete icon icon_size_s icon_view_ghost">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill-rule="evenodd" d="M15 2.41L13.59 1 8 6.59 2.41 1 1 2.41 6.59 8 1 13.59 2.41 15 8 9.41 13.59 15 15 13.59 9.41 8z"/></svg>
	</div>
</div>

```html
<div class="tag tag_view_default tag_size_m">
	<div class="tag__text">default</div>
	<div class="tag__delete icon icon_size_s icon_view_ghost">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill-rule="evenodd" d="M15 2.41L13.59 1 8 6.59 2.41 1 1 2.41 6.59 8 1 13.59 2.41 15 8 9.41 13.59 15 15 13.59 9.41 8z"/></svg>
	</div>
</div>
```
