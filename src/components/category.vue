<template>
  <div class="blog-core__category-box">
    <div class="blog-core__category-main">
      <h1 class="blog-core__category-title">归档</h1>
      <div class="blog-core__category-unit" v-for="(item, index) in categoryUnit" :key="index">
        <div class="blog-core__category-unit-name">
          {{ item.name }}
        </div>
        <div class="blog-core__category-list" v-for="(post, idx) in item.list" :key="idx">
          <div class="blog-core__category-time">
            {{ post.time }}
          </div>
          <div class="blog-core__category-link">
            <router-link :to="post.url">
              {{ post.name }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import routes from "pages-generated";

type article = {
  name: string,
  time: string,
  url: string,
}

type category = {
  name: string,
  list: Array<article>
}

export default defineComponent({
  setup() {
    let categoryUnit: Array<category> = [
      {
        name: 'hello',
        list: [
          {
            name: '测试文章1',
            time: '2022-05-19',
            url: '/articles/test1',
          },
          {
            name: '测试文章2',
            time: '2022-05-19',
            url: '/articles/hello',
          },
        ]
      },
      {
        name: 'world',
        list: [
          {
            name: '测试文章11',
            time: '2022-05-19',
            url: '/articles/test11',
          },
          {
            name: '测试文章22',
            time: '2022-05-19',
            url: '/articles/hello1',
          },
        ]
      },
    ];
    return {
      categoryUnit,
    }
  },
})
</script>

<style lang="scss" scoped>
  .blog-core__category-box {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    .blog-core__category-main {
      width: 75%;
    }
  }

  .blog-core__category-unit {
    display: flex;
    flex-direction: row;
  }

  .blog-core__category-list {
    display: flex;
    flex-direction: row;
  }
</style>