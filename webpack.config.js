const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './js/entry.js',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  devServer: {
    hot: true,
  },
  devtool: 'eval',
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: `${__dirname}/template/index.hbs`,
    }),
    new ExtractTextPlugin('styles.css'),
  ],
  module: {
    loaders: [
      { test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css' },
      { test: /\.styl$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'stylus-loader?resolve url'],
      },
      { test: /\.(ttf|eot|svg|ttf|otf|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['node6'],
        },
      },
      { test: /\.(handlebars|hbs)$/, loader: 'handlebars-loader',
        query: {
          partialDirs: [
            path.join(__dirname, 'template', 'searchBar'),
            path.join(__dirname, 'template', 'body'),
            path.join(__dirname, 'template', 'footer'),
            path.join(__dirname, 'template', 'also'),
            path.join(__dirname, 'template'),
          ],
        },
      },
    ],
  },
};
