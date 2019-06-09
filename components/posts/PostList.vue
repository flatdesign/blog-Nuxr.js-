<template>
  <ul class="posts-list">
    <li v-for="post in posts" :key="post.id" class="post">
      <PostPreview
        :edit="edit"
        :id="post.id"
        :title="post.title"
        :author="post.author"
        :previewText="post.previewText"
      >
      </PostPreview>
    </li>
  </ul>
</template>

<script>
  import PostPreview from '@/components/posts/PostPreview';

  export default {
    props: {
      edit: {
        type: Boolean,
        default: false
      },
      posts: {
        type: Array,
        required: true
      }
    },

    components: {
      PostPreview
    }
  }
</script>


<style lang="scss" scoped>
  ul.posts-list {
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    .post {
      margin-right: 15px;
      width: 600px;
      height: 450px;
    }
  }
</style>



