const path = require('path');
const webpack = require('webpack');
require('dotenv').config({ path: './.env' });
//const dotenv = require('dotenv').config({ path: __dirname + '/.env' });

const SRC_DIR = path.join(__dirname,'client');
const OUT_DIR = path.join(__dirname, 'public');

module.exports= {
  entry: path.join(SRC_DIR, 'index.js'),

  output: {
    path: OUT_DIR,
    filename: 'app.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      }
    ]
  },

  mode: 'development', //to enable defaults for each environment.

  plugins: [
    new webpack.ProvidePlugin({
           process: 'process/browser',
    }),

    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
}