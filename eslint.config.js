import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier/flat';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

export default [
  js.configs.recommended,
  sonarjs.configs.recommended,
  unicorn.configs.recommended,
  prettierConfig,
  prettierPlugin,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      }
    },
    rules: {
      // unicorn adjustments
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off'
    }
  },
  {
    ignores: ['dist/**', 'node_modules/**', '**/*.html']
  }
];
