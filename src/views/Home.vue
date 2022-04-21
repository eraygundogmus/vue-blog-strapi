<template>
  <el-main class="home">
    <h3 class="title">Eray Gündoğmuş</h3>
    <el-image :src="getImageUrl('avatar.jpeg')" />
    <div class="description">
      I am a Frontend Dev. and I work at <strong>Teknasyon.</strong>
    </div>
    <el-main>
      <el-collapse class="collapse">
        <el-collapse-item
          v-for="item in collapse"
          :key="item.name"
          :title="item.title"
          :name="item.name"
        >
          <div>
            {{ item.desc }}
          </div>
        </el-collapse-item>
      </el-collapse></el-main
    >
  </el-main>
</template>

<script setup lang="ts">
  const getImageUrl = (name: string) => {
    return new URL(`../assets/images/${name}`, import.meta.url).href
  }

  const collapse: Array<any> = [
    {
      title: 'Background',
      name: '1',
      desc: 'Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to',
    },
    {
      title: 'Consistency',
      name: '2',
      desc: 'Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to',
    },
    {
      title: 'Feedback',
      name: '3',
      desc: 'Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to',
    },
    {
      title: 'Efficiency',
      name: '4',
      desc: 'Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to',
    },
    {
      title: 'Controllability',
      name: '5',
      desc: 'Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to',
    },
  ]
  // import Nav from '@/components/Nav.vue'

  // import gql from "graphql-tag";
  // export default {
  //   name: "Nav",
  //   data() {
  //     return {
  //       categories: [],
  //     };
  //   },
  //   apollo: {
  //     categories: gql`
  //       query Categories {
  //         categories {
  //           data {
  //             id
  //             attributes {
  //               slug
  //               name
  //             }
  //           }
  //         }
  //       }
  //     `,
  //   },
  // };
</script>
