var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    app: "./javascripts/App.js"
  },
  output: {
    path: "../dist",
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'BYCC-649',
      template: "templates/layouts/index.html",
      filename: 'index.html'
    })
  ],
  module: {
    loaders: [
      // JS(X)
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "stage-0", "react"]
        }
      },
      // SASS
      {
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"],
        exclude: /node_modules/,
        include: [
          path.join(__dirname, "stylesheets")
        ]
      }
    ]
  },
  sassLoader: {
    includePath: [path.resolve(__dirname, "./stylesheets")]
  }
};