module.exports = {
  env: {
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
    sourceType: 'module',
  },
  rules: {
    semi: [2, 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'space-before-function-paren': [0, 'always'],
  },
};
