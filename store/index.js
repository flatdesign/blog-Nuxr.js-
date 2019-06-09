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
      async nuxtServerInit(vuexContext, nuxtContext) {
        try {
          const posts = [];
          const data = await this.$axios.$get('https://nuxtblog-eabd2.firebaseio.com/posts.json');
          for (const key in data) {
            posts.push({...data[key], id: key});
          }
          vuexContext.commit('setPosts', posts);
        } catch(e) {
          console.log(e);
        }
      },
      async addPost(vuexContext, post) {
        try {
          const data = await this.$axios.$post('https://nuxtblog-eabd2.firebaseio.com/posts.json', post);
          vuexContext.commit('addPost', {...post, id: data.name});
          return true;
        } catch(e) {
          console.log(e);
        }
      },
      async editPost(vuexContext, {post, postId}) {
        try {
          const data = await this.$axios.put(`https://nuxtblog-eabd2.firebaseio.com/posts/${postId}.json`, post);

          vuexContext.commit('editPost', {...post, id: postId});
          return true;
        } catch(e) {
          console.log(e);
        }
      },

    }
  })
}

export default createStore;
