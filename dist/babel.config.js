"use strict";

module.exports = function (api) {
  var presets = ["@babel/preset-react"];
  var plugins = ["@babel/plugin-proposal-class-properties"];
  api.cache(true);
  return {
    presets: presets,
    plugins: plugins
  };
};
//# sourceMappingURL=babel.config.js.map