import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      sideBarStatus: false,
      bookmarks: []
    },
    getters: {
      getBookmarks(state) {
        return state.bookmarks;
      },
      getSideBarStatus(state) {
        return state.sideBarStatus;
      }
    },
    mutations: {
      setSideBarStatus(state, status) {
        state.sideBarStatus = status;
      },
      setBookmarks(state, bookmarks) {
        state.bookmarks = bookmarks;
      },
      addBookmark(state, bookmark) {
        state.bookmarks.push(bookmark);
      },
      editBookmark(state, bookmark) {
        for(let i = 0; i < state.bookmarks.length; i++) {
          if(state.bookmarks[i].id === bookmark.id) {
            state.bookmarks[i] = bookmark;
            return;
          }
        }
      },
      deleteBookmark(state, id) {
        for(let i = 0; i < state.bookmarks.length; i++) {
          if(state.bookmarks[i].id === id) {
            state.bookmarks.splice(i, 1);
            return;
          }
        }
      },
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
