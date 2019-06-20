<template>
  <div class="profile-wrapper">
    <div class="controls">
      <div class="search-wrapper">
        <label class="search-title"><span>Найти закладку</span>
          <v-text-field
            class="search-input"
            solo
            label="Название или описание"
            clearable
            append-icon="search"
            v-model="search"
          ></v-text-field>
        </label>
      </div>
      <v-btn large outline dark class="new-post" @click="checkoutNewPost">Создать новую</v-btn>
    </div>

    <BookmarkList :edit="true" :bookmarks="getBookmarks" />
  </div>
</template>

<script>
  import BookmarkList from '@/components/bookmarks/BookmarkList';
  import {mapGetters, mapMutations} from 'vuex';

  export default {
    middleware: 'checkToken',
    components: {
      BookmarkList
    },
    data() {
      return {
        search: ''
      }
    },
    computed: {
      ...mapGetters({
        bookmarks: 'bookmarks/getBookmarks'
      }),
      getBookmarks() {
        return this.bookmarks.filter(el => {
          return el.title.toLowerCase().indexOf(this.search.trim().toLowerCase()) !== -1 || el.description.toLowerCase().indexOf(this.search.trim().toLowerCase()) !== -1;
        });
      },

    },
    methods: {
      ...mapMutations({
        setBookmarks: 'bookmarks/setBookmarks'
      }),
      checkoutNewPost() {
        this.$router.push('profile/newBookmark');
      },
      async loadBookmarks() {
        try {
          const posts = [];
          const data = await this.$axios.$get('https://nuxtblog-eabd2.firebaseio.com/bookmarks.json');
          for (const key in data) {
            posts.push({...data[key], id: key});
          }
          this.setBookmarks(posts);
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
  div.profile-wrapper {
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

