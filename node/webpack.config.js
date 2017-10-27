const htmlWebpackPlugin = require('html-webpack-plugin');
const pugLoader = require('pug-loader');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var SRC_DIR = path.resolve(__dirname, 'src');
var DIST_DIR = path.resolve(__dirname, 'dist');

var config = {
  entry: './src/app.js',
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
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.pug$/,
        use: 'pug-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(DIST_DIR),
    compress: true,
    port: 8000
  },
  plugins: [
    new htmlWebpackPlugin({
      template: SRC_DIR + '/index.pug',
      hash: true,
      filename: DIST_DIR + '/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css'
    })
  ]
};

module.exports = config;
