const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './ui/index.html',
  filename: 'index.html',
  inject: 'body',
});
const outputDirectory = 'dist';
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './ui/app.js',
  output: {
    path: path.resolve(__dirname, outputDirectory),
    filename: 'app.bundle.[hash].js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, outputDirectory),
    port: 3000,
    open: true,
    proxy: {
      '/': {target: 'http://localhost:4000'},
    },
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
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
        test: /\.(sa|le|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader?sourceMap',
          'less-loader?sourceMap',
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    HtmlWebpackPluginConfig,
    new MiniCssExtractPlugin({
      filename: devMode ? "[nam].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
    })
  ],
};
