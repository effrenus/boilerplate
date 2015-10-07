import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task('scripts', ['webpack'], () => {
	return browserSync.stream({match: '*.js'});
});
