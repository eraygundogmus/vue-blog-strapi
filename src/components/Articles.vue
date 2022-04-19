<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <ArticlesList
          v-if="data?.articles.data?.length > 0"
          :articles="data?.articles.data"
        />
      </div>
    </div>
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
