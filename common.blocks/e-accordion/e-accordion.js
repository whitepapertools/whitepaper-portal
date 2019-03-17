/* Переписать SlideDown на CSS, только ХЗ как сделать чтобы это было красиво */

$('.e-accordion__short').click(function() {
	var __this = $(this);

	if(__this.parent().hasClass('e-accordion__item'))
		__this.parent().toggleClass('e-accordion__item_view_active');
	else if(__this.hasClass('e-accordion__item'))
		__this.toggleClass('e-accordion__item_view_active');

	$(this).next().slideToggle('normal');
});