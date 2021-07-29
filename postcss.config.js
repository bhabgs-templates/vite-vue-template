module.exports = {
  plugins: [
    // https://github.com/cuth/postcss-pxtorem
    require('postcss-pxtorem')({
      rootValue: 12,
      unitPrecision: 5,
      propList: ['*', '!border*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      // exclude: /node_modules/i,
    }),
    require('autoprefixer'),
  ],
};
