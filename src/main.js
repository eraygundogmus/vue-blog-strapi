import App from "./App.vue";
import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import ApolloClient from "apollo-boost";
import router from "./router";
import { createPinia } from "pinia";

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
app.use(createPinia());
app.mount("#app");
