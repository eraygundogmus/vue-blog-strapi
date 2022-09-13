<template>
  <div class="stack">
    <figure v-for="(item, i) in stack">
      <img :alt="'tech stack ' + i" :key="i" width="55" :src="item.src" />
    </figure>
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
