<template>
  <div class="blog-core__blog-list-container">
    <div class="blog-core__blog-list">
      <bloglist-card-vue
        v-for="(blogItem, index) in blogList"
        :key="index"
        :data="blogItem"
      ></bloglist-card-vue>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import bloglistCardVue from "./bloglist_card.vue";
import routes from "pages-generated";
import dayjs from 'dayjs'

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
    bloglistCardVue,
  },
  setup() {
    const matchReg = /articles\//;
    const blogList: Array<blogItem> = routes
      .filter((item) => matchReg.test(item.path))
      .map((item) => {
        return {
          title: item?.meta?.frontmatter.title,
          time: dayjs(item?.meta?.frontmatter.time).format('YYYY-MM-DD'),
          categories: item?.meta?.frontmatter.categories,
          abstract: item?.meta?.frontmatter.abstract,
          cover: item?.meta?.frontmatter.cover,
          path: item?.path,
        };
      });
    return {
      blogList,
    };
  },
});
</script>

<style lang="scss" scoped>
.blog-core__blog-list-container {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid $border-color;
  .blog-core__blog-list {
    margin-bottom: 5rem;
  }
}

@media screen and (min-width: 1024px) {
  .blog-core__blog-list-container .blog-core__blog-list {
    width: $article-area-width;
  }
}

@media screen and (max-width: 1024px) {
  .blog-core__blog-list-container .blog-core__blog-list {
    margin: 0 7rem 5rem 7rem;
  }
}

@media screen and (max-width: 425px) {
  .blog-core__blog-list-container .blog-core__blog-list {
    margin: 0 2rem 5rem 0;
  }
}
</style>
