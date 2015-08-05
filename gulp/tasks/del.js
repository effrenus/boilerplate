import gulp from 'gulp';
import del from 'del';

gulp.task('del', function(cb) {
	del('dist/**/*', cb);
});
