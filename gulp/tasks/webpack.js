import gulp from'gulp';
import webpack from 'webpack-stream';
import config from '../../webpack.config';
import plumber from 'gulp-plumber';
import errorHandler from '../errorHandler';

gulp.task('webpack', () => {
	gulp
		.src('app/scripts/app.js')
		.pipe( plumber({errorHandler: errorHandler}) )
		.pipe( webpack(config) )
		.pipe( gulp.dest('dist/scripts') )
});
