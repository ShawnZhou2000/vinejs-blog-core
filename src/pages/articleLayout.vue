<template>
  <div class="blog-core__container">
    <div class="blog-core__side">
    </div>
    <div class="blog-core__main">
    </div>
  </div>
</template>

<style scoped lang="scss">

  .blog-core__mask {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba($color: #000000, $alpha:0.7);
    opacity: 0;
    transition: all .1s ease;
    &.active {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    0% { left: -100%; }
    100% { left: 0%; }
  }
  .blog-core__container {
    width: 100vw;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .blog-core__side {
    width: $sidebar-width;
    flex-basis: $sidebar-width;
    height: 100vh;
    border-right: 1px solid $border-color;
    background: $side-bg;
    &.active {
      display: flex;
      position: absolute;
      left: 0;
      width: 75%;
      z-index: 10;
      animation: slideIn 0.5s ease;
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