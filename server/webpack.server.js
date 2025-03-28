const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  mode: "development",
  externals: [nodeExternals()],
  entry: "./index.js",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", 
          "css-loader",  
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
