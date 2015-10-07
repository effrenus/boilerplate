import gulp from 'gulp';
import spritesmith from 'gulp.spritesmith';
import imagemin from 'gulp-imagemin';
import config from '../config';

gulp.task('spritesmith', (cb) => {
	const spriteData = gulp.src('./app/images/sprites/*.png').pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: 'sprite.sass',
		imgPath: '/pic/design/sprite.png',
	}));

	spriteData.img
		.pipe(imagemin({
			optimizationLevel: 3,
		}))
		.pipe(gulp.dest(config.images));

	spriteData.css
		.pipe(gulp.dest('./app/styles/helpers'));

	cb();
});
