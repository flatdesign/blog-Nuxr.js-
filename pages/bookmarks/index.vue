<template>
  <div class="bookmarks-wrapper">
    <v-btn class="reload-button" outline @click="loadBookmarks">Обновить</v-btn>
    <BookmarkList :bookmarks="getBookmarks"/>
  </div>
</template>

<script>
  import BookmarkList from '@/components/bookmarks/BookmarkList'

  export default {
    components: {
      BookmarkList
    },
    computed: {
      getBookmarks() {
        return this.$store.getters.getBookmarks;
      }
    },
    methods: {
      async loadBookmarks() {
        try {
          const bookmarks = [];
          const data = await this.$axios.$get('https://nuxtblog-eabd2.firebaseio.com/bookmarks.json');
          for (const key in data) {
            bookmarks.push({...data[key], id: key});
          }
          this.$store.commit('setBookmarks', bookmarks);
        } catch(e) {
          console.log(e);
        }
      },
    },
    created() {
      this.loadBookmarks();
    }
  }
</script>

<style lang="scss" scoped>
  div.bookmarks-wrapper {
    .reload-button {
      margin-left: 0;
      margin-bottom: 10px;
    }
  }
</style>


