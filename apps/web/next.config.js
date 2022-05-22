const withTM = require('next-transpile-modules')(['ui', '@cookie-gg/client']);
const path = require('path');

module.exports = withTM({
  reactStrictMode: true,
});
