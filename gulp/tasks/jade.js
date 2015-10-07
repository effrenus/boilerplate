import gulp from 'gulp';
import jade from 'gulp-jade';
import prettify from 'gulp-html-prettify';
import inheritance from 'gulp-jade-inheritance';
import gulpif from 'gulp-if';
import plumber from 'gulp-plumber';
import replace from 'gulp-replace';
import errorHandler from '../errorHandler';
import browserSync from 'browser-sync';
import config from '../config';

gulp.task('jade', () => {
	return gulp
		.src('app/templates/*.jade')
		.pipe(plumber({errorHandler}))
		.pipe(gulpif(global.watch, inheritance({basedir: 'app/templates'})))
		.pipe(jade())
		.pipe(prettify({
			brace_style: 'expand',
			indent_size: 1,
			indent_char: '\t',
			indent_inner_html: true,
			preserve_newlines: true
		}))
		.pipe(gulpif(process.NODE_ENV === 'test', replace(/\/pic\/design/gi, './pic/design')))
		.pipe(gulp.dest(config.dist))
		.pipe(browserSync.stream());
});
