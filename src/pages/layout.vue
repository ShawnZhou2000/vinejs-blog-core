<template>
  <div class="blog-core__container">
    <div class="blog-core__side">
      <sidebar-vue></sidebar-vue>
    </div>
    <div class="blog-core__main">
      <navbar-vue></navbar-vue>
      <banner-vue></banner-vue>
      <bloglist-vue></bloglist-vue>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import bannerVue from '../components/banner.vue';
import sidebarVue from '../components/sidebar.vue';
import navbarVue from '../components/navbar.vue';
import bloglistVue from '../components/bloglist.vue';

export default defineComponent({
  components: {
    bannerVue,
    sidebarVue,
    navbarVue,
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
    // border: 1px solid green;
  }

</style>