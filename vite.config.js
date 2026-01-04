import legacy from '@vitejs/plugin-legacy';
import glsl from 'vite-plugin-glsl';

import _config from './_config';

const HOST = _config.server.host;
const PORT = _config.server.port;

export default {
  server: {
    host: HOST,
    port: PORT
  },
  plugins: [legacy(), glsl()]
};
