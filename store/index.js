import Vuex from 'vuex';
import tags from '@/store/tags';
import bookmarks from '@/store/bookmarks';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      tags,
      bookmarks
    },
    state: {
      sideBarStatus: false,
    },
    getters: {
      getSideBarStatus(state) {
        return state.sideBarStatus;
      }
    },
    mutations: {
      setSideBarStatus(state, status) {
        state.sideBarStatus = status;
      }
    },
    actions: {
      async refreshToken(context, payload) {
        try {
          const data = await this.$axios.$post(`https://securetoken.googleapis.com/v1/token?key=${payload.key}`, {grant_type: "refresh_token", refresh_token: payload.token});
          return {idToken: data["id_token"], idRefreshToken: data["refresh_token"]}
        } catch(e) {
          console.log(e);
        }

      }
    }
  })
}

export default createStore;
