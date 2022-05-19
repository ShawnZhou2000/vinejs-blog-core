<template>
  <div class="blog-core__category-box">
    <div class="blog-core__category-title">归档</div>
    <div class="blog-core__category-unit" v-for="(item, index) in categoryUnit" :key="index">
      {{item}}
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
          }
        ]
      }
    ];
    return {
      categoryUnit,
    }
  },
})
</script>

<style lang="scss" scoped>

</style>