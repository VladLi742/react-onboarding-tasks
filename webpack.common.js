const dotenv = require("dotenv").config({ path: __dirname + "/.env" });
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/"),
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
      "@components": path.resolve(__dirname, "src/components/"),
      "@redux": path.resolve(__dirname, "src/redux/"),
      "@ts": path.resolve(__dirname, "src/ts/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/favicon.png",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.parsed),
    }),
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      name: false,
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
};
