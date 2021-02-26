module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    "plugin:promise/recommended",
    "plugin:sonarjs/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "project": "tsconfig.json",
    "tsconfigRootDir": ".",
  },
  plugins: [
    '@typescript-eslint',
    "promise",
    "sonarjs"
  ],
  rules: {
  },
};
