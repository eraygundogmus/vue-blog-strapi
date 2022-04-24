<template>
  <div class="stack">
    <img v-for="(item, i) in stack" :key="i" width="55" :src="item.src" />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    stack: {
      type: Array,
      default: () => [],
    },
  })
</script>
