'use strict';

import path from 'path';
import webpack from 'webpack';

const JS_REGEX = /\.js$|\.jsx$|\.es6$|\.babel$/;

export default {

	devtool: 'eval',

	output: {
		path: path.join(__dirname, 'dist/scripts'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],

	resolve: {
		modulesDirectories: ['node_modules', 'app/scripts'],
		extensions: ['', '.js', '.jsx']
	},

	module: {
		preLoaders: [
      {test: JS_REGEX, exclude: /node_modules/, loader: 'eslint'}
    ],

		loaders: [
			{ test: JS_REGEX, exclude: /node_modules/, loader: 'babel?optional[]=runtime&stage=0'}
		],

		noParse: /\.min\.js/
	}

}
