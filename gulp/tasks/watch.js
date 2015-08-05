import gulp from 'gulp';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';

const reload = browserSync.reload;

gulp.task('watch', () => {
	global.watching = true;

	gulp.watch('app/scripts/**/*.js', ['scripts']);

	gulp.watch('app/templates/**/*.jade', ['jade']);

	gulp.watch('app/styles/**/*.sass', ['styles']);
});
