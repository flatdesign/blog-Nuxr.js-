<template>
  <ul class="posts-list">
    <li class="post">
      <PostPreview
        id="1"
        :edit="edit"
        title="Заголовок 1"
        description="Пример большого текста, которые не влезает в выделенную область. При этом в конец добавляется многоточие. Это все можно уидеть на приере данного блока. Приятного просмотра"
      >
      </PostPreview>
    </li>
    <li class="post">
      <PostPreview
        id="2"
        :edit="edit"
        title="Заголовок 2"
        description="Описание 2"
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



