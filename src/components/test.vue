<template>
  <div class="blog-core__container">
    <div class="blog-core__side">
      
    </div>
    <div class="blog-core__main">

      <div class="blog-core__about">
      </div>
    </div>
  </div>
</template>

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
  }

  .blog-core__main {
    flex: 1;
    overflow-y: auto;
    width: inherit;
  }

</style>