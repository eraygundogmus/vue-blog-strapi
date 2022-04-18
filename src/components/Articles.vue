<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>Strapi blog</h1>
        {{ articles }}
        <!-- <ArticlesList :articles="articles"></ArticlesList> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
// import { watch } from "vue";

// import ArticlesList from "./ArticlesList.vue";

const articles = ref([]);

onMounted(async () => {
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
  `;
  const { result } = await useQuery(query);

  articles.value = result;
});
</script>
