<template>
  <div class="new-post">
    <h1 class="new-post-title">Новый пост</h1>
    <PostForm @submit="formSubmit" />
  </div>
</template>

<script>
  import PostForm from "@/components/posts/PostForm";

  export default {
    components: {
      PostForm
    },
    methods: {
      async formSubmit(post) {
        try {
          if(await this.$store.dispatch('addPost', post));
            this.$router.push('/admin');
        } catch(e) {
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


