// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: [
//       // ['@babel/preset-env', { targets: { node: 'current' } }],
//       ["@babel/preset-env", "@babel/preset-typescript"],
//       "@babel/preset-typescript",
//       "@babel/preset-react",
//     ],
//     plugins: ["@babel/plugin-transform-runtime"]
//   };
// };

// {
//   "presets": ["@babel/preset-env", "@babel/preset-typescript"],
//   "plugins": ["@babel/plugin-transform-runtime"]
// }

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      "@babel/preset-typescript",
      "@babel/preset-react",
    ],
    plugins: []
  };
};
