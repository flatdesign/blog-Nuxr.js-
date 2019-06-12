<template>
  <div class="admin-wrapper">
    <div class="controls">
      <div class="search-wrapper">
        <label class="search-title"><span>Редатировать пост</span>
          <v-text-field
            class="search-input"
            solo
            label="Название"
            clearable
            append-icon="search"
          ></v-text-field>
        </label>
      </div>
      <v-btn large outline dark class="new-post" @click="checkoutNewPost">Создать новый</v-btn>
    </div>

    <PostList :edit="true" :posts="getPosts" />
  </div>
</template>

<script>
  import PostList from '@/components/posts/PostList';
  export default {
    middleware: 'checkToken',
    components: {
      PostList
    },
    methods: {
      checkoutNewPost() {
        this.$router.push('admin/newPost');
      },
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
    computed: {
      getPosts() {
        return this.$store.getters.loadedPosts;
      }
    },
    created() {
      this.loadPosts();
    }
  }
</script>


<style lang="scss" scoped>
  div.admin-wrapper {
    .controls {
      display: flex;
      align-items: flex-end;
      .search-wrapper {
        margin-right: 15px;
      }
    }
    .search-title {
      span {
        display: inline-block;
        margin-bottom: 10px;
      }

    }
    .search-input {
      width: 300px;
    }
    .new-post {
      margin-bottom: 28px;
    }
  }
</style>

