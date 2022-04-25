<template>
  <el-main>
    <div v-if="loading" class="skeleton">
      <el-skeleton :animated="true" style="width: 480px" :loading="loading" />
    </div>

    <div v-infinite-scroll="load">
      <el-row class="infinite-list" style="overflow: auto">
        <el-col
          v-for="article in articlesInfinite"
          :key="article"
          class="infinite-list-item"
        >
          <router-link
            :key="article.attributes.slug"
            :to="{ path: '/blog/' + article.attributes.slug }"
          >
            <div class="article-content">
              <el-image :src="article.attributes.image.data.attributes.url">
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
    </div>
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
</script>
