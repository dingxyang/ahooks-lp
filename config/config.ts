import { menus } from './hooks';

export default {
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  title: 'react-hooks',
  mode: 'site',
  logo: '/logo.svg',
  dynamicImport: {},
  manifest: {},
  hash: true,
  resolve: {
    includes: ['docs', 'packages/hooks/src'],
  },
  navs: [
    {
      title: 'Hooks',
      path: '/hooks',
    },
  ],
  menus: {
    '/': [
      {
        title: 'Home',
        path: 'index',
      },
    ],
    '/hooks': menus,
  },
  alias: {
    'anya-hooks': '/packages/hooks/src',
  },
};
