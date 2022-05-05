<template>
  <div class="blog-core__footer-container">
    <p>Copyrights © {{ siteTime }} {{ owner }}</p>
    <p v-if="beian?.enable">
      <a :href="beian.icp.url" target="_blank" class="blog-core__icp">{{ beian.icp.text }}</a>
      <a :href="beian.police.url" target="_blank" class="blog-core__police">{{ beian.police.text }}</a>
    </p>
    <p>由 Vine.js 强力驱动 | 主核心 - blog-core:{{theme}}</p>    
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, computed, Ref } from 'vue'

export default defineComponent({
  props: ['owner', 'start', 'beian', 'theme'],
  setup(props, ctx) {
    const start: Ref<number> = toRef(props, 'start');
    const now: number = new Date().getFullYear();
    const siteTime = computed(() => {
      if (now === start.value) {
        return start.value;
      } else {
        return `${start.value} - ${now}`;
      }
    })
    return {
      owner: toRef(props, 'owner'),
      beian: toRef(props, 'beian'),
      theme: toRef(props, 'theme'),
      siteTime
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

  .blog-core__icp, .blog-core__police {
    color: rgba(0,0,0,0.9);
    text-decoration: none;
    transition: all 0.1s ease;
    &:hover {
      color: $text-highlight;
    }
  }
  .blog-core__icp {
    margin-right: 2rem;
  }
  .blog-core__police {
    position: relative;
  }
  .blog-core__police::before {
    content: "";
    width: 1rem;
    height: 1rem;
    background: url('/beian.png');
    background-size: contain;
    position: absolute;
    left: -1.2rem;
  }
</style>