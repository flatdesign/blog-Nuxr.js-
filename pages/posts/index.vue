<template>
  <div class="posts-wrapper">
    <PostPreview
      id="1"
      title="заголовок 1"
      description="Описание 1">
    </PostPreview>
    <PostPreview
      id="2"
      title="заголовок 2"
      description="Описание 2">
    </PostPreview>
  </div>
</template>

<script>
  import PostPreview from '~/components/posts/PostPreview'

  export default {
    components: {
      PostPreview
    }
  }
</script>

