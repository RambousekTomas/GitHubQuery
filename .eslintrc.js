module.exports = {
  root: true,
  extends: [
    "universe/native",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "@typescript-eslint",
    "react-native",
    "react-hooks",
    "prettier",
  ],
  rules: {
    quotes: ["error", "single", { avoidEscape: true }],
    semi: ["error", "never"],
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
    "linebreak-style": ["error", "unix"],
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": "error",
    "react-native/no-unused-styles": "error",
    "react-native/split-platform-components": "error",
    "react-native/no-inline-styles": "error",
    "react-native/no-color-literals": "error",
    "react-native/no-raw-text": "error",
    "react-native/no-single-element-style-arrays": "error",
    "no-restricted-imports": ["error", {
      "paths": [{
        "name": "react-native",
        "importNames": ["Text"],
        "message": "Please import the custom Text component instead of the one from React Native."
      }]
    }],
  },
};
