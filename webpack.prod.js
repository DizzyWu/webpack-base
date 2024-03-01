const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: '/.s?css$/',
				use: ['MiniCssExtractPlugin.loader', 'css-loader', 'sass-loader'],
			}
		]
	},
	plugins: [new MiniCssExtractPlugin({
		filename: '[name].css',
		chunkFilename: "[id].css",
	})],
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
	},
}