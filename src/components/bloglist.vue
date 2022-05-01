<template>
  <div class="blog-core__blog-list-container">
    <div class="blog-core__blog-list">
      <bloglist-card-vue v-for="(blogItem, index) in blogList" :key="index" :data="blogItem"></bloglist-card-vue>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import bloglistCardVue from './bloglist_card.vue';

type blogItem = {
  title: string,
  time: Date,
  categories: string,
  abstract: string,
  cover: string
}

export default defineComponent({
  components: {
    bloglistCardVue,
  },
  setup() {
    const blogList: Array<blogItem> = [
      {
        title: '浅谈前端开发中的产品思维',
        time: new Date('2022-04-30'),
        categories: '杂谈与随想',
        abstract: `这里是摘要`,
        cover: 'https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog/image9b7c7ba52afe9c5f5ed86a33ae4578d6.jpg'
      },
      {
        title: '浅谈前端开发中的产品思维',
        time: new Date('2022-04-30'),
        categories: '杂谈与随想',
        abstract: `这里是摘要`,
        cover: 'https://shawnzhou-image.oss-cn-beijing.aliyuncs.com/blog/image9b7c7ba52afe9c5f5ed86a33ae4578d6.jpg'
      }
    ]
    return {
      blogList,
    }
  },
})
</script>

<style lang="scss" scoped>
  .blog-core__blog-list-container {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid $border-color;
    .blog-core__blog-list {
      width: $article-area-width;
      margin-bottom: 1000px;
    }
  }
</style>
