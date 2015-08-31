import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import errorHandler from '../errorHandler';

gulp.task('styles', () => {
	return gulp
		.src('app/styles/default.sass')
		.pipe(plumber({errorHandler}))
		.pipe(sass())
		.pipe(gulp.dest('dist/styles'))
		.pipe(browserSync.stream());
});
