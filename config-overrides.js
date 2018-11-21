/*
 * @Author: lifan
 * @Date: 2018-11-05 21:40:19
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-21 22:15:11
 */
const {
  override, fixBabelImports, useEslintRc, addWebpackAlias,
  addDecoratorsLegacy, addBundleVisualizer,
} = require('customize-cra');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

const addStylint = () => (config) => {
  config.plugins.push(
    new StyleLintPlugin({
      context: 'src',
      configFile: path.resolve(__dirname, './.stylelintrc.json'),
      files: '**/*.scss',
      failOnError: false,
      quiet: true,
      syntax: 'scss',
      fix: false,
    }),
  );

  return config;
};

module.exports = override(
  useEslintRc(),
  addStylint(),
  addDecoratorsLegacy(),
  process.env.NODE_ENV === 'production' && addBundleVisualizer(),
  fixBabelImports('antd', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/components/icons.js'),
    '@': path.resolve(__dirname, './src'),
  }),
);
