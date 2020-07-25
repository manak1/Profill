module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "plugin:vue-scoped-css/recommended",
  ],
  plugins: ["vue"],
  rules: {
    "no-constant-condition": ["error", { checkLoops: false }],
    "vue/html-self-closing": "off",
    semi: [2, "never"],
    "vue/no-v-html": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "vue/max-attributes-per-line": "off",
    "vue-singleline-html-element-content-newline": "off",
    "prettier/prettier": ["error", { semi: false }],
  },
}
