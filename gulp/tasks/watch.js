import gulp from 'gulp';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';

const reload = browserSync.reload;

gulp.task('watch', () => {
	global.watching = true;

	gulp.watch('app/scripts/**/*.js', () => { runSequence('scripts', reload); });

	gulp.watch('app/templates/**/*.jade', () => { runSequence('jade', reload); });

	gulp.watch('app/styles/**/*.sass', () => { runSequence('styles', reload); });
});
