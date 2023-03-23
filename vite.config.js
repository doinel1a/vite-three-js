import path from 'node:path';

import { partytownVite } from '@builder.io/partytown/utils';
import legacy from '@vitejs/plugin-legacy';
import glsl from 'vite-plugin-glsl';

export default {
  plugins: [
    legacy(),
    glsl(),
    partytownVite({
      dest: path.join(__dirname, 'dist', '~partytown')
    })
  ]
};
