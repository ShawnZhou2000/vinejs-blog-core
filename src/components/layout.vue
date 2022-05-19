<template>
  <div class="blog-core__container">
    <div
      class="blog-core__mask"
      v-show="isSideBarActiveInMob"
      @click="handleMaskClose"
      :class="{ active: isSideBarActiveInMob }"
    ></div>
    <div class="blog-core__side" :class="{ active: isSideBarActiveInMob }">
      <sidebar-vue :sidebarConf="sidebarConf"></sidebar-vue>
    </div>
    <div class="blog-core__main" ref="main">
      <navbar-vue @sideBarChangeInMob="handleSideBarChangeInMob" :navConf="navConf"></navbar-vue>
      <template v-if="renderMode === 'index'">
        <banner-vue :bannerConf="bannerConf"></banner-vue>
        <bloglist-vue></bloglist-vue>
      </template>
      <template v-if="renderMode === 'article'">
        <div class="blog-core__article-box">
          <div class="blog-core__frontmatter">
            <h1 class="blog-core__frontmatter-title">
              {{ frontmatter.title }}
            </h1>
            <div class="blog-core__frontmatter-meta">
              <span class="blog-core__frontmatter-time">
                {{ "发布日期：" + frontmatter.time }}
              </span>
              <span class="blog-core__frontmatter-categories">
                {{ "收录于：" + frontmatter.categories }}
              </span>
              <p
                class="blog-core__frontmatter-text-abstract"
                v-html="frontmatter.abstract"
              ></p>
            </div>
            <img
              :src="frontmatter.cover"
              class="blog-core__frontmatter-cover"
            />
          </div>
          <div class="blog-core__article" id="mount"></div>
          <div class="blog-core__end">
            <hr />
          </div>
        </div>
      </template>
      <template v-if="renderMode === 'category'"> </template>
      <template v-if="renderMode === 'about'">
        <div class="blog-core__article-box">
          <div class="blog-core__frontmatter">
            <h1 class="blog-core__frontmatter-title">{{ aboutPage.title }}</h1>
            <div class="blog-core__frontmatter-meta">
              <span class="blog-core__frontmatter-time">
                {{ "发布日期：" + aboutPage.time }}
              </span>
            </div>
          </div>
          <div class="blog-core__about-logo"></div>
          <div class="blog-core__article" id="mount"></div>
          <div class="blog-core__end">
            <hr />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  toRef,
  Ref,
  ref,
  onMounted,
  reactive,
} from "vue";
import routes from "pages-generated";
import dayjs from "dayjs";
import bannerVue from "./banner.vue";
import sidebarVue from "./sidebar.vue";
import navbarVue from "./navbar.vue";
import bloglistVue from "./bloglist.vue";

type blogItem = {
  title: string;
  time: string;
  categories?: string;
  abstract?: string;
  cover?: string;
  path: string;
};

export default defineComponent({
  props: ["render"],
  components: {
    bannerVue,
    sidebarVue,
    navbarVue,
    bloglistVue,
  },
  setup(props, ctx) {
    const conf: any = routes[0].meta.conf;
    const sidebarConf = reactive({
      avatar_image: conf.settings.avatar_image,
      blog_name: conf.settings.blog_name,
      blog_description: conf.settings.blog_description,
      icon_link: conf.settings.icon_link,
      owner: conf.settings.owner,
      site_start_time: conf.settings.site_start_time,
      beian: conf.settings.beian,
      theme: conf.settings.theme,
    });
    const bannerConf = reactive({
      banner_pic: conf.settings.banner_pic,
      banner_motto: conf.settings.banner_motto,
    });
    const navConf = reactive(conf.navigator);

    const renderMode: Ref<string> = toRef(props, "render");
    
    let isSideBarActiveInMob: Ref<boolean> = ref(false);
    const matchReg = /articles\//;
    let blogPage: blogItem = {
      title: '',
      time: '',
      categories: '',
      abstract: '',
      cover: '',
      path: '',
    };
    let aboutPage: blogItem = {
      title: '',
      time: '',
      path: '',
    };

    if (renderMode.value === "about") {
      aboutPage = routes
        .filter((item) => {
          if (typeof window !== "undefined") {
            return (
              /about/.test(item.path) && window.location.pathname === item.path
            );
          } else {
            return /about/.test(item.path);
          }
        })
        .map((item: any) => {
          return {
            title: item?.meta?.frontmatter.title,
            time: dayjs(item?.meta?.frontmatter.time).format("YYYY-MM-DD"),
            path: item?.path,
          };
        })[0];
      if (typeof document !== "undefined") {
        document.title = `${aboutPage.title} | ${document.title}`;
      }
      onMounted(() => {
        let dom: any = document.getElementById("mount");
        let article = document.getElementsByTagName("article")[0];
        dom.appendChild(article);
      });
    }

    if (renderMode.value === "article") {
      blogPage = routes
        .filter((item) => {
          if (typeof window !== "undefined") {
            return (
              matchReg.test(item.path) && window.location.pathname === item.path
            );
          } else {
            return matchReg.test(item.path);
          }
        })
        .map((item: any) => {
          return {
            title: item?.meta?.frontmatter.title,
            time: dayjs(item?.meta?.frontmatter.time).format("YYYY-MM-DD"),
            categories: item?.meta?.frontmatter.categories,
            abstract: item?.meta?.frontmatter.abstract,
            cover: item?.meta?.frontmatter.cover,
            path: item?.path,
          };
        })[0];

      if (typeof document !== "undefined") {
        document.title = `${blogPage.title} | ${document.title}`;
      }
      onMounted(() => {
        let dom: any = document.getElementById("mount");
        let article = document.getElementsByTagName("article")[0];
        dom.appendChild(article);
      });
    }

    if (renderMode.value === "category") {
    }

    const handleSideBarChangeInMob = (val: boolean): void => {
      isSideBarActiveInMob.value = val;
    };
    const handleMaskClose = () => {
      handleSideBarChangeInMob(!isSideBarActiveInMob);
    };

    return {
      isSideBarActiveInMob,
      handleSideBarChangeInMob,
      handleMaskClose,
      frontmatter: blogPage,
      renderMode,
      aboutPage,
      conf,
      sidebarConf,
      bannerConf,
      navConf
    };
  },
});
</script>

<style lang="scss">
article {
  color: #403e3e;
  width: $article-width;
  line-height: 1.6;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2.5rem 0 1.5rem;
  }
  dl,
  ol,
  ul {
    margin: 1.5rem 0;
    padding-left: 1rem;
  }
  blockquote,
  p,
  table {
    margin: 1.5rem 0;
  }

  blockquote {
    display: block;
    padding: 0 1.5rem;
    width: 100%;
    overflow: auto;
    border-left: 0.3rem solid #cce5ff;
    color: #5c6b72;
    & > :first-child {
      margin-top: 0;
    }
    & > :last-child {
      margin-bottom: 0;
    }
  }

  html {
    line-height: 1.15;
  }

  h1 {
    font-size: 30px;
  }
  h2 {
    font-size: 28px;
  }
  h3 {
    font-size: 26px;
  }
  h4 {
    font-size: 24px;
  }
  h5 {
    font-size: 21px;
  }
  h6 {
    font-size: 18px;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: auto;
  }
}
</style>

<style scoped lang="scss">

.blog-core__about-logo {
  background: url(/vine-js-normal.png);
  background-size: contain;
  width: 30rem;
  height: 30rem;
  opacity: .1;
  position: absolute;
  right: 35%;
  top: 30%;
  z-index: -1;
}
.blog-core__end {
  margin-bottom: 5rem;
}
.blog-core__frontmatter-text-abstract {
  border-top: 1px solid #efefef;
  padding-top: 2rem;
}

.blog-core__frontmatter-meta {
  position: relative;

  .blog-core__frontmatter-categories,
  .blog-core__frontmatter-time {
    padding-left: 20px;
    vertical-align: super;
    color: $text-gray;
  }

  .blog-core__frontmatter-categories {
    position: relative;
    margin-left: 20px;
  }
}

.blog-core__frontmatter-time::before {
  content: " ";
  width: 16px;
  height: 16px;
  background: url("../../public/calendar.svg");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
}

.blog-core__frontmatter-categories::before {
  content: " ";
  width: 16px;
  height: 16px;
  background: url("../../public/categories.svg");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
}

.blog-core__article {
  display: flex;
  justify-content: center;
}

.blog-core__article-box {
  margin-top: 7rem;
}

.blog-core__frontmatter {
  width: $article-width;
  margin: 0 auto;
}

.blog-core__frontmatter-cover {
  max-width: 100%;
}

.blog-core__frontmatter-title {
  display: block;
  font-size: 34px;
  font-weight: 700;
  margin-bottom: 3rem;
  text-decoration: none;
  color: #403e3e;
  text-align: center;

  &::after {
    border-bottom: 2px dashed #cce5ff;
    content: "";
    width: 100px;
    display: block;
    margin: 0.2em auto 0;
    height: 2px;
  }
}

.blog-core__mask {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.7);
  opacity: 0;
  transition: all 0.1s ease;

  &.active {
    opacity: 1;
  }
}

@keyframes slideIn {
  0% {
    left: -100%;
  }

  100% {
    left: 0%;
  }
}

.blog-core__container {
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.blog-core__side {
  width: $sidebar-width;
  flex-basis: $sidebar-width;
  height: 100vh;
  border-right: 1px solid $border-color;
  background: $side-bg;

  &.active {
    display: flex;
    position: absolute;
    left: 0;
    width: 75%;
    z-index: 10;
    animation: slideIn 0.5s ease;
  }
}

.blog-core__main {
  flex: 1;
  overflow-y: auto;
  width: inherit;
  height: 100vh;
}

@media screen and (max-width: 1440px) {
  .blog-core__side {
    display: none;
  }
}
</style>
