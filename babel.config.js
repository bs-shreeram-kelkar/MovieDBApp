module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],  // Enables legacy decorators
    ['@babel/plugin-proposal-class-properties', { loose: true }],  // Enables class properties
    ["@babel/plugin-transform-private-methods", { "loose": true }],
    // ['@babel/plugin-transform-flow-strip-types'],
  ],
};
