const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const ENV = process.env.NODE_ENV || 'development';
const DEV = process.env.NODE_ENV !== 'production';

const paths = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
};

const config = {
  mode: ENV,
  context: paths.src,
  entry: {
    app: ['entry.jsx'],
  },
  output: {
    path: paths.dist,
    publicPath: '',
    filename: 'js/[name]-[hash].bundle.js',
    chunkFilename: 'js/chunks/[id]-[name].[chunkhash].chunk.js',
    hashDigest: 'base64',
  },
  devtool: DEV && 'cheap-module-source-map',
  cache: DEV,
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      paths.src,
      path.resolve(__dirname, 'node_modules'),
    ],
    unsafeCache: DEV,
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader?cacheDirectory' },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  devServer: {
    contentBase: paths.dist,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: 8080,
    host: 'localhost',
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new HtmlWebpackPlugin({
      template: path.resolve(paths.src, 'index.html'),
      filename: 'index.html',
      showErrors: true,
      hash: false,
    }),
  ],
};

if (DEV) {
  config.plugins.unshift(
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  );

  config.entry.app.unshift('webpack-dev-server/client?/');
}

module.exports = config;
