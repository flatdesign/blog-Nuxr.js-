<template>
  <div class="posts-wrapper">
    <v-btn class="reload-button" outline @click="loadPosts">Обновить</v-btn>
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
    },
    methods: {
      async loadPosts() {
        try {
          const posts = [];
          const data = await this.$axios.$get('https://nuxtblog-eabd2.firebaseio.com/posts.json');
          for (const key in data) {
            posts.push({...data[key], id: key});
          }
          this.$store.commit('setPosts', posts);
        } catch(e) {
          console.log(e);
        }
      },
    },
    created() {
      this.loadPosts();
    }
  }
</script>

<style lang="scss" scoped>
  div.posts-wrapper {
    .reload-button {
      margin-left: 0;
      margin-bottom: 10px;
    }
  }
</style>


