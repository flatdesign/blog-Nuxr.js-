<template>
  <ul class="bookmark-list">
    <li
      class="bookmark"
      v-for="bookmark in bookmarks"
      :key="bookmark.id"
    >
      <BookmarkPreview
        :id="bookmark.id"
        :title="bookmark.title"
        :link="bookmark.link"
        :description="bookmark.description"
      >
      </BookmarkPreview>
    </li>
  </ul>
</template>

<script>
  import BookmarkPreview from '@/components/bookmarks/BookmarkPreview';

  export default {
    props: {
      bookmarks: {
        type: Array,
        required: true
      }
    },
    components: {
      BookmarkPreview
    },
    methods: {

    }
  }
</script>


<style lang="scss" scoped>
  ul.bookmark-list {
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    .bookmark {
      margin-bottom: 15px;
      width: 100%;
    }
  }
</style>



