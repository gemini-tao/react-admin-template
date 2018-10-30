/* eslint-disable */
// const {  addBundleVisualizer } = require('customize-cra');
const { injectBabelPlugin } = require('react-app-rewired');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const rewireAliases = require('react-app-rewire-aliases');
const rewireEslint = require('react-app-rewire-eslint');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

function overrideEslintOptions(options) {
  // do stuff with the eslint options...
  return options;
}

module.exports = function override(config, env) {
   // 设置eslint规则
   config = rewireEslint(config, env, overrideEslintOptions);

  // 按需加载antd组件
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], // change importing css to less
    config,
  );

  // 启用装饰器
  config = injectBabelPlugin(
    ["@babel/plugin-proposal-decorators", { "legacy": true }], // babel 7.0采用这个插件
    config,
  );

  // FIXME:
  // 给@ant-design/icons设置别名，实现svg字体手动按需加载，等待官方提供按需加载方案
  config = rewireAliases.aliasesOptions({
    "@ant-design/icons/lib/dist$": path.resolve(__dirname, "./src/icons.js"),
    "@":  path.resolve(__dirname, "./src")
  })(config, env);

  // 添加stylelint插件
  config.plugins.push(
    new StyleLintPlugin({
      context: "src",
      configFile: path.resolve(__dirname, './.stylelintrc.json'),
      files: '**/*.scss',
      failOnError: false,
      quiet: true,
      syntax: 'scss'
    })
  )

  // 生产模式分析bundle
  if (env === 'production') {
    config.plugins.push(
      new BundleAnalyzerPlugin()
    )
  }

  return config
};
