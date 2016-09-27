var path = require('path')
var webpack = require('webpack')

var entry = './main'

var babelSettings = { presets: ['react', 'es2015'] }

module.exports = {
  entry: entry,
  output: {
    path: path.join(__dirname, 'public', 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel-loader?' + JSON.stringify(babelSettings)],
        exclude: /node_modules|public/,
        include: __dirname
      }
    ]
  }
}
