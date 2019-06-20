export default {
  namespaced: true,
  state: {
    tags: ['JavaScript', 'Фронтенд', 'Программирование']
  },
  getters: {
    getTags(state) {
      return state.tags;
    }
  },
  mutations: {},
  actions: {},
}