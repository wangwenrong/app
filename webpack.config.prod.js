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
        path:path.resolve(__dirname,'./build/prod'),
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    plugins: [
        // js 压缩
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,    // 不美化输出
            compress: {
                warnings: false, // 不保留警告
                drop_debugger: true, // 不保留调试语句
                drop_console: true // 不保留控制台输出信息
            },
            mangle: {           // 跳过这些，不改变命名
                except: ['$super', '$', 'exports', 'require']
            },
            space_colon: false,
            comments: false     // 不保留注释
        })
    ],
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
    },
    // 源文件 调试代码
    //devtool: "source-map"
}

