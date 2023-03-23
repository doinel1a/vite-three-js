/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  options: {
    doNotFollow: {
      dependencyTypes: [
        'npm',
        'npm-dev',
        'npm-optional',
        'npm-peer',
        'npm-bundled',
        'npm-no-pkg'
      ]
    },

    includeOnly: '^src',
    exclude: ['^src/server', '^src/env', '^src/utils', '^src/types'],

    /* How to resolve external modules - use "yarn-pnp" if you're using yarn's Plug'n'Play.
       otherwise leave it out (or set to the default, which is 'node_modules')
    */
    externalModuleResolutionStrategy: 'yarn-pnp',

    progress: { type: 'performance-log' },

    reporterOptions: {
      archi: {
        collapsePattern:
          '^src/app/[^/]+|^src/pages/[^/]+|^src/features/.+|^src/ui-kit/[^/]+',

        theme: {
          modules: [
            {
              criteria: { collapsed: true },
              attributes: { shape: 'tab' }
            },
            {
              criteria: { source: '^src/app/[^/]+' },
              attributes: { fillcolor: '#ffbdbd' }
            },
            {
              criteria: { source: '^src/pages/[^/]+' },
              attributes: { fillcolor: '#ffd9a3' }
            },
            {
              criteria: { source: '^src/features/[^/]+' },
              attributes: { fillcolor: '#aedaff' }
            },
            {
              criteria: { source: '^src/ui-kit/[^/]+' },
              attributes: { fillcolor: '#efefef' }
            }
          ],
          graph: {
            splines: 'ortho',
            rankdir: 'TB',
            ranksep: '1'
          }
        }
      }
    }
  }
};
