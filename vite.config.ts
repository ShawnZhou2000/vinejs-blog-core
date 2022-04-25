import VitePages from "vite-plugin-pages";
import { resolve } from "path";
import fs from "fs-extra";
import matter from "gray-matter";
import { defineConfig } from "vite";
import ViteVue from "@vitejs/plugin-vue";
import ViteMarkdown from "vite-plugin-md";
import ViteComponents from "vite-plugin-components";
import { useRouteStore } from './src/store/useRouteStore';

type routeTableObject = {
  name: string,
  path: string,
  component: string,
  customBlock: any,
  props: boolean,
  meta: object
}

function setRouteTable(route: routeTableObject):void {
  const store = useRouteStore();
  store.setRouteTable(route);
}

// plugins settings
export default defineConfig({
  build: {
    outDir: "../dist",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  plugins: [
    ViteVue({
      include: [/\.vue$/, /\.md$/],
    }),
    VitePages({
      extensions: ["vue", "md"],
      pagesDir: "posts",
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1));
        if (path.includes(".md")) {
          const md = fs.readFileSync(path, "utf-8");
          const { data } = matter(md);
          route.meta = Object.assign(route.meta || {}, { frontmatter: data });
        }
        setRouteTable(route);
        return route;
      },
    }),
    ViteMarkdown(),
    ViteComponents({
      extensions: ["vue", "md"],
      customLoaderMatcher: (path) => path.endsWith(".md"),
    }),
  ],
});
