/* eslint-disable no-undef */
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
	mode: 'production',
	plugins: [
		new Dotenv({
			path: path.resolve(__dirname, '..', './.env.production'),
		}),
	],
	devServer: {
		static: path.resolve(__dirname, '..', './dist')
	},
	devtool: 'source-map',
};
