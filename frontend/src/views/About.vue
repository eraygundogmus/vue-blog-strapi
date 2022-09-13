<template>
  <el-main class="about">
    <h1 class="title">Eray Gündoğmuş</h1>
    <el-image class="avatar" lazy :src="getImageUrl('avatar.jpeg')" />
    <div class="social-media">
      <a
        v-for="item in data?.abouts?.data[0]?.attributes?.collapse?.socials"
        :key="item.url"
        target="_blank"
        :href="item.url"
      >
        <el-image
          lazy
          :alt="item.icon.replace('.png', ' url')"
          :src="getImageUrl(item.icon)"
          class="social-media-icon"
        />
      </a>
    </div>
    <h2 class="description">
      {{ data?.abouts?.data[0]?.attributes?.description }}
      <strong>Teknasyon.</strong>
    </h2>
    <el-main>
      <div class="collapse-wrapper">
        <el-collapse v-if="data" v-model="activeItems">
          <el-collapse-item
            v-for="(item, index) in data?.abouts?.data[0]?.attributes?.collapse
              ?.collapse"
            :key="item.name"
            :title="item.title"
            :name="index + 1"
          >
            <Stack v-if="item.stack" :stack="item.stackArray" />
            <article v-if="Array.isArray(item.desc)">
              <el-row>
                <el-col v-for="i in item.desc" :key="i.desc" :span="24">
                  <h4 class="subtitle">{{ i.title }}</h4>
                  <article v-for="x in i.desc" :key="x">{{ x }}</article>
                </el-col>
              </el-row>
            </article>
            <article v-else>
              {{ item.desc }}
            </article>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-main>
  </el-main>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import gql from 'graphql-tag'
  import { useQuery, useResult } from '@vue/apollo-composable'

  const query = gql`
    query About {
      abouts {
        data {
          attributes {
            name
            description
            collapse
          }
        }
      }
    }
  `
  const { result } = useQuery(query)

  const data = useResult(result, null, (data) => data)

  const getImageUrl = (name: string) => {
    return new URL(`../assets/images/${name}`, import.meta.url).href
  }

  const activeItems: any = ref([1, 2, 3, 4, 5])
</script>
