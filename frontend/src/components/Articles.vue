<template>
  <div class="articles">
    <ArticlesList
      v-if="data?.articles.data?.length > 0"
      :articles="data?.articles.data"
    />
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
            category {
              data {
                attributes {
                  slug
                  name
                }
              }
            }
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
  const { result } = useQuery(query)

  const data = useResult(result, null, (data) => data)
</script>
