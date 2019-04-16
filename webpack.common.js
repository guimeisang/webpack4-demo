 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 const ExtractTextPlugin = require("extract-text-webpack-plugin");
 const webpack = require('webpack');

 module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
      app: './src/index.js',
      another: './src/another-module.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
        })
      },{
        test: /\.less$/i,
        use: ExtractTextPlugin.extract([ 'css-loader', 'less-loader' ])
      },]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ExtractTextPlugin('app.css'),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    optimization:{
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: true
    }
 };