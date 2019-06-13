<template>
  <a
    class="bookmark-link"
    :href="link"
    target="_blank"
  >
    <article class="bookmark-preview">
      <h2 class="title">{{ title }}</h2>
      <div class="description">
        <div>{{ description }}</div>
      </div>
      <div class="buttons">
        <v-btn class="edit-button" flat icon color="white"  @click.prevent="checkoutBookmark">
          <v-icon>edit</v-icon>
        </v-btn>
        <v-btn class="delete-button" flat icon color="white"  @click.prevent="deleteBookmark">
          <v-icon>delete</v-icon>
        </v-btn>
      </div>

    </article>
  </a>
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
      link: {
        type: String,
        required: true
      },
    },
    methods: {
      checkoutBookmark() {
        this.$router.push(`profile/editBookmark/${this.id}`);
      },
      async deleteBookmark() {
        try {
          const bookmark = await this.$axios.delete(`https://nuxtblog-eabd2.firebaseio.com/bookmarks/${this.id}.json?auth=${localStorage.getItem("idToken")}`);
          this.$store.commit("deleteBookmark", this.id)
        } catch(e) {
          console.log(e);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  a.bookmark-link {
    text-decoration: none;
    color: #ffffff;
    transition: all 0.15s ease;
    display: block;
    background-color: #424242;
    &:hover,
    &:focus {
      outline: none;
      box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
    }
    .bookmark-preview {
      position: relative;
      padding: 20px 40px;
    }
    .buttons {
      position: absolute;
      top: 12px;
      right: 10px;
      .edit-button,
      .delete-button {
        margin: 0;
        margin-right: 5px;
        opacity: 0.3;
        &:focus, &:active, &:hover {
          opacity: 1;
        }
      }
    }

    .title {
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


