const gulp = require('gulp');
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');
const postcssImport = require('postcss-import');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssCalc = require('postcss-calc');
const postcssNested = require('postcss-nested');
const postcssReporter = require('postcss-reporter');
const postcssColorFunction = require('postcss-color-function');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const replace = require("gulp-string-replace");
const del = require('del');

const srcPath = './node_modules/whitepaper-bem';
const srcLevels = [
	srcPath + '/theme/**/*.css', // Тема
	srcPath + '/tpl-*/**/*.css', // Каркас
	srcPath + '/pt-*/**/*.css', // Паттерны

	srcPath + '/text/_font/**/*.css',  // Контент / Текст
	srcPath + '/text/_display/**/*.css',  // Контент / Текст
	srcPath + '/text/_size/**/*.css',  // Контент / Текст
	srcPath + '/text/_line-heigth/**/*.css',  // Контент / Текст
	srcPath + '/text/_align/**/*.css',  // Контент / Текст
	srcPath + '/text/_decoration/**/*.css',  // Контент / Текст
	srcPath + '/text/_spacing/**/*.css',  // Контент / Текст
	srcPath + '/text/_style/**/*.css',  // Контент / Текст
	srcPath + '/text/_transform/**/*.css',  // Контент / Текст
	srcPath + '/text/_view/**/*.css',  // Контент / Текст
	srcPath + '/text/_weight/**/*.css',  // Контент / Текст
	srcPath + '/text/_width/**/*.css',  // Контент / Текст
	srcPath + '/text/_type/**/*.css',  // Контент / Текст

	srcPath + '/avatar/**/*.css', // Контент
	srcPath + '/badge/**/*.css', // Контент
	srcPath + '/icon/**/*.css', // Контент
	srcPath + '/social-icon/**/*.css', // Контент
	srcPath + '/tag/**/*.css', // Контент
	srcPath + '/vector/**/*.css', // Контент

	srcPath + '/decorator/**/*.css' // Декоратор
];
const destPath = './cdn/';
const name = 'whitepaper';

let version = '';

const replaceVersion = rawString => {
	const newString = rawString.replace(/"version":\s*/g, '');
	const withoutQuotes = newString.substring(1, newString.length - 1).replace('"', '');
	version = withoutQuotes;

	return rawString;
};


gulp.task('clean', () => {
	del(destPath);
});

gulp.task('get-version', () => {
	return gulp.src(srcPath + '/package.json')
		.pipe(replace(/"version".*$/gm, replaceVersion))
});

gulp.task('css', () =>  {
	let plugins = [
		postcssImport(),
		postcssSimpleVars(),
		postcssCalc(),
		postcssNested,
		autoprefixer(),
		postcssColorFunction(),
		postcssReporter()
	];
	return gulp.src(srcLevels)
		.pipe(postcss(plugins))
		.pipe(concat(name + '-' + version + '.css'))
		// .pipe(rmComments())
		.pipe(gulp.dest(destPath))
		.pipe(csso())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(destPath));
});

gulp.task(
	'default',
	gulp.series(
		// "clean",
		'get-version',
		'css'
	)
);
