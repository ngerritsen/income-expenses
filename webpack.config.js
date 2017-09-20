const webpack = require('webpack')
const path = require('path');

const env = process.env.NODE_ENV
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
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
}

if (env === 'production') {
  config.devtool = undefined
  config.output.path = path.resolve('./dist')
  config.plugins = [].concat(config.plugins, [
    new webpack.optimize.UglifyJsPlugin()
  ])
}

module.exports = config
