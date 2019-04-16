const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new webpack.NamedModulesPlugin(), // 在热加载时直接console中显示的是文件名，而不是文件名的id；疑问：为什么HMR不直接将这个写入进去，可以用配置的方式... 还要多写一个插件
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
})