const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './js/entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: `${__dirname}/template/index.hbs`,
    }),
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['node6'],
        },
      },
      { test: /\.(handlebars|hbs)$/, loader: 'handlebars-loader',
        query: {
          partialDirs: [
            path.join(__dirname, 'template', 'partials'),
            path.join(__dirname, 'template'),
          ],
        },
      },
    ],
  },
};
