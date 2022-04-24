import App from './App.vue'
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import ApolloClient from 'apollo-boost'
import router from './router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/scss/main.scss'

const apolloClient = new ApolloClient({
  uri: import.meta.env.VITE_APP_GRAPHQL_URL,
})
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})

app.use(router)
app.use(createPinia())
app.use(ElementPlus)
app.mount('#vite')
