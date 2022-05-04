<template>
  <div class="blog-core__footer-container">
    <p>Copyrights © {{ start }} {{ owner }}</p>
    <p>由 Vine.js 强力驱动 | 主核心 - blog-core:{{theme}}</p>    
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue'

export default defineComponent({
  props: ['owner', 'start', 'beian', 'theme'],
  setup(props, ctx) {
    return {
      owner: toRef(props, 'owner'),
      start: toRef(props, 'start'),
      beian: toRef(props, 'beian'),
      theme: toRef(props, 'theme'),
    }
  },
})
</script>


<style scoped lang="scss">
  .blog-core__footer-container {
    display: flex;
    color: rgba(0,0,0,0.9);
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    flex-direction: column;
    p {
      margin-top: 0;
      margin-bottom: 0.5rem;
    }
  }
</style>