<template>
  <div class="blog-core__bg">
    <div class="blog-core__motto">
      人生如逆旅，我亦是行人
    </div>
    <i class="blog-core__arrow-down" :class="{ active: !isArrowActive }"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, Ref } from 'vue'

export default defineComponent({
  props: ['hideArrow'],
  setup(props, ctx) {
    let isArrowActive: Ref<boolean> = ref(props.hideArrow);
    return {
      isArrowActive
    }
  },
})
</script>


<style scoped lang="scss">

  @keyframes arrow {
    0% {
      bottom: calc(10rem + 5px);
    }
    100% {
      bottom: calc(10rem - 5px);
    }
  }
  .blog-core__bg {
    background: url('../../public/horizon_banner.jpg');
    height: 100vh;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .blog-core__motto {
    color: white;
    font-weight: 200;
    font-size: 3rem;
    margin-bottom: 10rem;
    text-shadow: 2px 2px 8px #000;
    font-family: Titillium Web,PingFang SC,Hiragino Sans GB,Microsoft JhengHei,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
  }

  .blog-core__arrow-down {
    background: url('../../public/arrow-down.svg');
    width: 2rem;
    height: 2rem;
    background-size: contain;
    position: absolute;
    bottom: 10rem;
    transition: all 0.1s ease;
    animation-name: arrow;
    animation-iteration-count: infinite;
    animation-duration: 0.5s;
    animation-direction: alternate;
    animation-timing-function: linear;
    display: none;
    &.active {
      display: inline-block;
    }
    &::after {
      content: 'more';
      color: #f5f5f5;
      text-shadow: 2px 2px 8px #000;
      font-size: 16px;
      font-family: Titillium Web,PingFang SC,Hiragino Sans GB,Microsoft JhengHei,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif;
      height: 32px;
      line-height: 36px;
      font-weight: bolder;
      padding-left: 40px;
      letter-spacing: 1px;
    }
  }
</style>