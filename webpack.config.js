var webpack = require("webpack");

var srcJsDir = "./src/assets/js";

var WebpackConfig = {
  entry: {
    frontend: srcJsDir + "/frontend",
    admin: srcJsDir + "/admin",
    settings: srcJsDir + "/settings",
  },
  output: {
    path: __dirname + "/dist/assets/js",
    filename: "[name].min.js"
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.js$/,
      minimize: true
    })
  ]
}

module.exports = WebpackConfig;
