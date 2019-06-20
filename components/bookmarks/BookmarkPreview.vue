<template>
  <a
    class="bookmark-link"
    :href="link"
    target="_blank"
  >
    <article class="bookmark-preview">
      <div class="bookmark-controls">
        <h2 class="bookmark-title">{{ title }}</h2>
        <div class="buttons" v-if="editable">
          <v-btn class="edit-button" flat icon color="white"  @click.prevent="checkoutBookmark">
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn class="delete-button" flat icon color="white"  @click.prevent="deleteBookmark">
            <v-icon>delete</v-icon>
          </v-btn>
        </div>
      </div>
      
      <div class="description">
        <p>{{ description }}</p>
      </div>

      <ul class="tags">
        <li>
          <v-btn outline small>JavaScript</v-btn>
        </li>
        <li>
          <v-btn outline small>Фронтенд</v-btn>
        </li>
        <li>
          <v-btn outline small>Новости</v-btn>
        </li>
        <li>
          <v-btn outline small>Конференции</v-btn>
        </li>
      </ul>
      

    </article>
  </a>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: false
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
      editable: {
        type: Boolean,
        default: true
      }
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
    .bookmark-controls {
      display: flex;
      align-items: flex-end;
      margin-bottom: 10px;
    }
    .bookmark-preview {
      padding: 20px 40px;
    }
    .buttons {
      margin-left: auto;
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

    .bookmark-title {
      max-width: 700px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 25px;
    }
    .description {
      overflow: hidden;
      height: 60px;
      margin-bottom: 20px;
      p {
        margin-bottom: 0;
        font-size: 16px;
        line-height: 20px;
      }
    }
    .description:before {
      content: "";
      float: left;
      width: 5px;
      height: 65px;
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
    .tags {
      padding-left: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      li {
        margin-right: 10px;
        margin-bottom: 10px;
      }
      button {
        margin: 0;
      }
    }
  }
</style>


