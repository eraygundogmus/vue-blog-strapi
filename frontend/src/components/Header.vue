<template>
  <el-header>
    <el-menu
      :default-active="route"
      class="el-menu-demo"
      mode="horizontal"
      background-color="none"
      @select="handleSelect"
    >
      <el-menu-item index="About">About</el-menu-item>
      <el-menu-item index="Home">Home</el-menu-item>

      <el-menu-item index="Blog">Blog</el-menu-item>

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
      <el-menu-item index="Bookmarks">Bookmarks</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  import { computed } from 'vue'

  const router = useRouter()

  const route: any = computed(() => router.currentRoute.value.name)

  const handleSelect = (key: string) => {
    router.push(`/${key.toLowerCase()}`)
    if (key === 'Home') {
      router.push('/')
    }
  }
</script>
