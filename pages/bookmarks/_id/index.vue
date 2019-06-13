<template>
  <div class="bookmark-wrapper">
    <section class="bookmark">
      <h1>{{title}}</h1>
      <div>{{description}}</div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
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
      async loadbookmark() {
        try {
          const bookmark = await this.$axios.$get(`https://nuxtblog-eabd2.firebaseio.com/bookmarks/${this.getId}.json`);
          this.title = bookmark.title;
          this.description = bookmark.description;
        } catch(e) {
          console.log(e);
        }
      }
    },
    created() {
      this.loadbookmark();
    }
  }
</script>
