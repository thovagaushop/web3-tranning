module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'standard',
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
  },
  rules: {
    semi: [2, 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'space-before-function-paren': [0, 'always'],
    'no-global-assign': [0, 'always'],
  },
};
