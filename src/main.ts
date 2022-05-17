import App from './App.vue';
import routes from 'pages-generated';
import { ViteSSG } from 'vite-ssg';
import "fs";

import {
  getCoreConfig
} from './api/blogSettings'

export const createApp = ViteSSG(
  App, 
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    getCoreConfig()
    .then(res => {
      initialState.data = res;
      for (let i = 0; i < routes.length; i++) {
        if (routes[i].meta) {
          routes[i].meta.conf = initialState.data;
        }
      }
    })
  }
);