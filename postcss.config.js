/* eslint-disable global-require */
module.exports = {
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('postcss-pxtorem')({
      rootValue: 14,
      unitPrecision: 5,
      propList: ['*', '!border*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    }),
    require('autoprefixer'),
  ],
};
