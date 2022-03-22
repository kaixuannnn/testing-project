module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@Navigation": "./app/navigation",
            "@Components": "./app/components",
            "@Screens": "./app/screens",
            "@Stores": "./app/stores",
            "@Utility": "./app/utility",
            "@Assets": "./assets"
          },
          extensions: [".js"]
        }
      ]
    ]
  };
};
