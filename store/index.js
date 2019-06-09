import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    getters: {
      loadedPosts(context) {
        return context.loadedPosts;
      }
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, nuxtContext) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [{
              id: '1',
              title: 'Заголовок 1',
              previewText: 'Описание 1',
              author: 'Данил Чушко',
            }, {
              id: '2',
              title: 'Заголовок 2',
              previewText: 'Описание 2',
              author: 'Данил Чушко',
            }]);
            resolve();
          }, 1500);
        });
      },
      setPosts(context, posts) {
        context.commit('setLoadedPosts', posts);
      }
    }
  })
}

export default createStore;
