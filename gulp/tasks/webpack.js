import gulp from'gulp';
import webpack from 'webpack-stream';
import plumber from 'gulp-plumber';
import errorHandler from '../errorHandler';
import webpackConfig from '../../webpack.config';
import config from '../config';

gulp.task('webpack', () => {
	return gulp
		.src('app/scripts/app.js')
		.pipe(plumber({errorHandler}))
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest(config.dist.scripts));
});
