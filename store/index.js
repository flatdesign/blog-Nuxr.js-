import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      sideBarStatus: false,
      loadedPosts: []
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      getSideBarStatus(state) {
        return state.sideBarStatus;
      }
    },
    mutations: {
      setSideBarStatus(state, status) {
        state.sideBarStatus = status;
      },
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, newPost) {
        state.loadedPosts.push(newPost);
      },
      editPost(state, editedPost) {
        for(let i = 0; i < state.loadedPosts.length; i++) {
          if(state.loadedPosts[i].id === editedPost.id) {
            state.loadedPosts[i] = editedPost;
            return;
          }
        }
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
