<template>
  <div style="overflow: hidden">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  getCoreConfig
} from './api/blogSettings';

export default defineComponent({
  setup() {
    if (typeof document !== 'undefined') {
      getCoreConfig()
      .then(res => {
        document.title = res.settings.blog_name;
      })
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
