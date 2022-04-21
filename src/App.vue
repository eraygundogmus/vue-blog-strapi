<template>
  <div id="app">
    <Header />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<style lang="scss">
  @import url('./assets/scss/main.scss');
</style>
