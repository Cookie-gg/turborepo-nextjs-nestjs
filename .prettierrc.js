/** @type {import('prettier').Config} */

const config = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  endOfLine: 'auto',
  plugins: [require('@cookie-gg/prettier-plugin-property-order')],
};

module.exports = config;
