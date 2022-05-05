<template>
  <div class="blog-core__bg" :style="config.data.banner_pic !== null ? `background: url('${config.data.banner_pic}'); background-size: cover;` : ''">
    <div class="blog-core__motto">
      {{ config.data.banner_motto }}
    </div>
    <i class="blog-core__arrow-down" id="arrow"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref, nextTick, reactive } from 'vue';
import {
  getCoreConfig
} from '../api/blogSettings'

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
  setup() {
    let config:any = reactive({data: {}});
    getCoreConfig()
      .then(res => {
        config.data = res.settings;
      })
    let isArrowActive: Ref<boolean> = ref(true);
    onMounted(():void => {
      window.addEventListener('scroll', throttle((e: any) => {
        if (e !== null && e?.target?.scrollTop >= 100) {
          isArrowActive = ref(false);
        } else {
          isArrowActive = ref(true);
        }
        nextTick(() => {
          let arrow:any = document.querySelector("#arrow");
          if (isArrowActive.value && arrow !== null) {
            arrow.style.opacity = "1";
          } else {
            arrow.style.opacity = "0";
          }
        })
      }, 10), true);
    })
    return {
      isArrowActive,
      config
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
    background: url('/horizon_banner.jpg');
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
    transition: all 0.25s ease;
    animation-name: arrow;
    animation-iteration-count: infinite;
    animation-duration: 0.5s;
    animation-direction: alternate;
    animation-timing-function: linear;
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

  @media screen and (max-width: 1440px) {
    .blog-core__motto {
      margin: 0 4rem;
    }
  }

  @media screen and (max-width: 768px) {
    .blog-core__motto {
      font-size: 2rem;
      margin: 0 2rem;
    }
  }

  @media screen and (max-width: 425px) {
    .blog-core__motto {
      font-size: 26px;
      margin: 0 1rem;
    }
  }
</style>