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
      {test: /\.html$/, loader: 'raw'}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.optimize.DedupePlugin()
  ]
}
