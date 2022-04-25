<template>
  <blog-sidebar></blog-sidebar>
  <!-- <div>{{JSON.stringify(store)}}</div> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import blogSidebar from '@/pages/sidebar.vue'; 
import { useRouteStore } from '../src/store/useRouteStore';

export default defineComponent({
  components: {
    blogSidebar
  },
  setup() {
    const store = useRouteStore();
    return {
      store
    }
  },
})
</script>
