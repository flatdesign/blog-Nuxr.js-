<template>
  <div class="new-post">
    <h1 class="new-post-title">Новый пост</h1>
    <PostForm />
  </div>
</template>

<script>
  import PostForm from "@/components/posts/PostForm";

  export default {
    components: {
      PostForm
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


