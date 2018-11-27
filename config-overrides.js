/*
 * @Author: lifan
 * @Date: 2018-11-05 21:40:19
 * @Last Modified by: lifan
 * @Last Modified time: 2018-11-22 21:11:38
 */
const {
  override, fixBabelImports, useEslintRc, addWebpackAlias,
  addDecoratorsLegacy, addBundleVisualizer, addLessLoader,
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
  addLessLoader({
    modifyVars: {
      '@primary-color': '#FA541c',
    },
    javascriptEnabled: true,
  }),
  useEslintRc(),
  addStylint(),
  addDecoratorsLegacy(),
  process.env.NODE_ENV === 'production' && addBundleVisualizer(),
  fixBabelImports('antd', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addWebpackAlias({
    '@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/components/icons.js'),
    '@': path.resolve(__dirname, './src'),
  }),
);
