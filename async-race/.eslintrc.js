module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  ignorePatterns: ["webpack.config.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: ["import", "@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-non-null-assertion": "error",
    "max-lines-per-function": ["error", 40],
    "no-plusplus": "off",
    "no-console": "warn",
    "import/prefer-default-export": ["off", "warn", "error"],
    quotes: ["error", "double"],
    "no-console": ["allow"],
    "no-use-before-define": [
      "error",
      {
        functions: false
      }
    ]
  }
};
