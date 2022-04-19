<template>
  <div>
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li>
            <a href="/">Strapi Blog </a>
          </li>
        </ul>
      </div>

      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li v-for="category in categories.data" v-bind:key="category.id">
            <router-link
              :to="{ path: '/category/' + category.attributes.slug }"
              :key="category.attributes.slug"
            >
              {{ category.attributes.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  import gql from 'graphql-tag'
  export default {
    name: 'Nav',
    data() {
      return {
        categories: [],
      }
    },
    apollo: {
      categories: gql`
        query Categories {
          categories {
            data {
              id
              attributes {
                slug
                name
              }
            }
          }
        }
      `,
    },
  }
</script>
