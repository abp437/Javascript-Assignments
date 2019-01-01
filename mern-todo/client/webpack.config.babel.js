import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const SRC_DIR = path.resolve(__dirname, 'src'),
  DIST_DIR = path.resolve(__dirname, 'dist'),
  ROOT_PATH = path.resolve(`${SRC_DIR}/app.js`),
  COMPONENTS_PATH = path.resolve(`${SRC_DIR}/components`),
  STYLESHEETS_PATH = path.resolve(`${SRC_DIR}/stylesheets`);

module.exports = {
  devtool: 'eval-source-map',
  entry: ROOT_PATH,
  output: {
    path: DIST_DIR,
    filename: '[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
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
                safe: true,
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
        }],
      },
    ],
  },
  resolve: {
    alias: {
      Components: COMPONENTS_PATH,
      Stylesheets: STYLESHEETS_PATH,
    },
    extensions: ['.jsx', '.js'],
  },
  devServer: {
    port: 8000,
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      $: 'jquery',
      jQuery: 'jquery',
      axios: 'axios',
    }),
    new MiniCssExtractPlugin('main.css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
  mode: 'production',
};
