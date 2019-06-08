<template>
  <article class="post-preview" @click.prevent="checkoutPost">
    <div class="photo"></div>
    <h2 class="title">{{ title }}</h2>
    <p class="description">{{ description }}</p>
  </article>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    },
    methods: {
      checkoutPost() {
        this.$router.push(`posts/${this.id}`);
      }
    }
  }
</script>

<style lang="scss" scoped>
  article.post-preview {
    width: 500px;

    cursor: pointer;
    transition: all 0.15s ease;
    &:hover,
    &:active {
      box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
    }
    .photo {
      width: 300px;
      height: 200px;
      background-color: lightgrey;
      background-image: url('~assets/images/default.png');
      background-size: cover;
    }
  }
</style>


