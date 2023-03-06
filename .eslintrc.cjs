module.exports = {
  extends: ['eslint:recommended', 'react-app', 'plugin:jsx-a11y/recommended', 'prettier'],
  plugins: ['simple-import-sort', 'jsx-a11y'],
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {
    // simple-import-sort
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    // react
    'react/jsx-sort-props': [2],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // @typescript-eslint
    '@typescript-eslint/no-explicit-any': 'off'
  }
}
