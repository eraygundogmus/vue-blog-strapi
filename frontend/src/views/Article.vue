<template>
  <el-main v-if="article" class="article">
    <div class="article-content">
      <el-image :src="article.attributes.image.data.attributes.url"> </el-image>
      <h3>
        {{ article.attributes.title }}
      </h3>

      <h6>
        {{ article.attributes.description }}
      </h6>
      <div v-html="content"></div></div
  ></el-main>
</template>

<script lang="ts">
  import { computed } from 'vue'
  import { useStore } from '@/store/index'
  import { useRouter } from 'vue-router'
  import gql from 'graphql-tag'
  import { useQuery } from '@vue/apollo-composable'

  export default {
    name: 'Article',
    setup() {
      const store = useStore()
      const router = useRouter()

      const route: any = computed(() => router.currentRoute.value.params.slug)

      const storeData = store.getArticles
      if (!storeData.length) {
        const query = gql`
          query Articles {
            articles {
              data {
                attributes {
                  slug
                  title
                  description
                  content
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        `
        const { onResult } = useQuery(query)

        onResult((queryResult: any) => {
          store.$patch({
            articles: queryResult.data?.articles?.data,
          })
        })
      }

      const article = computed(() =>
        store.getArticles.find((item: any) => {
          return item?.attributes?.slug === route.value
        })
      )
      const content = computed(() =>
        article.value?.attributes?.content?.replaceAll('\n', '<br />')
      )

      return { store, article, content }
    },
  }
</script>
