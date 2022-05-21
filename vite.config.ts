import VitePages from "vite-plugin-pages";
import { resolve } from "path";
import type { UserConfig } from 'vite';
import {} from 'vite-ssg';
import fs from "fs-extra";
import matter from "gray-matter";
import ViteVue from "@vitejs/plugin-vue";
import ViteMarkdown from "vite-plugin-md";
import Components from 'unplugin-vue-components/vite';

// DEBUG mode
process.env.VINE_CORE = "DEBUG" 

// process.env.VINE_CORE = "PRODUCTION" 

// plugins settings
const config: UserConfig = {
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
      dirs: process.env.VINE_CORE === "PRODUCTION" ? "posts" : "cache_posts",
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
};

export default config;
