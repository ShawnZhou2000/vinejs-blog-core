<template>
  <div class="blog-core__side-container">
    <div class="blog-core__side-main">
      <div class="blog-core__center">
        <img :src="config.data.avatar_image" alt="avatar"/>
        <h1>{{ config.data.blog_name }}</h1>
        <p>{{ config.data.blog_description }}</p>
        <div class="blog-core__iconlist">
          <div class="blog-core__icons" v-for="(item, index) in config.data.icon_link" :key="index">
            <a :href="item.link" target="_blank">
              <img :src="item.icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <footer-vue :owner="config.data.owner" :start="config.data.site_start_time" :beian="config.data.beian" :theme="config.data.theme"></footer-vue>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import footerVue from '../components/footer.vue';
import {
  getCoreConfig
} from '../api/blogSettings';

export default defineComponent({
  components: {
    footerVue
  },
  setup() {
    let config:any = reactive({data: {}});
    getCoreConfig()
      .then(res => {
        config.data = res.settings;
      })
    return {
      config,
    }
  },
})
</script>

<style scoped lang="scss">
  .blog-core__iconlist {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    .blog-core__icons > a > img {
      width: 1.5rem;
      margin-right: 6px;
    }
  }
  .blog-core__side-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    height: 100%;
    color: #464646;
    position: fixed;
    width: inherit;
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
