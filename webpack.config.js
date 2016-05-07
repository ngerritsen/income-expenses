var webpack = require('webpack')

var env = process.env.NODE_ENV
var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/main.js',
  output: {
    path: '.',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
}

if (env === 'production') {
  config.devtool = undefined
  config.output.path = './dist'
  config.plugins = [].concat(config.plugins, [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        unsafe: true,
        screw_ie8: true,
        warnings: false
      }
    })
  ])
}

module.exports = config
