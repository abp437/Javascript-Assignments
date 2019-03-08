import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

const SRC_DIR = path.resolve(__dirname, 'src'),
  DIST_DIR = path.resolve(__dirname, 'dist'),
  ROOT_PATH = path.resolve(SRC_DIR + '/app.js'),
  COMPONENTS_PATH = path.resolve(SRC_DIR + '/components'),
  REDUCERS_PATH = path.resolve(SRC_DIR + '/reducers'),
  CONTAINERS_PATH = path.resolve(SRC_DIR + '/containers'),
  ACTIONS_PATH = path.resolve(SRC_DIR + '/actions');

module.exports = (env) => {
  const isProduction = env.production === true;
  return {
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
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: ['react-hot-loader/babel'],
              },
            },
            {
              loader: 'eslint-loader',
            }
          ]
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
        jQuery: 'jquery'
      }),
      new MiniCssExtractPlugin('main.css'),
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ],
    optimization: {
      occurrenceOrder: true,
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            mangle: true,
            keep_fnames: false,
          },
          cache: true,
          parallel: true,
          test: /\.js(\?.*)?$/i,
          include: /\/includes/,
          sourceMap: true,
        })
      ],
    },
    devtool: (() => {
      if (isProduction) {
        return 'cheap-source-map';
      }
      return 'eval-source-map';
    })(),
    mode: (() => {
      if (isProduction) {
        return 'production';
      }
      return 'development';
    })(),
  };
};
