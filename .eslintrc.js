/** @type {import('eslint/lib/shared/types').ConfigData} */

module.exports = {
  root: true,
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended'],
  ignorePatterns: ['.eslintrc.js', '*.config.js'],
};
