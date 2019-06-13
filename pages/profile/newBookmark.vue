<template>
  <div class="new-bookmark">
    <h1 class="new-bookmark-title">Новый пост</h1>
    <BookmarkForm @submit="formSubmit" />
  </div>
</template>

<script>
  import BookmarkForm from "@/components/bookmarks/BookmarkForm";

  export default {
    middleware: 'checkToken',
    components: {
      BookmarkForm
    },
    methods: {
      async formSubmit(bookmark) {
        try {
          const data = await this.$axios.$post(`https://nuxtblog-eabd2.firebaseio.com/bookmarks.json?auth=${localStorage.getItem("idToken")}`, bookmark);
          this.$store.commit('addBookmark', {...bookmark, id: data.name});
          this.$router.push('/profile');
        } catch(e) {
          console.log(e);
          const refreshData = await this.$store.dispatch('refreshToken',{key: process.env.APIKey, token: localStorage.getItem("refreshToken")});
          localStorage.setItem("idToken", refreshData.idToken);
          localStorage.setItem("refreshToken", refreshData.idRefreshToken);
          console.log(e);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  div.new-bookmark {
    width: 900px;
    margin: 0 auto;
    .new-bookmark-title {
      margin-bottom: 20px;
    }
  }
</style>


