const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const env = process.env.NODE_ENV;
const config = {
  devtool: 'inline-source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve('.'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true
    }),
  ]
};

if (env === 'production') {
  config.devtool = undefined;
  config.output.path = path.resolve('./dist');
  config.plugins = [].concat(config.plugins, [
    new webpack.optimize.UglifyJsPlugin()
  ]);
}

module.exports = config;
