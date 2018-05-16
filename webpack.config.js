const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});

// module.exports = {
//   entry: './UI/assets/js/app.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js',
//     publicPath: '/dist'
//   },
//   module: {
//     rules: [{
//         test: /\.js?$/,
//         exclude: /node_modules/,
//         use: [{
//           loader: 'babel-loader',

//           options: {
//             presets: ['env'],
//           }

//         }]
//       },
//       {
//         test: /\.scss$/,
//         use: extractPlugin.extract({
//           use: ['css-loader', 'sass-loader']
//         })
//       }
//     ]
//   },
//   plugins: [
//     extractPlugin
//   ]
// }

module.exports = {
  entry: {

    app: [
      'babel-polyfill',
      './UI/assets/js/app.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, "./UI/dist"),
    filename: "bundle.js",
    publicPath: '/UI/dist'
  },
  module: {
    rules: [{
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["env", "stage-0"]
        }
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }

    ]
  },
  plugins: [
    extractPlugin
  ]
}