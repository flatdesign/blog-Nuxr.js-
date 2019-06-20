export default {
  namespaced: true,
  state: {
    bookmarks: []
  },
  getters: {
    getBookmarks(state) {
      return state.bookmarks;
    },
  },
  mutations: {
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
    }
  }
}