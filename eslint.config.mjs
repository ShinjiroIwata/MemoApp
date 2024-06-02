// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
// import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

// export default [
//   { languageOptions: { globals: globals.node } },
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   pluginReactConfig,
// ];

import globals from "globals";
import pluginJs from "@eslint/js";
import { configs as tsEslintConfigs } from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import pluginReactHooksConfig from "eslint-plugin-react-hooks";

export default [
  {
    languageOptions: {
      globals: globals.node,
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
  pluginJs.configs.recommended,
  tsEslintConfigs.recommended,
  pluginReactConfig,
  pluginReactHooksConfig.configs.recommended,
];
