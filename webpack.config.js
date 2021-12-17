const path = require("path");

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, "./javascript/index.js"),
  output: {
    filename: "index.js",
    path: "/"
  },
  devtool: "sourcemap"
};
