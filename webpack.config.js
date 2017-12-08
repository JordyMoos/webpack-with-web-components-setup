const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'bower_components'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          'babel-loader',
          'polymer-webpack-loader',
        ],
      },
      {
        test: /\.elm$/,
        use: {
          loader: 'elm-webpack-loader',
          options: {
            debug: true,
            warn: false,
          },
        },
      },
    ],
  },
  devServer: {
    compress: true,
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    stats: 'errors-only',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'bower_components/webcomponentsjs/*.js'),
      to: 'bower_components/webcomponentsjs/[name].[ext]',
    }]),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
