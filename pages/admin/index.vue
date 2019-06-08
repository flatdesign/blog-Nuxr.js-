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


    <PostList :edit="true"/>
  </div>
</template>

<script>
  import PostList from '@/components/posts/PostList';
  export default {
    components: {
      PostList
    },
    methods: {
      checkoutNewPost() {
        this.$router.push('admin/newPost');
      }
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

