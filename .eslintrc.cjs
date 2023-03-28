module.exports = {
  env: {
    browser: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["simple-import-sort"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "react/no-unknown-property": ["error", { ignore: ["class"] }],
    "react/react-in-jsx-scope": 0,
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "semi": "off",
    "@typescript-eslint/semi": ["error"],
    "eqeqeq": 2,
    "quotes": ["error", "double"],
    "object-curly-spacing": ["error", "always"],
    "import/no-unresolved": 0,
    "indent": ["error", 2],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
    "eol-last": ["error", "always"],
  },
  ignorePatterns: [
    "node_modules/", 
    "dist/",
    "*.d.ts"
  ]
};
