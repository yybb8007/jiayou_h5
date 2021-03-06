/**
 * Created by lzg on 17/3/6.
 */

var webpack = require('webpack');
var config = require('./webpack.base.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');

//config.devtool = '#source-map';                             // source-map
config.output.publicPath = 'dist/';                        // 资源路径
config.output.filename = '[name].js?v=[chunkhash:8]';                       // 入口js命名
config.output.chunkFilename = '[name].chunk.js?v=[chunkhash:8]';            // 路由js命名

config.vue = {
    loaders: {
        css: ExtractTextPlugin.extract(
            "style-loader",
            "css-loader?sourceMap!px2rem?remUnit=75&remPrecision=8",
            {
                publicPath: "/dist/"
            }
        ),
        less: ExtractTextPlugin.extract(
            'vue-style-loader',
            'css-loader!px2rem?remUnit=75&remPrecision=8!less-loader'
        ),
        sass: ExtractTextPlugin.extract(
            'vue-style-loader',
            'css-loader!px2rem?remUnit=75&remPrecision=8!sass-loader'
        )
    }
};

config.plugins = (config.plugins || []).concat([
    new ExtractTextPlugin("[name].css",{ allChunks : true,resolve : ['modules'] }),             // 提取CSS
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),                           // 提取第三方库
    new HtmlWebpackPlugin({                                                                     // 构建html文件
        filename: '../index.html',
        template: './src/template/index.ejs',
        inject: false
    })
]);

// 写入环境变量
fs.open('./config/env.js', 'w', function (err, fd) {
    var buf = 'export default "development";';
    fs.write(fd,buf,0,buf.length,0,function(err,written,buffer){});
});

module.exports = config;