import gulp from 'gulp';
import sass from 'gulp-sass';

gulp.task('styles', () => {

	gulp
		.src('app/styles/default.sass')
		.pipe(sass())
		.pipe(gulp.dest('dist/styles'));

});
