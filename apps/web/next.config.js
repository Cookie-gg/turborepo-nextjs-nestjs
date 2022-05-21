const withTM = require("next-transpile-modules")(["ui", "client"]);
const path = require("path");

module.exports = withTM({
  reactStrictMode: true,
  // webpack: (config, options) => {
  //   if (options.isServer) {
  //     config.externals = ["client", ...config.externals];
  //   }
  //   config.resolve.alias["client"] = path.resolve(__dirname, "client");

  //   return config;
  // },
});
