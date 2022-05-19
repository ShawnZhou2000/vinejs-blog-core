<template>
  <layout :render="'index'" :conf="conf"></layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import layout from '../src/components/layout.vue';
import routes from "pages-generated";

export default defineComponent({
  components: {
    layout
  },
  setup() {
    const conf = routes[0].meta.conf;
    return {
      conf
    }
  },
})
</script>
