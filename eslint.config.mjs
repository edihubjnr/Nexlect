import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['**/node_modules/**', '**/dist/**', 'coverage/**'],
  },

  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [eslint.configs.recommended],
  },

  ...tseslint.configs.recommended,

  {
    files: ['apps/client/**/*.{ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
  },

  {
    files: ['apps/server/**/*.ts', 'packages/shared/**/*.ts'],
    languageOptions: {
      globals: globals.node,
    },
  },

  eslintConfigPrettier,
);
