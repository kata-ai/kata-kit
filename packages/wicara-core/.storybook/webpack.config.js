const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]]
        }
      }
    ]
  });

  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.mainFields = ['wicara:src', 'main'];
  return config;
};
