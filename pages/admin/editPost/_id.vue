<template>
  <div class="edit-post">
    <h1 class="new-post-title">Редактировние поста</h1>
    <PostForm :postParams="post" @submit="formSubmit"/>
  </div>
</template>

<script>
  import PostForm from "@/components/posts/PostForm";

  export default {
    data() {
      return {
        post: null
      }
    },
    middleware: 'checkToken',
    components: {
      PostForm
    },
    computed: {
      getId() {
        return this.$route.params.id;
      }
    },
    methods: {
      async loadPost() {
        try {
          const post = await this.$axios.$get(`https://nuxtblog-eabd2.firebaseio.com/posts/${this.getId}.json`);
          this.post = post;
        } catch(e) {
          console.log(e);
        }
      },
      async formSubmit(post) {
        try {
          const data = await this.$axios.put(`https://nuxtblog-eabd2.firebaseio.com/posts/${this.getId}.json?auth=${localStorage.getItem("idToken")}`, post);
          this.$store.commit('editPost', {...post, id: this.getId});
          this.$router.push('/admin');
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
  div.edit-post {
    width: 900px;
    margin: 0 auto;
    .new-post-title {
      margin-bottom: 20px;
    }
  }
</style>

