const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  resolve: {
    alias: {
      pages: path.resolve(__dirname, "src/pages"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /.(js|jsx|ts|tsx)$/,
        // exclude: /(node_modules|bower_components)/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
      //  test: /.(png|jpe?g|gif|svg|webp)$/i,
        test: /.(png|jpe?g|gif|svg|webp)$/i,
        use: ['file-loader']
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  },
};
