<template>
  <div class="blog-core__container">
    <div class="blog-core__mask" 
      v-show="isSideBarActiveInMob" 
      @click="handleMaskClose" 
      :class="{ 'active': isSideBarActiveInMob }">
    </div>
    <div class="blog-core__side" :class="{ 'active': isSideBarActiveInMob }">
      <sidebar-vue></sidebar-vue>
    </div>
    <div class="blog-core__main" ref="main">
      <navbar-vue @sideBarChangeInMob="handleSideBarChangeInMob"></navbar-vue>
      <div class="blog-core__article-box">
        <div class="blog-core__frontmatter">
          <h1 class="blog-core__frontmatter-title">{{ frontmatter.title }}</h1>
          <div class="blog-core__frontmatter-meta">
            <span class="blog-core__frontmatter-time">{{ '发布日期：' + frontmatter.time }}</span>
            <span class="blog-core__frontmatter-categories">{{ '收录于：' + frontmatter.categories }}</span>
            <p class="blog-core__frontmatter-text-abstract" v-html="frontmatter.abstract"></p>
          </div>
          <img :src="frontmatter.cover" class="blog-core__frontmatter-cover">
        </div>
        <div class="blog-core__article" id="mount"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, onMounted, getCurrentInstance } from 'vue';
import sidebarVue from '../components/sidebar.vue';
import navbarVue from '../components/navbar.vue';
import routes from "pages-generated";
import dayjs from 'dayjs';

type blogItem = {
  title: string;
  time: string;
  categories: string;
  abstract: string;
  cover: string;
  path: string;
};

export default defineComponent({
  components: {
    sidebarVue,
    navbarVue,
  },
  setup(props, ctx) {
    let isSideBarActiveInMob: Ref<boolean> = ref(false);
    const matchReg = /articles\//;
    const blogList: Array<blogItem> = routes
      .filter((item) => {
        if (typeof window !== "undefined") {
          return matchReg.test(item.path) && window.location.pathname === item.path
        } else {
          return matchReg.test(item.path)
        }
      })
      .map((item: any) => {
        return {
          title: item?.meta?.frontmatter.title,
          time: dayjs(item?.meta?.frontmatter.time).format('YYYY-MM-DD'),
          categories: item?.meta?.frontmatter.categories,
          abstract: item?.meta?.frontmatter.abstract,
          cover: item?.meta?.frontmatter.cover,
          path: item?.path,
        };
      });
    if (typeof document !== 'undefined') {
      document.title = `${blogList[0].title} | ${document.title}`;
    }

    const handleSideBarChangeInMob = (val: boolean):void => {
      isSideBarActiveInMob.value = val;
    } 
    const handleMaskClose = () => {
      handleSideBarChangeInMob(!isSideBarActiveInMob.value);
    }

    onMounted(() => {
      let dom:any = document.getElementById("mount");
      let article = document.getElementsByTagName("article")[0];
      dom.appendChild(article);
    })
    return {
      isSideBarActiveInMob,
      handleSideBarChangeInMob,
      handleMaskClose,
      frontmatter: blogList[0]
    }
  },
})
</script>

<style lang="scss">
  article {
    width: $article-width;
  }
</style>

<style scoped lang="scss">

  .blog-core__frontmatter-text-abstract {
    border-top: 1px solid #efefef;
    padding-top: 2rem;
  }

  .blog-core__frontmatter-meta {
    position: relative;
    .blog-core__frontmatter-categories, .blog-core__frontmatter-time {
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
    content: ' ';
    width: 16px;
    height: 16px;
    background: url('../../public/calendar.svg');
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
  }

  .blog-core__frontmatter-categories::before {
    content: ' ';
    width: 16px;
    height: 16px;
    background: url('../../public/categories.svg');
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
    width: calc(70% - 5rem);
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
    background: rgba($color: #000000, $alpha:0.7);
    opacity: 0;
    transition: all .1s ease;
    &.active {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    0% { left: -100%; }
    100% { left: 0%; }
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