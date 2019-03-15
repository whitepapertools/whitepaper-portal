# pt-card

<div class="preview">
	<a class="pt-card pt-card_view_default card-doc-preview card-doc-preview_shadow_soft" href="#">
		<img class="pt-card__image image card-doc-preview__image" src="../../assets/doc/doc-card-preview.jpg"/>
		<div class="pt-card__content pt-card__content_space-h_l pt-card__content_space-t_l card-doc-preview__content">
			<div class="pt-card__header card-doc-preview__header">
				<div class="text text_view_primary text_size_xs text_transform_uppercase text_spacing_xs text_weight_bold theme theme_color_whitepaper-brand">Melbourne, 14–17 March</div>
			</div>
			<div class="text text_size_xl text_view_primary text_weight_bold decorator_indent-b_xs">Formula 1 Rolex Australian Grand Prix 2019</div>
			<div class="text text_size_m text_view_secondary text_weight_regular decorator_indent-b_xl">5.303 km • 58 laps</div>
		</div>
		<div class="pt-card__footer pt-card__footer_space-h_l decorator_indent-b_l">
			<div class="pt-icon-plus pt-icon-plus_vertical-align_top pt-icon-plus_distribute_between card-doc-preview__action">
				<div class="pt-icon-plus__block">
					<div class="text text_view_primary text_size_m text_transform_uppercase text_spacing_xs text_weight_bold">Book your ticket</div>
				</div>
				<div class="pt-icon-plus__icon card-doc-preview__arrow">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 9.00053L10.2929 3.70713L11.7071 2.29297L19.4142 10.0006L11.7071 17.7072L10.2929 16.2929L15.5857 11.0005H1V9.00053H15.5859Z" fill="black"/>
					</svg>
				</div>
			</div>
		</div>
	</a>
</div>

Блок `pt-card` — карточка для представления информации в компактном формате.

* [Модификаторы блока](#Модификаторы)
* [Элементы](#Элементы)
* [Пример](#Пример)

___

## Модификаторы

Модификаторы                      | Значение                         | Описание
--------------------------------- | -------------------------------- | ----------------------------------------------------
[border](#border)                 | all                              | Выделение границ карточки
[shadow](#shadow)                 | cloud                            | Тень карточки
view                              | default                          | Фон подложки

### border:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">all</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<a class="pt-card pt-card_border_all pt-card_view_default card-doc-preview" href="#">
			<img class="pt-card__image image card-doc-preview__image" src="../../assets/doc/doc-card-preview.jpg"/>
			<div class="pt-card__content pt-card__content_space-h_l pt-card__content_space-t_l card-doc-preview__content">
				<div class="pt-card__header card-doc-preview__header">
					<div class="text text_view_primary text_size_xs text_transform_uppercase text_spacing_xs text_weight_bold theme theme_color_whitepaper-brand">Melbourne, 14–17 March</div>
				</div>
				<div class="text text_size_xl text_view_primary text_weight_bold decorator_indent-b_xs">Formula 1 Rolex Australian Grand Prix 2019</div>
				<div class="text text_size_m text_view_secondary text_weight_regular decorator_indent-b_xl">5.303 km • 58 laps</div>
			</div>
			<div class="pt-card__footer pt-card__footer_space-h_l decorator_indent-b_l">
				<div class="pt-icon-plus pt-icon-plus_vertical-align_top pt-icon-plus_distribute_between card-doc-preview__action">
					<div class="pt-icon-plus__block">
						<div class="text text_view_primary text_size_m text_transform_uppercase text_spacing_xs text_weight_bold">Book your ticket</div>
					</div>
					<div class="pt-icon-plus__icon card-doc-preview__arrow">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 9.00053L10.2929 3.70713L11.7071 2.29297L19.4142 10.0006L11.7071 17.7072L10.2929 16.2929L15.5857 11.0005H1V9.00053H15.5859Z" fill="black"/>
						</svg>
					</div>
				</div>
			</div>
		</a>
	</div>
</div>

### shadow:

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">cloud</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<a class="pt-card pt-card_shadow_cloud pt-card_view_default card-doc-preview" href="#">
			<img class="pt-card__image image card-doc-preview__image" src="../../assets/doc/doc-card-preview.jpg"/>
			<div class="pt-card__content pt-card__content_space-h_l pt-card__content_space-t_l card-doc-preview__content">
				<div class="pt-card__header card-doc-preview__header">
					<div class="text text_view_primary text_size_xs text_transform_uppercase text_spacing_xs text_weight_bold theme theme_color_whitepaper-brand">Melbourne, 14–17 March</div>
				</div>
				<div class="text text_size_xl text_view_primary text_weight_bold decorator_indent-b_xs">Formula 1 Rolex Australian Grand Prix 2019</div>
				<div class="text text_size_m text_view_secondary text_weight_regular decorator_indent-b_xl">5.303 km • 58 laps</div>
			</div>
			<div class="pt-card__footer pt-card__footer_space-h_l decorator_indent-b_l">
				<div class="pt-icon-plus pt-icon-plus_vertical-align_top pt-icon-plus_distribute_between card-doc-preview__action">
					<div class="pt-icon-plus__block">
						<div class="text text_view_primary text_size_m text_transform_uppercase text_spacing_xs text_weight_bold">Book your ticket</div>
					</div>
					<div class="pt-icon-plus__icon card-doc-preview__arrow">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 9.00053L10.2929 3.70713L11.7071 2.29297L19.4142 10.0006L11.7071 17.7072L10.2929 16.2929L15.5857 11.0005H1V9.00053H15.5859Z" fill="black"/>
						</svg>
					</div>
				</div>
			</div>
		</a>
	</div>
</div>

___

## Элементы

Элемент                              | Описание
------------------------------------ | ---------------------------------------------------
[header](#Элемент-header)      | Шапка карточки или контента
[content](#Элемент-content)   | Элемент для основного контента
[footer](#Элемент-footer)     | Подвал карточки ли контента
[image](#Элемент-image)       | Контейнер для изображения
[play](#Элемент-play)         | Обзначение ссылки на видео

### Элемент header

Элемент с абсолютным позиционированием в верхней части родителя над остальным контентом. Рекомендуется для использования в роли шапки карточки или элемента `content`.

Модификаторы `pt-card__header` | Значение                  | Описание
------------------------------ | ------------------------- | --------------------------------------
[distribute](#distribute)      | between / center / right  | Распределение элементов по горизонтали
space-a                        | xs / s / m / l / xl / xxl | Внутренние отступы вокруг элемента
space-h                        | xs / s / m / l / xl / xxl | Внутренние отступы по горизонтали
space-v                        | xs / s / m / l / xl / xxl | Внутренние отступы по вертикали

#### distribute

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">не задан</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<a class="pt-card pt-card_view_default card-doc-preview card-doc-preview_shadow_soft" href="#">
			<img class="pt-card__image image card-doc-preview__image" src="../../assets/doc/doc-card-preview.jpg"/>
			<div class="pt-card__content pt-card__content_space-h_l pt-card__content_space-t_l card-doc-preview__content">
				<div class="pt-card__header card-doc-preview__header">
					<div class="text text_view_primary text_size_xs text_transform_uppercase text_spacing_xs text_weight_bold theme theme_color_whitepaper-brand">Melbourne, 14–17 March</div>
				</div>
				<div class="text text_size_xl text_view_primary text_weight_bold decorator_indent-b_xs">Formula 1 Rolex Australian Grand Prix 2019</div>
				<div class="text text_size_m text_view_secondary text_weight_regular decorator_indent-b_xl">5.303 km • 58 laps</div>
			</div>
			<div class="pt-card__footer pt-card__footer_space-h_l decorator_indent-b_l">
				<div class="pt-icon-plus pt-icon-plus_vertical-align_top pt-icon-plus_distribute_between card-doc-preview__action">
					<div class="pt-icon-plus__block">
						<div class="text text_view_primary text_size_m text_transform_uppercase text_spacing_xs text_weight_bold">Book your ticket</div>
					</div>
					<div class="pt-icon-plus__icon card-doc-preview__arrow">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 9.00053L10.2929 3.70713L11.7071 2.29297L19.4142 10.0006L11.7071 17.7072L10.2929 16.2929L15.5857 11.0005H1V9.00053H15.5859Z" fill="black"/>
						</svg>
					</div>
				</div>
			</div>
		</a>
	</div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">center</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<a class="pt-card pt-card_view_default card-doc-preview card-doc-preview_shadow_soft" href="#">
			<img class="pt-card__image image card-doc-preview__image" src="../../assets/doc/doc-card-preview.jpg"/>
			<div class="pt-card__content pt-card__content_space-h_l pt-card__content_space-t_l card-doc-preview__content">
				<div class="pt-card__header pt-card__header_distribute_center">
					<div class="card-doc-preview__header" style="left: 0; position: relative;">
						<div class="text text_view_primary text_size_xs text_transform_uppercase text_spacing_xs text_weight_bold theme theme_color_whitepaper-brand">Melbourne, 14–17 March</div>
					</div>
				</div>
				<div class="text text_size_xl text_view_primary text_weight_bold decorator_indent-b_xs">Formula 1 Rolex Australian Grand Prix 2019</div>
				<div class="text text_size_m text_view_secondary text_weight_regular decorator_indent-b_xl">5.303 km • 58 laps</div>
			</div>
			<div class="pt-card__footer pt-card__footer_space-h_l decorator_indent-b_l">
				<div class="pt-icon-plus pt-icon-plus_vertical-align_top pt-icon-plus_distribute_between card-doc-preview__action">
					<div class="pt-icon-plus__block">
						<div class="text text_view_primary text_size_m text_transform_uppercase text_spacing_xs text_weight_bold">Book your ticket</div>
					</div>
					<div class="pt-icon-plus__icon card-doc-preview__arrow">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 9.00053L10.2929 3.70713L11.7071 2.29297L19.4142 10.0006L11.7071 17.7072L10.2929 16.2929L15.5857 11.0005H1V9.00053H15.5859Z" fill="black"/>
						</svg>
					</div>
				</div>
			</div>
		</a>
	</div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">right</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<a class="pt-card pt-card_view_default card-doc-preview card-doc-preview_shadow_soft" href="#">
			<img class="pt-card__image image card-doc-preview__image" src="../../assets/doc/doc-card-preview.jpg"/>
			<div class="pt-card__content pt-card__content_space-h_l pt-card__content_space-t_l card-doc-preview__content">
				<div class="pt-card__header pt-card__header_distribute_right">
					<div class="card-doc-preview__header" style="right: var(--space-l); left: auto; position: relative;">
						<div class="text text_view_primary text_size_xs text_transform_uppercase text_spacing_xs text_weight_bold theme theme_color_whitepaper-brand">Melbourne, 14–17 March</div>
					</div>
				</div>
				<div class="text text_size_xl text_view_primary text_weight_bold decorator_indent-b_xs">Formula 1 Rolex Australian Grand Prix 2019</div>
				<div class="text text_size_m text_view_secondary text_weight_regular decorator_indent-b_xl">5.303 km • 58 laps</div>
			</div>
			<div class="pt-card__footer pt-card__footer_space-h_l decorator_indent-b_l">
				<div class="pt-icon-plus pt-icon-plus_vertical-align_top pt-icon-plus_distribute_between card-doc-preview__action">
					<div class="pt-icon-plus__block">
						<div class="text text_view_primary text_size_m text_transform_uppercase text_spacing_xs text_weight_bold">Book your ticket</div>
					</div>
					<div class="pt-icon-plus__icon card-doc-preview__arrow">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 9.00053L10.2929 3.70713L11.7071 2.29297L19.4142 10.0006L11.7071 17.7072L10.2929 16.2929L15.5857 11.0005H1V9.00053H15.5859Z" fill="black"/>
						</svg>
					</div>
				</div>
			</div>
		</a>
	</div>
</div>

### Элемент content

Основной дочерний элемент паттерна `pt-card` в котором лежит весь контент.

Модификаторы `pt-card__content` | Значение                  | Описание
------------------------------- | ------------------------- | --------------------------------------
[distribute](#distribute)       | center / right            | Распределение элементов по горизонтали
vertical-align                  | center                    | Вертикальное выравнивание в футере
space-a                         | xs / s / m / l / xl / xxl | Внутренние отступы вокруг элемента
space-h                         | xs / s / m / l / xl / xxl | Внутренние отступы по горизонтали
space-v                         | xs / s / m / l / xl / xxl | Внутренние отступы по вертикали
space-t                         | xs / s / m / l / xl / xxl | Внутренний отступ сверху
space-r                         | xs / s / m / l / xl / xxl | Внутренний отступ справа
space-b                         | xs / s / m / l / xl / xxl | Внутренний отступ снизу
space-l                         | xs / s / m / l / xl / xxl | Внутренний отступ слева

#### distribute

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">center</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<a class="pt-card pt-card_view_default card-doc-preview card-doc-preview_shadow_soft" href="#">
			<img class="pt-card__image image card-doc-preview__image" src="../../assets/doc/doc-card-preview.jpg"/>
			<div class="pt-card__content pt-card__content_distribute_center pt-card__content_space-h_l pt-card__content_space-t_l card-doc-preview__content">
				<div class="pt-card__header pt-card__header_distribute_center">
					<div class="card-doc-preview__header" style="left: 0; position: relative;">
						<div class="text text_view_primary text_size_xs text_transform_uppercase text_spacing_xs text_weight_bold theme theme_color_whitepaper-brand">Melbourne, 14–17 March</div>
					</div>
				</div>
				<div class="text text_size_xl text_view_primary text_weight_bold decorator_indent-b_xs" style="text-align: center;">Formula 1 Rolex Australian Grand Prix 2019</div>
				<div class="text text_size_m text_view_secondary text_weight_regular decorator_indent-b_xl">5.303 km • 58 laps</div>
			</div>
			<div class="pt-card__footer pt-card__footer_space-h_l decorator_indent-b_l">
				<div class="pt-icon-plus pt-icon-plus_vertical-align_top pt-icon-plus_distribute_between card-doc-preview__action">
					<div class="pt-icon-plus__block">
						<div class="text text_view_primary text_size_m text_transform_uppercase text_spacing_xs text_weight_bold">Book your ticket</div>
					</div>
					<div class="pt-icon-plus__icon card-doc-preview__arrow">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 9.00053L10.2929 3.70713L11.7071 2.29297L19.4142 10.0006L11.7071 17.7072L10.2929 16.2929L15.5857 11.0005H1V9.00053H15.5859Z" fill="black"/>
						</svg>
					</div>
				</div>
			</div>
		</a>
	</div>
</div>


### Элемент footer

Элемент с абсолютным позиционированием в нижней части родителя над остальным контентом. Рекомендуется для использования в роли подвала карточки или элемента `content`.

Модификаторы элемента `footer`  | Значение                  | Описание
------------------------------- | ------------------------- | --------------------------------------
[distribute](#distribute)       | between / center / right  | Распределение элементов по горизонтали
vertical-align                  | center / top / bottom     | Вертикальное выравнивание в футере
space-a                         | xs / s / m / l / xl / xxl | Внутренние отступы вокруг элемента
space-h                         | xs / s / m / l / xl / xxl | Внутренние отступы по горизонтали
space-v                         | xs / s / m / l / xl / xxl | Внутренние отступы по вертикали

#### distribute

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">between</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<a class="pt-card pt-card_view_default card-doc-preview card-doc-preview_shadow_soft" href="#">
			<img class="pt-card__image image card-doc-preview__image" src="../../assets/doc/doc-card-preview.jpg"/>
			<div class="pt-card__content pt-card__content_space-h_l pt-card__content_space-t_l card-doc-preview__content">
				<div class="pt-card__header">
					<div class="card-doc-preview__header" style="position: relative;">
						<div class="text text_view_primary text_size_xs text_transform_uppercase text_spacing_xs text_weight_bold theme theme_color_whitepaper-brand">Melbourne, 14–17 March</div>
					</div>
				</div>
				<div class="text text_size_xl text_view_primary text_weight_bold decorator_indent-b_xs">Formula 1 Rolex Australian Grand Prix 2019</div>
				<div class="text text_size_m text_view_secondary text_weight_regular decorator_indent-b_xl">5.303 km • 58 laps</div>
			</div>
			<div class="pt-card__footer pt-card__footer_vertical-align_center pt-card__footer_distribute_between pt-card__footer_space-h_l decorator_indent-b_l">
				<div class="text text_view_primary text_size_m text_transform_uppercase text_spacing_xs text_weight_bold decorator decorator_space-r_l">Book your ticket</div>
				<svg class="card-doc-preview__arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 9.00053L10.2929 3.70713L11.7071 2.29297L19.4142 10.0006L11.7071 17.7072L10.2929 16.2929L15.5857 11.0005H1V9.00053H15.5859Z" fill="black"/>
				</svg>
			</div>
		</a>
	</div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">center</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<a class="pt-card pt-card_view_default card-doc-preview card-doc-preview_shadow_soft" href="#">
			<img class="pt-card__image image card-doc-preview__image" src="../../assets/doc/doc-card-preview.jpg"/>
			<div class="pt-card__content pt-card__content_space-h_l pt-card__content_space-t_l card-doc-preview__content">
				<div class="pt-card__header">
					<div class="card-doc-preview__header" style="position: relative;">
						<div class="text text_view_primary text_size_xs text_transform_uppercase text_spacing_xs text_weight_bold theme theme_color_whitepaper-brand">Melbourne, 14–17 March</div>
					</div>
				</div>
				<div class="text text_size_xl text_view_primary text_weight_bold decorator_indent-b_xs">Formula 1 Rolex Australian Grand Prix 2019</div>
				<div class="text text_size_m text_view_secondary text_weight_regular decorator_indent-b_xl">5.303 km • 58 laps</div>
			</div>
			<div class="pt-card__footer pt-card__footer_vertical-align_center pt-card__footer_distribute_center pt-card__footer_space-h_l decorator_indent-b_l">
				<div class="text text_view_primary text_size_m text_transform_uppercase text_spacing_xs text_weight_bold decorator decorator_space-r_l">Book your ticket</div>
				<svg class="card-doc-preview__arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 9.00053L10.2929 3.70713L11.7071 2.29297L19.4142 10.0006L11.7071 17.7072L10.2929 16.2929L15.5857 11.0005H1V9.00053H15.5859Z" fill="black"/>
				</svg>
			</div>
		</a>
	</div>
</div>

<div class="tpl-grid tpl-grid_m-columns_6 tpl-grid_col-gap_third tpl-grid_row-gap_third tpl-grid_vertical-align_center decorator decorator_indent-v_xl">
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_1">
		<div class="text text_size_xl text_view_ghost">right</div>
	</div>
	<div class="tpl-grid__fraction tpl-grid__fraction_m-col_5">
		<a class="pt-card pt-card_view_default card-doc-preview card-doc-preview_shadow_soft" href="#">
			<img class="pt-card__image image card-doc-preview__image" src="../../assets/doc/doc-card-preview.jpg"/>
			<div class="pt-card__content pt-card__content_space-h_l pt-card__content_space-t_l card-doc-preview__content">
				<div class="pt-card__header">
					<div class="card-doc-preview__header" style="position: relative;">
						<div class="text text_view_primary text_size_xs text_transform_uppercase text_spacing_xs text_weight_bold theme theme_color_whitepaper-brand">Melbourne, 14–17 March</div>
					</div>
				</div>
				<div class="text text_size_xl text_view_primary text_weight_bold decorator_indent-b_xs">Formula 1 Rolex Australian Grand Prix 2019</div>
				<div class="text text_size_m text_view_secondary text_weight_regular decorator_indent-b_xl">5.303 km • 58 laps</div>
			</div>
			<div class="pt-card__footer pt-card__footer_vertical-align_center pt-card__footer_distribute_right pt-card__footer_space-h_l decorator_indent-b_l">
				<div class="text text_view_primary text_size_m text_transform_uppercase text_spacing_xs text_weight_bold decorator decorator_space-r_l">Book your ticket</div>
				<svg class="card-doc-preview__arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 9.00053L10.2929 3.70713L11.7071 2.29297L19.4142 10.0006L11.7071 17.7072L10.2929 16.2929L15.5857 11.0005H1V9.00053H15.5859Z" fill="black"/>
				</svg>
			</div>
		</a>
	</div>
</div>

### Эдемент image

Элемент для изображения. Изображение с модификатором `size` в значении `cover` позиционируется абсолютно и используется как фон карточки.

Модификаторы элемента `image` | Значение      | Описание
----------------------------- | ------------- | -------------------------------------------
size                          | cover         | Использование изображения как фона карточки

<!-- shadow                        | bottom / top -->

### Элемент play

Этот элемент показывает, что карточка является ссылкой на видео. Вставляется в элемент `image`.

___

## Пример

<a class="pt-card pt-card_view_default card-doc-preview card-doc-preview_shadow_soft" href="#">
	<img class="pt-card__image image card-doc-preview__image" src="../../assets/doc/doc-card-preview.jpg"/>
	<div class="pt-card__content pt-card__content_space-h_l pt-card__content_space-t_l card-doc-preview__content">
		<div class="pt-card__header">
			<div class="card-doc-preview__header" style="position: relative;">
				<div class="text text_view_primary text_size_xs text_transform_uppercase text_spacing_xs text_weight_bold theme theme_color_whitepaper-brand">Melbourne, 14–17 March</div>
			</div>
		</div>
		<div class="text text_size_xl text_view_primary text_weight_bold decorator_indent-b_xs">Formula 1 Rolex Australian Grand Prix 2019</div>
		<div class="text text_size_m text_view_secondary text_weight_regular decorator_indent-b_xl">5.303 km • 58 laps</div>
	</div>
	<div class="pt-card__footer pt-card__footer_vertical-align_center pt-card__footer_distribute_between pt-card__footer_space-h_l decorator_indent-b_l">
		<div class="text text_view_primary text_size_m text_transform_uppercase text_spacing_xs text_weight_bold decorator decorator_space-r_l">Book your ticket</div>
		<svg class="card-doc-preview__arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 9.00053L10.2929 3.70713L11.7071 2.29297L19.4142 10.0006L11.7071 17.7072L10.2929 16.2929L15.5857 11.0005H1V9.00053H15.5859Z" fill="black"/>
		</svg>
	</div>
</a>

```
<a class="pt-card pt-card_view_default card-doc-preview card-doc-preview_shadow_soft" href="#">
	<img class="pt-card__image image card-doc-preview__image" src="../../assets/doc/doc-card-preview.jpg"/>
	<div class="pt-card__content pt-card__content_space-h_l pt-card__content_space-t_l card-doc-preview__content">
		<div class="pt-card__header">
			<div class="card-doc-preview__header" style="position: relative;">
				<div class="text text_view_primary text_size_xs text_transform_uppercase text_spacing_xs text_weight_bold theme theme_color_whitepaper-brand">Melbourne, 14–17 March</div>
			</div>
		</div>
		<div class="text text_size_xl text_view_primary text_weight_bold decorator_indent-b_xs">Formula 1 Rolex Australian Grand Prix 2019</div>
		<div class="text text_size_m text_view_secondary text_weight_regular decorator_indent-b_xl">5.303 km • 58 laps</div>
	</div>
	<div class="pt-card__footer pt-card__footer_vertical-align_center pt-card__footer_distribute_between pt-card__footer_space-h_l decorator_indent-b_l">
		<div class="text text_view_primary text_size_m text_transform_uppercase text_spacing_xs text_weight_bold decorator decorator_space-r_l">Book your ticket</div>
		<svg class="card-doc-preview__arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 9.00053L10.2929 3.70713L11.7071 2.29297L19.4142 10.0006L11.7071 17.7072L10.2929 16.2929L15.5857 11.0005H1V9.00053H15.5859Z" fill="black"/>
		</svg>
	</div>
</a>
```
