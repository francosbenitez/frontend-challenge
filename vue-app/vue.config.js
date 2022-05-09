const path = require("path");
const src = "./src";

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/default.scss";`,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, src),
      },
    },
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/frontend-challenge/" : "/",
};
