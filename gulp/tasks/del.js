import gulp from 'gulp';
import del from 'del';

gulp.task('del', function deleteTask(cb) {
	del('dist/**/*', cb);
});
