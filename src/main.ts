import App from './App.vue';
import routes from 'pages-generated';
import { ViteSSG } from 'vite-ssg';

import {
  getCoreConfig
} from './api/blogSettings';

export const createApp = ViteSSG(
  App, 
  { routes },
  async (ctx) => {
    const { routes } = ctx;
    let res = await getCoreConfig();
    for (let i = 0; i < routes.length; i++) {
      if (!routes[i].meta) {
        routes[i].meta = {};
      }
      routes[i].meta.conf = res;
    }
  }
);