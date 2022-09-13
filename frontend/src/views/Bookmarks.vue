<template>
  <el-main class="bookmarks">
    <h3>Here is a list of my bookmarks</h3>

    <el-row class="bookmarks-row" justify="center">
      <el-popover
        v-for="item in data?.categories?.data"
        :key="item?.attributes.name"
        placement="bottom-start"
        :width="200"
        trigger="hover"
        :content="item?.attributes?.description"
      >
        <template #reference>
          <el-button style="margin: 10px">
            <a target="_blank" :href="item?.attributes?.url">
              {{ item?.attributes?.name }}
            </a>
          </el-button>
        </template>
      </el-popover>
    </el-row>
  </el-main>
</template>
<script setup lang="ts">
  import gql from 'graphql-tag'
  import { useQuery, useResult } from '@vue/apollo-composable'

  const query = gql`
    query Category {
      categories(sort: "createdAt:desc", pagination: { limit: 100 }) {
        data {
          attributes {
            name
            url
            description
          }
        }
      }
    }
  `
  const { result } = useQuery(query)

  const data = useResult(result, null, (data) => data)
</script>
