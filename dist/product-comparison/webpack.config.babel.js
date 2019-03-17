import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');
const ROOT_PATH = path.resolve(SRC_DIR + '/app.js');
const COMPONENTS_PATH = path.resolve(SRC_DIR + '/components');
const STYLESHEETS_PATH = path.resolve(SRC_DIR + '/stylesheets');
const IMAGES_PATH = path.resolve(SRC_DIR + '/images');
const CONSTANTS_PATH = path.resolve(SRC_DIR + '/constants');

module.exports = {
  devtool: 'source-map',
  entry: ROOT_PATH,
  output: {
    path: DIST_DIR,
    filename: '[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: {
                safe: true
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Components: COMPONENTS_PATH,
      Stylesheets: STYLESHEETS_PATH,
      Images: IMAGES_PATH,
      Constants: CONSTANTS_PATH,
    },
    extensions: ['.jsx', '.js']
  },
  devServer: {
    port: 8000
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      $: 'jquery',
      jQuery: 'jquery',
      PropTypes: 'prop-types',
    }),
    new MiniCssExtractPlugin('main.css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  mode: 'production'
};
