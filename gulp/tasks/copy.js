import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import config from '../config';

gulp.task('copy:fonts', () => {
	return gulp
		.src('app/fonts/*')
		.pipe(gulp.dest(config.fonts));
});

gulp.task('copy:images', () => {
	return gulp
		.src('app/images/*.{png,jpg,gif,svg}')
		.pipe(imagemin({
			optimizationLevel: 3,
		}))
		.pipe(gulp.dest(config.images));
});

gulp.task('copy:js', () => {
	return gulp
		.src('app/scripts/libs/*')
		.pipe(gulp.dest('dist/scripts/libs'));
});

gulp.task('copy', ['copy:fonts', 'copy:images']);
