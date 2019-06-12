<template>
  <div class="post-wrapper">
    <section class="post">
      <h1>{{title}}</h1>
      <p>Автор - {{author}}</p>
      <div>{{description}}</div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        author: '',
        title: '',
        description: ''
      }
    },
    computed: {
      getId() {
        return this.$route.params.id
      }
    },
    methods: {
      async loadPost() {
        try {
          const post = await this.$axios.$get(`https://nuxtblog-eabd2.firebaseio.com/posts/${this.getId}.json`);
          this.author = post.author;
          this.title = post.title;
          this.description = post.description;
        } catch(e) {
          console.log(e);
        }
      }
    },
    created() {
      this.loadPost();
    }
  }
</script>
