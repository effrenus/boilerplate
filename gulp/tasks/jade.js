import gulp from 'gulp';
import jade from 'gulp-jade';
import inheritance from 'gulp-jade-inheritance';
import gulpif from 'gulp-if';
import plumber from 'gulp-plumber';
import errorHandler from '../errorHandler';

gulp.task('jade', () => {

	gulp
		.src('app/templates/*.jade')
		.pipe( plumber({errorHandler: errorHandler}) )
		.pipe( gulpif(global.watch, inheritance({basedir: 'app/templates'})) )
		.pipe( jade() )
		.pipe( gulp.dest('dist') );

});
