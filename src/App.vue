<template>
  <div id="app">
    <BlogHeader />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<style lang="scss">
  @import url('./assets/scss/main.scss');
</style>
