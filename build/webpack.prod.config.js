const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const { rootDir, outputDir } = require('./config');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  mode: 'production',
  entry: {
    main: './src/main.js'
  },
  output: {
    publicPath: '/',
    path: outputDir,
    filename: 'js/[name]_[chunkhash:6].js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.vue', '.scss', 'json'],
    alias: {
      '@': path.join(rootDir, './src')
    }
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          esModule: false,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      template: path.join(rootDir, 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]_[contenthash:6].css',
      chunkFilename: 'css/[id]_[contenthash:6].css',
      ignoreOrder: false
    }),
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new LodashModuleReplacementPlugin(),
    new CompressionPlugin()
  ]
};

if (process.env.BUILD_ENV === 'analyze') {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;