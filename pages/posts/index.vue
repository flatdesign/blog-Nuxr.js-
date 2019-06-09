<template>
  <div class="posts-wrapper">
    <PostList :posts="getPosts"/>
  </div>
</template>

<script>
  import PostList from '@/components/posts/PostList'

  export default {
    components: {
      PostList
    },
    computed: {
      getPosts() {
        return this.$store.getters.loadedPosts;
      }
    }
  }
</script>

<style lang="scss" scoped>
  div.posts-wrapper {

  }
</style>


