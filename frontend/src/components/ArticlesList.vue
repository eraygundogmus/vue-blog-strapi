<template>
  <el-main>
    <div v-if="loading" class="skeleton">
      <el-skeleton :animated="true" style="width: 480px" :loading="loading" />
    </div>

    <el-row
      v-infinite-scroll="load"
      class="infinite-list"
      style="overflow: auto"
    >
      <el-col
        v-for="article in articlesInfinite"
        :key="article"
        class="infinite-list-item"
      >
        <router-link
          :key="article.attributes.slug"
          :to="{ path: '/article/' + article.attributes.slug }"
        >
          <div class="article-content">
            <el-image
              class="article-content__image"
              :src="api_url + article.attributes.image.data.attributes.url"
            >
            </el-image>
            <p>
              {{ article.attributes.title }}
            </p>
            <span>
              {{ article.attributes.description }}
            </span>
          </div>
        </router-link>
      </el-col>
    </el-row>
  </el-main>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const props = defineProps({
    articles: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
    },
  })
  const count = ref(1)

  const articlesInfinite: any = ref(props?.articles.slice(0, count.value))
  const load = () => {
    count.value += 1
    articlesInfinite.value = props?.articles.slice(0, count.value)
  }
  const api_url = import.meta.env.VITE_APP_STRAPI_API_URL
</script>
