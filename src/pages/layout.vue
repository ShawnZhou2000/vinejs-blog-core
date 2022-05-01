<template>
  <div class="blog-core__container">
    <div class="blog-core__side" :class="{ 'active': isSideBarActiveInMob }">
      <sidebar-vue></sidebar-vue>
    </div>
    <div class="blog-core__main" ref="main">
      <navbar-vue @sideBarChangeInMob="handleSideBarChangeInMob"></navbar-vue>
      <banner-vue :hideArrow="hideArrow"></banner-vue>
      <bloglist-vue></bloglist-vue>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, onMounted, getCurrentInstance } from 'vue';
import bannerVue from '../components/banner.vue';
import sidebarVue from '../components/sidebar.vue';
import navbarVue from '../components/navbar.vue';
import bloglistVue from '../components/bloglist.vue';

function throttle(fn: Function, delay: number) {
  let timer: number | null = null;
  return function() {
    const args = arguments;
    if (!timer) {
      fn.apply(this, args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  }
}

export default defineComponent({
  components: {
    bannerVue,
    sidebarVue,
    navbarVue,
    bloglistVue
  },
  setup(props, ctx) {
    let isSideBarActiveInMob: Ref<boolean> = ref(false);
    const handleSideBarChangeInMob = (val: Ref<boolean>):void => {
      console.log(val);
      isSideBarActiveInMob = val;
    }

    let hideArrow = ref(false);

    onMounted(():void => {
      const ctx:any = getCurrentInstance();
      ctx.refs.main.addEventListener('scroll', throttle((e: Event) => {
        if (e !== null && e?.target?.scrollTop >= 100) {
          hideArrow = ref(true);
        } else {
          hideArrow = ref(false);
        }
      }, 50));
    })
    return {
      isSideBarActiveInMob,
      handleSideBarChangeInMob,
      hideArrow: hideArrow.value
    }
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
    background: $side-bg;
    &.active {
      display: flex;
    }
  }

  .blog-core__main {
    flex: 1;
    overflow-y: auto;
    width: inherit;
    height: 100vh;
  }

  @media screen and (max-width: 1440px) {
    .blog-core__side {
      display: none;
    }
  }

</style>