const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: './client/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.[hash].js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 4000,
    open: true,
    watchContentBase: true,
    historyApiFallback: true,
    // proxy: {
    //   '/api/v1': {
    //     target: 'http://localhost:8888',
    //     secure: false,
    //   },
    // },
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
      {
        test: /\.(ttf|eot|woff|woff2|mov)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        loader: 'url-loader',
        options: {limit: 25000}, // limit file size to 25KB
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader', use: {
            loader: 'css-loader?sourceMap',
          },
        }),
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader?sourceMap',
          }, {
            loader: 'less-loader?sourceMap',
          }],
        }),
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('app.bundle.[contenthash].css'),
  ],
};
