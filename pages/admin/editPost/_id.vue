<template>
  <div class="edit-post">
    <h1 class="new-post-title">Редактировние поста</h1>
    <PostForm :postParams="post" @submit="formSubmit"/>
  </div>
</template>

<script>
  import PostForm from "@/components/posts/PostForm";

  export default {
    components: {
      PostForm
    },
    async asyncData ({ params, $axios }) {
      try {
        const data  = await $axios.$get(`https://nuxtblog-eabd2.firebaseio.com/posts/${params.id}.json`);
        return { post: data }
      } catch(e) {
        console.log(e);
      }
    },
    computed: {
      getId() {
        return this.$route.params.id;
      }
    },
    methods: {
      async formSubmit(editedPost) {
        try {
          if(await this.$store.dispatch('editPost', {post: editedPost, postId: this.getId}))
            this.$router.push('/admin');
        } catch(e) {
          console.log(e);
        }
      }
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

