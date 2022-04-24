<template>
  <div id="app">
    <Header />
    <router-view v-slot="{ Component, route }">
      <transition name="fade">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>
