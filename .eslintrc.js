module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["htmlacademy/es6", "airbnb", "prettier", "plugin:node/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "no-process-exit": "off",
    "object-shorthand": "off",
    "class-methods-use-this": "off"
  },
  plugins: ["editorconfig", "prettier"]
};
