import gulp  from 'gulp';
import browserSync from 'browser-sync';

gulp.task('browserSync', () => {
	browserSync({
		files: ['dist/**/*'],
		port: 8080,
		server: {
			baseDir: [
				'dist',
			],
			directory: true,
		},
		open: true,
		ui: false,
		online: false,
		notify: false,
		minify: false,
	});
});
