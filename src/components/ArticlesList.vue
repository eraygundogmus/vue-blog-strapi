<template>
  <div>
    <div class="uk-child-width-1-2" uk-grid>
      <div>
        <router-link
          v-for="article in leftArticles"
          :key="article.attributes.slug"
          :to="{ path: '/article/' + article.attributes.slug }"
          class="uk-link-reset"
        >
          <div class="uk-card uk-card-muted">
            <div class="uk-card-media-top">
              <img
                :src="api_url + article.attributes.image.data.attributes.url"
                alt=""
                height="100"
              />
            </div>
            <div class="uk-card-body">
              <p
                v-if="article.attributes.category"
                id="category"
                class="uk-text-uppercase"
              >
                {{ article.attributes.category.data.attributes.name }}
              </p>
              <p id="title" class="uk-text-large">
                {{ article.attributes.title }}
              </p>
            </div>
          </div>
        </router-link>
      </div>
      <div>
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
          <router-link
            v-for="article in rightArticles"
            :key="article.attributes.slug"
            :to="{ path: '/article/' + article.attributes.slug }"
            class="uk-link-reset"
          >
            <div class="uk-card uk-card-muted">
              <div class="uk-card-media-top">
                <img
                  :src="api_url + article.attributes.image.data.attributes.url"
                  alt=""
                  height="100"
                />
              </div>
              <div class="uk-card-body">
                <p
                  v-if="article.attributes.category"
                  id="category"
                  class="uk-text-uppercase"
                >
                  {{ article.attributes.category.data.attributes.name }}
                </p>
                <p id="title" class="uk-text-large">
                  {{ article.attributes.title }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  const props = defineProps({
    articles: {
      type: Array,
      default: () => [],
    },
  })

  const api_url = 'http://localhost:1337'

  const leftArticlesCount = computed(() =>
    Math.ceil(props?.articles?.length / 5)
  )
  const leftArticles: any = computed(() => {
    return props.articles?.slice(0, leftArticlesCount.value)
  })
  const rightArticles: any = computed(() => {
    return props.articles?.slice(leftArticlesCount.value, props.articles.length)
  })
</script>
