module.exports = {
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       additionalData: `@import "@/assets/scss/default.scss";`,
  //     },
  //   },
  // },
  publicPath:
    process.env.NODE_ENV === "production" ? "/frontend-challenge/" : "/",
};
