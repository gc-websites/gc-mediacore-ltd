// import globals from 'globals';
// import tseslint from '@typescript-eslint/eslint-plugin';
// import tseslintParser from '@typescript-eslint/parser';
// import pluginReact from 'eslint-plugin-react';
// import prettier from 'eslint-config-prettier';

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {
//     files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
//     languageOptions: {
//       parser: tseslintParser,
//       globals: globals.browser,
//     },
//     plugins: {
//       '@typescript-eslint': tseslint,
//       react: pluginReact,
//     },
//     settings: {
//       react: {
//         version: 'detect',
//       },
//     },
//     rules: {
//       ...tseslint.configs.recommended.rules,
//       ...pluginReact.configs.recommended.rules,
//       'react/react-in-jsx-scope': 'off',
//     },
//   },
//   prettier,
// ];

import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettier,
];
