/** @type {import('eslint/lib/shared/types').ConfigData} */

module.exports = {
  root: true,
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: [".eslintrc.js", "*.config.js"],
  settings: [
    {
      files: ["./apps/api/**"],
      parser: "@typescript-eslint/parser",
      env: { node: true, jest: true },
      parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
      },
      rules: {
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "prettier/prettier": ["error", { printWidth: 120 }],
      },
    },
    {
      files: ["./apps/portfolio/**"],
      env: { browser: true, es6: true },
      extends: ["next"],
      overrides: [
        {
          files: ["**/*.tsx"],
          rules: {
            "no-restricted-imports": [
              "error",
              {
                patterns: ["../"],
              },
            ],
          },
        },
      ],
    },
  ],
};
