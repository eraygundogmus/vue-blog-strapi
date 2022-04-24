import { defineStore } from 'pinia'

export const useStore: any = defineStore('main', {
  state: () => {
    return {
      articles: [],
    }
  },
  getters: {
    getArticles: (state) => state.articles,
  },
  actions: {},
})
