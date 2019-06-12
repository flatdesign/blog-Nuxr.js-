<template>
  <div class="new-post">
    <h1 class="new-post-title">Новый пост</h1>
    <PostForm @submit="formSubmit" />
  </div>
</template>

<script>
  import PostForm from "@/components/posts/PostForm";

  export default {
    middleware: 'checkToken',
    components: {
      PostForm
    },
    methods: {
      async formSubmit(post) {
        try {
          const data = await this.$axios.$post(`https://nuxtblog-eabd2.firebaseio.com/posts.json?auth=${localStorage.getItem("idToken")}`, post);
          this.$store.commit('addPost', {...post, id: data.name});
          this.$router.push('/admin');
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
  div.new-post {
    width: 900px;
    margin: 0 auto;
    .new-post-title {
      margin-bottom: 20px;
    }
  }
</style>


