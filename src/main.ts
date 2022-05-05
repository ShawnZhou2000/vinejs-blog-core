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
  ({ app, router }) => {
    getCoreConfig()
    .then(res => {
      router.beforeEach((to, from, next) => {
        if (!import.meta.env.SSR) {
          window.localStorage.setItem('data', JSON.stringify(res));
        }
        next();
      })
    })
  }
);