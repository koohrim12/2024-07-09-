const path = require("path");
let name = "app";

module.exports = {
  entry: `./src/${name}.tsx`,
  output: {
    filename: `${name}.bundle.js`,
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // resolve를 module 바깥으로 이동
    extensions: [".ts", ".js", ".tsx", ".jsx", ".css"],
  },
};
