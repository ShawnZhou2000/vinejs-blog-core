<template>
  <div class="blog-core__card">
    <div class="blog-core__card-title">
      {{ data.title }}
    </div>
    <div class="blog-core__card-meta">
      <span class="blog-core__card-time">{{ data.time }}</span>
      <span class="blog-core__card-categories">{{ data.categories }}</span>
    </div>
    <div class="blog-core__card-text">
      <p class="blog-core__card-text-abstract" v-html="data.abstract">
      </p>
      <img :src="data.cover" class="blog-core__card-cover">
      <button class="blog-core__card-button-more">阅读全文</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['data'],
  setup(props) {
    return {
      data: props.data
    }
  },
})
</script>


<style lang="scss" scoped>
  .blog-core__card {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 4.5rem;
  }

  .blog-core__card-cover {
    max-width: $article-area-width;
  }

  .blog-core__card-title {
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 3rem;
    text-decoration: none;
    color: #403e3e;
    padding-left: 2rem;
    border-left: 4px solid #403e3e;
  }

  .blog-core__card-meta {
    color: $text-gray;
    font-size: 14px;
    position: relative;
    .blog-core__card-categories, .blog-core__card-time {
      padding-left: 20px;
      vertical-align: super;
    }
    .blog-core__card-categories {
      position: relative;
      margin-left: 20px;
    }
  }

  .blog-core__card-time::before {
    content: ' ';
    width: 16px;
    height: 16px;
    background: url('../../public/calendar.svg');
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
  }

  .blog-core__card-categories::before {
    content: ' ';
    width: 16px;
    height: 16px;
    background: url('../../public/categories.svg');
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
  }

  .blog-core__card-text {
    margin-top: 1rem;
    padding: 0 1rem 2rem;
    border: 1px dashed #dfdede;
    p {
      font-size: 18px;
    }
  }

  .blog-core__card-button-more {
    display: inline-block;
    background-color: #403e3e;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    color: #fff!important;
    text-decoration: none;
    border: none;
    font-size: 1rem;
    margin-top: 1rem;
  }

  @media screen and (max-width: 1024px) {
    .blog-core__card {
      width: calc(100vw - 14rem);
      & > div {
        width: 100%;
      }
    }
    .blog-core__card-cover {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    .blog-core__card {
      width: calc(100vw - 8rem);
    }
  }

  @media screen and (max-width: 425px) {
    .blog-core__card {
      width: calc(100vw - 4rem);
    }
  }
</style>