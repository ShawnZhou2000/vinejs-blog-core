import VitePages from "vite-plugin-pages";
import { resolve } from "path";
import fs from "fs-extra";
import matter from "gray-matter";
import { defineConfig } from "vite";
import ViteVue from "@vitejs/plugin-vue";
import ViteMarkdown from "vite-plugin-md";
import Components from 'unplugin-vue-components/vite';

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
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import 'src/assets/scss/global.scss';`,
      }
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
        return route;
      },
    }),
    ViteMarkdown(),
    Components({
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
  ],
});
