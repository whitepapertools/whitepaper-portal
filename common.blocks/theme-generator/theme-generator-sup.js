// console.log('work1');
//
// var postcss = require("postcss")
// var parser = require("postcss-value-parser")
// var colorFn = require("css-color-function")
// var helpers = require("postcss-message-helpers")
//
// /**
//  * Transform color() to rgb()
//  *
//  * @param  {String} string declaration value
//  * @return {String}        converted declaration value to rgba()
//  */
// function transformColor(string) {
// 	return parser(string).walk(function(node) {
// 		if (node.type !== "function" || node.value !== "color") {
// 		return
// 		}
//
// 		node.value = colorFn.convert(parser.stringify(node))
// 		node.type = "word"
// 	}).toString()
// }
// //
//
// let colorBgBrand = document.querySelector('.theme-generator__control_type_color-brand');
// let colorBaseBase = document.querySelector('.theme-generator__control_type_color-base-base');
// let themeColorThemeGenerator = document.querySelector('.theme_color_theme-generator');
//
// // Измение брендового цвета
// colorBaseBase.addEventListener('click', () => {
// 	let inputColor = '#fbb';
// 	themeColorThemeGenerator.style.setProperty('--color-typo-secondary', transformColor('color(' + inputColor + ' a(70%))'));
// 	themeColorThemeGenerator.style.setProperty('--color-typo-ghost', transformColor('color(' + inputColor + ' a(30%))'));
// });
//
// console.log('color(' + inputColor + ' a(30%))');
