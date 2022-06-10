module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
          alias: {
            "~/": "./",
            "~/components": "./src/components",
            "~/constants": "./src/constants",
            "~/screens": "./src/screens",
            "~/modals": "./src/modals",
            "~/navigators": "./src/navigators",
            "~/styles": "./src/styles",
            "~/hooks": "./src/hooks",
            "~/utils": "./src/utils",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
