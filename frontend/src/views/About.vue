<template>
  <el-main class="about">
    <h3 class="title">Eray Gündoğmuş</h3>
    <el-image class="avatar" :src="getImageUrl('avatar.jpeg')" />
    <div class="social-media">
      <a
        v-for="item in socials"
        :key="item.url"
        target="_blank"
        :href="item.url"
      >
        <el-image :src="getImageUrl(item.icon)" class="social-media-icon" />
      </a>
    </div>
    <div class="description">
      I am a Frontend Dev. and I work at <strong>Teknasyon.</strong>
    </div>
    <el-main>
      <div class="collapse-wrapper">
        <el-collapse>
          <el-collapse-item
            v-for="item in collapse"
            :key="item.name"
            :title="item.title"
            :name="item.name"
          >
            <Stack v-if="item.stack" />
            <div v-if="Array.isArray(item.desc)">
              <el-row>
                <el-col v-for="i in item.desc" :key="i.desc" :span="24">
                  <strong>{{ i.title }}</strong>
                  <li v-for="x in i.desc" :key="x">{{ x }}</li>
                </el-col>
              </el-row>
            </div>
            <p v-else>
              {{ item.desc }}
            </p>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-main>
  </el-main>
</template>

<script setup lang="ts">
  const getImageUrl = (name: string) => {
    return new URL(`../assets/images/${name}`, import.meta.url).href
  }

  const socials: Array<any> = [
    { icon: 'github.png', url: 'https://github.com/eraygundogmus' },
    { icon: 'twitter.png', url: 'https://twitter.com/eraygundgms' },
    { icon: 'medium.png', url: 'https://medium.com/@gundogmuseray' },
    { icon: 'linkedin.png', url: 'https://www.linkedin.com/in/eraygundogmus/' },
    { icon: 'email.png', url: 'mailto:gundogmuseray@gmail.com' },
  ]
  const collapse: Array<any> = [
    {
      title: 'Brief',
      name: '1',
      desc: 'My main goal in frontend is to create a smooth user experience while maintaining design, semantics, and code quality and keep improve my hands-on code skills. I am a quick learner, self-disciplined, full-time bug fixer and a JavaScript lover.',
    },
    {
      title: 'Experiences',
      name: '2',
      desc: [
        {
          title: 'Teknasyon',
          desc: [
            'Experience developing high-traffic applications in GetContact team with most skilled engineers in country.',
            'Use Vue3, Bootstrap 5, Storybook, Vuex, Nuxt and CoreJS',
            'Learning better communicate and leadership with a coach',
          ],
        },
        {
          title: 'ICS Defense',
          desc: [
            'Developing new features, functionality and capabilities on the main project ICS Sight using Vue, Vuex, vue- echarts, axios, vue-wait, vuedraggable, d3 and SCSS.',
            'Created two JAMStack websites using Next, MDX, and TailwindCSS in one, and Nuxt, Strapi, SCSS in the other, both including i18n support.',
            'Daily maintenance of code, debugging issues and solving clients problems',
            'Working with an agile team of 11 members and provided end-to-end solutions for clients',
            'I had the responsibility to train one people the frontend basics and helped them develop further',
          ],
        },
        {
          title: 'Tech Chaps',
          desc: [
            'Succesfully developed client-side of Clubbie platform by using Next, SCSS, CSS Modules',
            'Implemented a factory pattern for HTTP services to connect backend and frontend.',
            'Collabrated with other team members, did code reviews and resolved conflicts for client side.',
            'Worked with backend engineers to see projects through, from onception to completion',
          ],
        },
        {
          title: 'Freelance',
          desc: [
            'Mostly used HTML, CSS and WordPress to create websites. In June 2020, I decided to improve my software developer skills, continue as a developer instead of designer. And I started to follow a frontend developer roadmap. Since then, I develop projects and improve myself as a frontend developer.',
            'I spend time to understand terms such as user experience, wireframing, prototyping and I tried to implement my design knowledge and design eye into UI.',
            'Hands-on experience in UI kits, CSS frameworks',
            'Worked design softwares such as Figma, AdobeXd, Blender. Photoshop.',
          ],
        },
      ],
    },

    {
      stack: true,
      title: 'Tech Stack',
      name: '4',
      // desc: 'Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to',
    },
    {
      title: 'Soft Skills',
      name: '5',
      desc: 'Communication, empathy, patience, open-mindedness and adaptability, critical thinking, creativity, and problem-solving, accountability, humility, and humbleness, confidence, management(people, time and project), teamwork and collaboration',
    },
    // {
    //   title: 'Background',
    //   name: '3',
    //   desc: '',
    // },
  ]
</script>
