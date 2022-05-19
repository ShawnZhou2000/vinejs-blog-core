import App from './App.vue';
import routes from 'pages-generated';
import { ViteSSG } from 'vite-ssg';
import "fs";

import {
  getCoreConfig
} from './api/blogSettings'

const getCoreConfigSync = async () => {
  let res = await getCoreConfig();
  return res;
}

export const createApp = ViteSSG(
  App, 
  { routes },
  async ({ app, router, routes }) => {
    let res = await getCoreConfigSync();
    for (let i = 0; i < routes.length; i++) {
      if (!routes[i].meta) {
        routes[i].meta = {};
      }
      routes[i].meta.conf = res;
    }
  }
);