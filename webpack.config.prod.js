const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const terserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  mode: "production",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            /*Allow using react without import it in each file*/
            presets: [["@babel/preset-react", { runtime: "automatic" }]],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [miniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg)/i,
        type: "asset/resource",
        generator: { filename: "./assets/images/[hash][ext][query]" },
      },
      {
        test: /\.(woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash][ext][query]",
        },
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [new cssMinimizerWebpackPlugin(), new terserWebpackPlugin()],
  },

  plugins: [
    new htmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "index.html",
      favicon: "./public/favicon.png",
    }),
    new miniCssExtractPlugin({
      filename: "assets/styles/[name].[contenthash].css",
    }),
  ],
};
