import App from './App.vue';
import routes from 'pages-generated';
import { ViteSSG } from 'vite-ssg';
import { createPinia } from 'pinia';
import { useRouteStore } from './store/useRouteStore';

export const createApp = ViteSSG(
  App, 
  { routes },
  ({ app, router, initialState }) => {
    const pinia = createPinia();
    app.use(pinia);
    pinia.state.value = initialState.pinia || {};
  }
);