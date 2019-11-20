const path = require('path');

module.exports = {
	entry: ['@babel/polyfill', './src/app.js'],
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader',
				}
			}
		]
	}
};