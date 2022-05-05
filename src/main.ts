import App from './App.vue';
import routes from 'pages-generated';
import { ViteSSG } from 'vite-ssg';
import { createRouter, createWebHistory } from "vue-router";

export const createApp = ViteSSG(
  App, 
  { routes },
  ({ app, router, initialState, isClient, onSSRAppRendered }) => {
    console.log(onSSRAppRendered(() => {
      // console.log('hello?');
    }));
    // app.use(
    //   createRouter({
    //     history: createWebHistory(),
    //     routes,
    //   })
    // );
    // console.log(routes);
  }
);