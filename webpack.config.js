const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.scss$/, loader: 'style!css!postcss!sass?sourceMap'}
    ]
  },
  postcss: function () {
    return [autoprefixer];
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.optimize.DedupePlugin()
  ]
}
