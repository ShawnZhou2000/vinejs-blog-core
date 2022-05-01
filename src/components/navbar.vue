<template>
  <div class="blog-core__navbar">
    <ul>
      <li v-for="navItem in navList" :key="navItem.id">
        <router-link :to="navItem.nav" :class="{ active: activePage===navItem.id }" class="blog-core__list-item">
          {{ navItem.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type NavItem = {
  name: string,
  nav: string,
  id: number
}

export default defineComponent({
  setup() {
    let navList: Array<NavItem> = [
      {
        name: '首页',
        nav: '/',
        id: 0,
      },
      {
        name: '关于',
        nav: '/about',
        id: 1,
      },
    ];
    let activePage: number = 0;

    return {
      navList,
      activePage
    }
  },
})
</script>


<style lang="scss" scoped>
  .blog-core__navbar {
    height: 60px;
    padding: 0 30px;
    position: absolute;
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
          color: #f5f5f5;
          transition: all 0.1s ease;
        }
        a:hover {
          color: #4786d6;
        }
      }
    }
  }

  .blog-core__list-item {
    padding-bottom: 20px;
    &.active {
      border-bottom: 2px solid #4786d6;
    }
  }
</style>