<template>
  <div>
    <div class="uk-child-width-1-2" uk-grid>
      <div>
        <router-link
          v-for="article in leftArticles"
          :to="{ path: '/article/' + article.attributes.slug }"
          class="uk-link-reset"
          :key="article.attributes.slug"
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
                id="category"
                v-if="article.attributes.category"
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
            :to="{ path: '/article/' + article.attributes.slug }"
            class="uk-link-reset"
            :key="article.attributes.slug"
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
                  id="category"
                  v-if="article.attributes.category"
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

<script setup>
import { computed } from "vue";
const props = defineProps({
  articles: {
    type: Array,
  },
});

const api_url = "http://localhost:1337";

const leftArticlesCount = computed(() =>
  Math.ceil(props?.articles?.length / 5)
);
const leftArticles = computed(() => {
  return props.articles?.slice(0, leftArticlesCount.value);
});
const rightArticles = computed(() => {
  return props.articles?.slice(leftArticlesCount.value, props.articles.length);
});
</script>
