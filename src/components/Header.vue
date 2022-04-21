<template>
  <el-header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="none"
      @select="handleSelect"
    >
      <el-menu-item index="about">About</el-menu-item>
      <el-menu-item index="home">Home</el-menu-item>

      <el-menu-item index="blog">Blog</el-menu-item>

      <!-- <el-sub-menu index="2">
        <template #title>Experiences & Projects</template>
        <el-menu-item index="2-1">ICS Defense</el-menu-item>
        <el-menu-item index="2-2">Teknasyon</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>Freelance</template>
          <el-menu-item index="2-4-1">Upwork</el-menu-item>
          <el-menu-item index="2-4-2">Outsource</el-menu-item>
        </el-sub-menu>
      </el-sub-menu> -->
      <el-menu-item index="bookmarks">Bookmarks</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const handleSelect = (key: string) => {
    router.push(`/${key}`)
    if (key === 'home') {
      router.push('/')
    }
  }
</script>
