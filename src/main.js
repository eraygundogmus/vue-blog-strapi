import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import ApolloClient from "apollo-boost";
import { createRouter, createWebHashHistory } from "vue-router";
import Articles from "./components/Articles.vue";
import App from "./App.vue";

const routes = [{ path: "/", component: Articles }];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const apolloClient = new ApolloClient({
  uri: "http://localhost:1337/graphql",
});
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});
app.use(router);
app.mount("#app");
