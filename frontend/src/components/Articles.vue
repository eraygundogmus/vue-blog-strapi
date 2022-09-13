<template>
  <ArticlesList :articles="data?.articles.data" :loading="loading" />
</template>

<script setup lang="ts">
  import gql from 'graphql-tag'
  import { useQuery, useResult } from '@vue/apollo-composable'
  import { useStore } from '@/store/index'
  const store = useStore()

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
  const { result, loading, onResult } = useQuery(query)

  const data: any = useResult(result, null, (data) => data)

  onResult((queryResult: any) => {
    store.$patch({
      articles: queryResult.data?.articles?.data,
    })
  })
</script>
