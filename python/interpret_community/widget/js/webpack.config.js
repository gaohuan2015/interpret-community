var path = require("path");

var config = {
    entry: './main.js',

    output: {
      path: path.resolve(__dirname, '..', 'static'),
      filename: 'index.js',
      libraryTarget: 'umd'
    },
    devtool: 'source-map',
    module: {
      rules: [
        { test: /\.css$/, use: ['style-loader', 'css-loader']},
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use:{
            loader: 'babel-loader'
          }
        },
        {
            test: /\.js?$/,
            exclude: /node_modules/,
            use:{
              loader: 'babel-loader'
            }
          }
      ]
    },

    optimization: {
      usedExports: true
    }
  }

  module.exports = [config];