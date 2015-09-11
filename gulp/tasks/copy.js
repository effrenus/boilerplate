import gulp from 'gulp';

gulp.task('copy:fonts', () => {
	gulp
		.src('app/fonts/*')
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task('copy:js', () => {
	gulp
		.src('app/scripts/libs/*')
		.pipe(gulp.dest('dist/scripts/libs'));
});

gulp.task('copy', ['copy:fonts', 'copy:js']);
