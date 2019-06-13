<template>
  <div class="edit-bookmark">
    <h1 class="new-bookmark-title">Редактировние поста</h1>
    <BookmarkForm :params="bookmark" @submit="formSubmit"/>
  </div>
</template>

<script>
  import BookmarkForm from "@/components/bookmarks/BookmarkForm";

  export default {
    data() {
      return {
        bookmark: null
      }
    },
    middleware: 'checkToken',
    components: {
      BookmarkForm
    },
    computed: {
      getId() {
        return this.$route.params.id;
      }
    },
    methods: {
      async loadPost() {
        try {
          const bookmark = await this.$axios.$get(`https://nuxtblog-eabd2.firebaseio.com/bookmarks/${this.getId}.json`);
          this.bookmark = bookmark;
        } catch(e) {
          console.log(e);
        }
      },
      async formSubmit(bookmark) {
        try {
          const data = await this.$axios.put(`https://nuxtblog-eabd2.firebaseio.com/bookmarks/${this.getId}.json?auth=${localStorage.getItem("idToken")}`, bookmark);
          this.$store.commit('editBookmark', {...bookmark, id: this.getId});
          this.$router.push('/profile');
        } catch(e) {
          const refreshData = await this.$store.dispatch('refreshToken',{key: process.env.APIKey, token: localStorage.getItem("refreshToken")});
          localStorage.setItem("idToken", refreshData.idToken);
          localStorage.setItem("refreshToken", refreshData.idRefreshToken);
          console.log(e);
        }
      }
    },
    created() {
      this.loadPost();
    }
  }
</script>

<style lang="scss" scoped>
  div.edit-bookmark {
    width: 100%;
    margin: 0 auto;
    .new-bookmark-title {
      margin-bottom: 20px;
    }
  }
</style>

