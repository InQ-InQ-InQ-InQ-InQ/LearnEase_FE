module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.js'] }],
<<<<<<< HEAD
    'react/function-component-definition': 'off',
=======
    'react/function-component-definition': "off",
>>>>>>> cc3b3bcadbf978737828ceca56d08abf589f6481
  },
};
