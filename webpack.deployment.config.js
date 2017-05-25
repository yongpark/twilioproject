const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/components/index.jsx'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'app'),
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      },
    },
    {
      test: /\.css$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader", query: { modules: true } }
      ]
    },
    {
      test: /\.scss$/,
      use: [{
          loader: "style-loader" // creates style nodes from JS strings
      }, {
          loader: "css-loader", // translates CSS into CommonJS
          query: {
            modules: true
          }
      }, {
          loader: "sass-loader" // compiles Sass to CSS
      }]
    }
  ],
  },
};
