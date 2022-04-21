<template>
  <div id="app">
    <Header />
    <router-view :key="$route.fullPath"></router-view>
    <Footer />
  </div>
</template>
