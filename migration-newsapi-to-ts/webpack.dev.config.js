const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    watchFiles: ["src/*"],
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    compress: true,
    hot: true,
  },
};
