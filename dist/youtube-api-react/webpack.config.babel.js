import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const SRC_DIR = path.resolve(__dirname, 'src'),
  DIST_DIR = path.resolve(__dirname, 'dist'),
  ROOT_PATH = path.resolve(`${SRC_DIR}/app.js`),
  COMPONENTS_PATH = path.resolve(`${SRC_DIR}/components`),
  REDUCERS_PATH = path.resolve(`${SRC_DIR}/reducers`),
  CONTAINERS_PATH = path.resolve(`${SRC_DIR}/containers`),
  ACTIONS_PATH = path.resolve(`${SRC_DIR}/actions`);

module.exports = {
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
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties']
        },
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
      Containers: CONTAINERS_PATH,
      Reducers: REDUCERS_PATH,
      Actions: ACTIONS_PATH,
    },
    extensions: ['.jsx', '.js']
  },
  devServer: {
    port: 8000
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      $: 'jquery',
      _: 'lodash',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin('main.css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  mode: 'development'
};
