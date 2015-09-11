import gulp from 'gulp';
import gulpif from 'gulp-if';
import browserSync from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';
import plumber from 'gulp-plumber';
import errorHandler from '../errorHandler';
import sass from 'gulp-sass';
import csso from 'gulp-csso';
import config from '../config';

gulp.task('styles', () => {
	return gulp
		.src('app/styles/*.{sass,scss}')
		.pipe(plumber({errorHandler}))
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false,
		}))
		.pipe(gulpif(process.env.NODE_ENV === 'production', csso()))
		.pipe(gulp.dest(config.dist.styles))
		.pipe(browserSync.stream());
});
