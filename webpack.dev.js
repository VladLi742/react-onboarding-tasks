const path = require("path");
const webpack = require("webpack");
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: "inline-source-map",
    resolve: {
        extensions: [ '.tsx', '.ts', '.jsx', '.js' ],
        alias: { 'react-dom': '@hot-loader/react-dom' },
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        hot: true,
        open: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});