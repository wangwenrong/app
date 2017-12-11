const webpack = require('webpack');
const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:{
        index:[
            './src/app.jsx'
            // 我们 app 的入口文件
        ]
    },
    output:{
        path:path.resolve(__dirname,'./build/dev'),
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    module: {
        // loaders: [] // 2.x 兼容
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, './src'),
                loader: 'babel-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: path.resolve(__dirname, './src/assets/svg'),
            }, 
            {
                test: /\.(png|jpg)$/,
                loader: "url-loader?limit=8192"
            },
            {
                test: /\.css$/,
                loader: "css-loader"
            }
        ]
    }
}

