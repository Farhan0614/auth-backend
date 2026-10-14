// eslint.config.js
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: { ...globals.node },
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": [
        "error",
        { argsIgnorePattern: "req|res|next|val|err" },
      ],
    },
  },
];
