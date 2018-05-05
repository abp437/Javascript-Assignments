const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var SRC_DIR = path.resolve(__dirname, 'src');
var DIST_DIR = path.resolve(__dirname, 'dist');

var config = {
  entry: SRC_DIR + '/app.js',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  devServer: {
    contentBase: path.join(DIST_DIR),
    compress: true,
    port: 8000
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      React: 'react',
      ReactDOM: 'react-dom'
    }),
    new htmlWebpackPlugin({
      template: SRC_DIR +  '/index.html',
      hash: true,
      filename: DIST_DIR + '/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css'
    })
  ]
};

module.exports = config;
