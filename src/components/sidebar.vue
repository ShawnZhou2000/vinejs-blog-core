<template>
  <div class="blog-core__side-container">
    <div class="blog-core__side-main">
      <div class="blog-core__center">
        <img src="../assets/logo.png" alt="avatar"/>
        <h1>My Blog</h1>
        <p>A simple Vine.js blog</p>
        <div class="blog-core__iconlist"></div>
      </div>
    </div>
    <footer-vue></footer-vue>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import footerVue from '../components/footer.vue';

export default defineComponent({
  components: {
    footerVue
  },
  setup() {
    
  },
})
</script>

<style scoped lang="scss">
  .blog-core__side-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 100%;
    color: #464646;
    .blog-core__side-main {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      .blog-core__center {
        text-align: center;
        p {
          color: #565654;
        }
      }
    }
  }
</style>
