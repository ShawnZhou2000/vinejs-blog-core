<template>
  <div class="blog-core__card">
    <div class="blog-core__card-title">
      {{ data.title }}
    </div>
    <div class="blog-core__card-info">
      <span>{{ data.time }}</span>
      <span>{{ data.categories }}</span>
    </div>
    <div class="blog-core__card-text">
      <div class="blog-core__card-text-abstract">
        {{ data.abstract }}
      </div>
      <img :src="data.cover" class="blog-core__card-cover">
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
  }

  .blog-core__card-cover {
    width: $article-area-width;
  }
</style>