const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { rootDir, outputDir } = require('./config');
const { VueLoaderPlugin } = require('vue-loader');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const webpack = require('webpack');

const config = {
  mode: 'development',
  entry: {
    main: './src/main.js'
  },
  output: {
    publicPath: '/',
    path: outputDir,
    filename: 'build.js'
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: outputDir
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.vue', '.scss', 'json'],
    alias: {
      '@': path.join(rootDir, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
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
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [
          path.join(rootDir, 'src')
        ]
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
    new webpack.DefinePlugin({
      RUN_ENV: process.env.RUN_ENV
    }),
    new LodashModuleReplacementPlugin()
  ]
};

module.exports = config;