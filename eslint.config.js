import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

export default [
  js.configs.recommended,
  sonarjs.configs.recommended,
  unicorn.configs.recommended,
  prettier,
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
    plugins: {
      import: importPlugin,
      'simple-import-sort': simpleImportSort
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js'],
          moduleDirectory: ['node_modules', 'src/']
        }
      }
    },
    rules: {
      // simple-import-sort
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',

      // unicorn adjustments
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off'
    }
  },
  {
    ignores: ['dist/**', 'node_modules/**', '**/*.html']
  }
];
