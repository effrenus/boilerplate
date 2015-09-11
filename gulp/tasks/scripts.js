import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('scripts', ['webpack'], (cb) => {
	cb();
	browserSync.reload('*.js');
});
