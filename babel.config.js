module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],  // Enables legacy decorators
    ['@babel/plugin-proposal-class-properties', { loose: true }],  // Enables class properties
  ],
};
