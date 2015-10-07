import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import csscomb from 'gulp-csscomb';
import replace from 'gulp-replace';
import autoprefixer from 'gulp-autoprefixer';
import config from '../config';
import errorHandler from '../errorHandler';

gulp.task('styles', () => {
	return gulp
		.src('app/styles/default.sass')
		.pipe(plumber({errorHandler}))
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false,
		}))
		.pipe(csscomb())
		.pipe(gulpif(process.NODE_ENV === 'test', replace(/\/pic\/design/gi, './pic/design')))
		.pipe(gulp.dest(config.styles))
		.pipe(browserSync.stream({match: '**/*.css'}));
});
