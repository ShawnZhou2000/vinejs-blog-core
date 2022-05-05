<template>
  <div style="overflow: hidden">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    if (typeof document !== 'undefined') {
      let config:any = reactive({data: {}});
      if (!import.meta.env.SSR) {
        config.data = JSON.parse(window.localStorage.getItem('data'));
      }
      document.title = config.data.settings.blog_name;
    }
  },
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
}
</style>
