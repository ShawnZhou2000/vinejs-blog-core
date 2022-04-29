<template>
  <div class="blog-core__container">
    <div class="blog-core__side">
      <sidebar-vue></sidebar-vue>
    </div>
    <div class="blog-core__main">
      <navbar-vue></navbar-vue>
      <banner-vue></banner-vue>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import bannerVue from '../components/banner.vue'
import sidebarVue from '../components/sidebar.vue';
import navbarVue from '../components/navbar.vue';


export default defineComponent({
  components: {
    bannerVue,
    sidebarVue,
    navbarVue,
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
    flex-basis: calc(100% / 3 - 1rem);
    height: 100vh;
    border: 1px solid red;
  }

  .blog-core__main {
    flex-basis: calc(100% / 3 * 2 - 1rem);
    overflow-y: auto;
    border: 1px solid green;
  }

</style>