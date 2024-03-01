const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map', // 用于追踪错误与告警
	devServer: {
		static: './dist',
	}
})