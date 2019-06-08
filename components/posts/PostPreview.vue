<template>
  <article class="post-preview" @click.prevent="checkoutPost">
    <div class="photo"></div>
    <div class="information">
      <h2 class="post-title">{{ title }}</h2>
      <div class="description">
        <div>{{ description }}</div>
      </div>
    </div>
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
      },
      edit: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      checkoutPost() {
        if(this.edit) {
          this.$router.push(`admin/editPost/${this.id}`);
        } else {
          this.$router.push(`posts/${this.id}`);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  article.post-preview {
    cursor: pointer;
    height: 100%;
    transition: all 0.15s ease;
    background-color: #424242;
    &:hover,
    &:active {
      box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
    }
    .photo {
      height: 325px;
      background-color: lightgrey;
      background-image: url('~assets/images/default.png');
      background-size: cover;
    }
    .information {
      height: 125px;
      padding: 15px 20px;
    }
    .post-title {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 5px;
      font-size: 24px;
    }

    .description {
      overflow: hidden;
      height: 50px;
      line-height: 25px;
    }

    .description:before {
      content: "";
      float: left;
      width: 5px;
      height: 50px;
    }

    .description > *:first-child {
      float: right;
      width: 100%;
      margin-left: -5px;
    }

    .description:after {
      content: "\02026";
      box-sizing: content-box;
      float: right;
      position: relative;
      top: -25px;
      left: 100%;
      width: 3em;
      margin-left: -3em;
      padding-right: 5px;
      text-align: right;
    }
  }
</style>


