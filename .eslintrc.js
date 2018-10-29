module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:compat/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    'import/no-unresolved': [2, { ignore: ['^@/'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
  },
  settings: {
    polyfills: ['fetch', 'promises', 'url'],
  },
};
