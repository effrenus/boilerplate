import gutil from 'gulp-util';

module.exports = (error) => {
	gutil.log([
		(error.name + ' in ' + error.plugin).bold.red,
		'',
		error.message,
		''
	].join('\n'));

	this.emit('end');
}
