const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = ExtractTextPlugin({
  filename: 'main.css'
});

module.exports = {
  entry: './UI/assets/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }

        }]
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'scss-loader']
        })
      }
    ]
  }
}