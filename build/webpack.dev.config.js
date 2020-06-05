const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common.config');
const { outputDir } = require('./utils');

const devConfig = webpackMerge(webpackCommonConfig, {
  mode: 'development',
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: outputDir
  }
});

module.exports = devConfig;