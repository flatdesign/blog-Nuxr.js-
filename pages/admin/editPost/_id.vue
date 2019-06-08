<template>
  <div class="edit-post">
    <h1 class="new-post-title">Редактировние поста {{getId}}</h1>
    <PostForm />
  </div>
</template>

<script>
  import PostForm from "@/components/posts/PostForm";

  export default {
    components: {
      PostForm
    },
    computed: {
      getId() {
        return this.$route.params.id;
      }
    }
  }
</script>

<style lang="scss" scoped>
  div.edit-post {

  }
</style>

