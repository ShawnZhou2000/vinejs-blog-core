<template>
  <div class="blog-core__navbar">
    <ul>
      <li class="blog-core__mob-toggle" @click="showSideBar">
        <div class="blog-core__mob-toggle-btn"></div>
      </li>
      <li v-for="navItem in navList" :key="navItem.id">
        <router-link :to="navItem.nav" :class="{ active: activePage===navItem.id }" class="blog-core__list-item">
          {{ navItem.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, toRef } from 'vue';

type nav = {
  name: string,
  nav: string,
  id: number
}

export default defineComponent({
  props: ["navConf"],
  setup(props, ctx) {
    const config: Ref<any> = toRef(props, "navConf");
    let navList: Array<nav> = [];
    Object.keys(config.value).forEach((item, index) => {
      navList.push({
        name: item,
        nav: config.value[item],
        id: index
      })
    });
    let activePage: Ref<number> = ref(0);
    let isSideBarActiveInMob: Ref<boolean> = ref(true);

    const showSideBar = ():void => {
      isSideBarActiveInMob.value = !isSideBarActiveInMob.value;
      ctx.emit('sideBarChangeInMob', isSideBarActiveInMob.value);
    }

    return {
      navList,
      config,
      activePage,
      showSideBar,
      isSideBarActiveInMob,
    }
  },
})
</script>


<style lang="scss" scoped>
  .blog-core__navbar {
    height: 60px;
    padding: 0 30px;
    position: fixed;
    width: 75%;
    background-color: rgba(0, 0, 0, 0.6);
    ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: center;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      font-size: 14px;
      li {
        padding-right: 20px;
        a {
          text-decoration: none;
          color: $text-white;
          transition: all 0.1s ease;
        }
        a:hover {
          color: $text-highlight;
        }
      }
    }
  }

  .blog-core__list-item {
    padding-bottom: 18px;
    &.active {
      border-bottom: 3px solid #4786d6;
    }
  }

  .blog-core__mob-toggle {
    display: none;
    .blog-core__mob-toggle-btn {
      position: relative;
      background-color: rgba(255, 255, 255, 0.25);
      width: 40px;
      height: 40px;
      border: 1px solid transparent;
      border-radius: 50%;
      transition: all 0.1s ease;
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }
      &::after {
        content: ' ';
        background: url('../../public/menu.svg');
        width: 16px;
        height: 16px;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
  }

  @media screen and (max-width: 1440px) {
    .blog-core__mob-toggle {
      display: flex;
    }

    .blog-core__navbar {
      width: 100%;
      padding: 0 8px;
    }
  }
</style>