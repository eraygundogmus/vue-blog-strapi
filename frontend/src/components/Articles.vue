<template>
  <div class="articles">
    <ArticlesList :articles="data?.articles.data" :loading="loading" />
  </div>
</template>

<script setup lang="ts">
  import gql from 'graphql-tag'
  import { useQuery, useResult } from '@vue/apollo-composable'

  const query = gql`
    query Articles {
      articles {
        data {
          attributes {
            slug
            title
            description
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
  const { result, loading } = useQuery(query)

  const data = useResult(result, null, (data) => data)
</script>
