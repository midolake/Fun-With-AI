const path = require('path');

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
        test: /\.m?js$/,
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

  mode: 'development' //to enable defaults for each environment.
}