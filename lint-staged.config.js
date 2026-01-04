import path from 'node:path';

const eslint = (filenames) =>
  `eslint --fix ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

const prettier = (filenames) =>
  `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')} --cache`;

export default {
  '*.{js,jsx,ts,tsx}': [eslint],
  '*.{html,css,scss,js,jsx,cjs,mjs,ts,tsx,mdx}': [prettier]
};
