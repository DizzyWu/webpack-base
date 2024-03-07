module.exports = {
  plugins: [
    // 浏览器适配
    [
      "postcss-preset-env",
      {
        browsers: "last 2 versions",
      },
    ],
  ],
};
