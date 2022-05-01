<template>
  <div class="blog-core__container">
    <div class="blog-core__side">
      <sidebar-vue></sidebar-vue>
    </div>
    <div class="blog-core__main">
      <navbar-vue></navbar-vue>
      <div class="blog-core__about">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import sidebarVue from './sidebar.vue';
import bloglistVue from './bloglist.vue';

export default defineComponent({
  components: {
    sidebarVue,
    bloglistVue
  },
  setup() {
    
  },
})
</script>

<style scoped lang="scss">
  .blog-core__container {
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .blog-core__side {
    flex-basis: $sidebar-width;
    height: 100vh;
    border-right: 1px solid $border-color;
  }

  .blog-core__main {
    flex: 1;
    overflow-y: auto;
    width: inherit;
  }

</style>