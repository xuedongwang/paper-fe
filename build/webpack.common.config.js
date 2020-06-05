const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { rootDir, outputDir } = require('./utils');
const { VueLoaderPlugin } = require('vue-loader');

const config = {
  entry: {
    main: './src/main.js'
  },
  output: {
    publicPath: '/',
    path: outputDir,
    filename: 'build.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.scss', 'json'],
    alias: {
      '@': path.join(rootDir, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
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
        loader: 'babel-loader'
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
    })
  ]
};

module.exports = config;