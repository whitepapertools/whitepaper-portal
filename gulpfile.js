const gulp = require('gulp');
const postcss = require('gulp-postcss');
const concat = require('gulp-concat');
const postcssImport = require('postcss-import');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssCalc = require('postcss-calc');
const postcssNested = require('postcss-nested');
const postcssReporter = require('postcss-reporter');
const autoprefixer = require('autoprefixer');

const srcPath = './node_modules/whitepaper-bem/**/*.css';
const destPath = './cdn/';
const name = 'whitepaper-test';

gulp.task('css', function () {
	let plugins = [
		postcssImport(),
		postcssSimpleVars(),
		postcssCalc(),
		postcssNested,
		autoprefixer(),
		postcssReporter()
	];
	return gulp.src(srcPath)
		.pipe(postcss(plugins))
		.pipe(concat(name + '.css'))
		.pipe(gulp.dest(destPath));
});
