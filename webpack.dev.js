const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const PrettierPlugin = require("prettier-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    hot: true,
    open: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new PrettierPlugin()],
});
