import path from 'path';
import webpack from 'webpack';

const JS_REGEX = /\.js$|\.jsx$|\.es6$|\.babel$/;

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

let config = {

	devtool: 'eval',

	output: {
		path: path.join(__dirname, 'dist/scripts'),
		filename: 'bundle.js',
	},

	plugins: [
		new webpack.NoErrorsPlugin(),
	],

	resolve: {
		modulesDirectories: ['node_modules', 'app/scripts'],
		extensions: ['', '.js', '.jsx'],
	},

	module: {
		loaders: [
			{ test: JS_REGEX, exclude: /node_modules/, loader: 'babel'},
		],

		noParse: /\.min\.js/,
	},

};

if (IS_PRODUCTION) {
	config.devtool = 'source-map';
	config.plugins.push(
		new webpack.optimize.DedupePlugin()
	);
}

export default config;
