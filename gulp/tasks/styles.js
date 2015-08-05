import gulp from 'gulp';
import sass from 'gulp-sass';
import browserSync from 'browser-sync';

gulp.task('styles', () => {

	gulp
		.src('app/styles/default.sass')
		.pipe(sass())
		.pipe(gulp.dest('dist/styles'))
		.pipe(browserSync.stream());

});
