const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackRootPlugin = require('html-webpack-root-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    mode: 'development',
    entry: {
      index: [
          "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
          "./src/client/index.js"
      ]
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: '[name].bundle.js',
        publicPath: '/',
        hotUpdateChunkFilename: '.hot/[id].[hash].hot-update.js',
        hotUpdateMainFilename: '.hot/[hash].hot-update.json'
    },

    // loaders for loading different file extension

    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
          },
          {
            test:/\.css$/,
            use:['style-loader','css-loader']
          },
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              'image-webpack-loader'
            ],
          },
          {
            test: /\.html$/,
            exclude: [/node_modules/],
            use: {
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]'
                },
            },
          },
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
        ]
    },

    // plugins
    plugins: [
      new CleanWebpackPlugin(['public']),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        inject: true,
        title: 'Demo App',
      }),
      new HtmlWebpackRootPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new UglifyJsPlugin()
    ],
}
