const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.config');
const { outputDir } = require('./utils');

const devConfig = webpackMerge(webpackCommonConfig, {
  mode: 'production',
  devtool: 'source-map'
});

module.exports = devConfig;