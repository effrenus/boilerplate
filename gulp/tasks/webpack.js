import gulp from'gulp';
import webpack from 'webpack-stream';
import plumber from 'gulp-plumber';
import errorHandler from '../errorHandler';
import config from '../../webpack.config';

gulp.task('webpack', () => {
	return gulp
		.src('app/scripts/app.js')
		.pipe(plumber({errorHandler}))
		.pipe(webpack(config))
		.pipe(gulp.dest('dist/scripts'))
});
