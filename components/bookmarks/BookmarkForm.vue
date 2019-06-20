<template>
  <div class="bookmark-form-wrapper">
    <BookmarkPreview
      :editable="false"
      :title="bookmark.title"
      :link="bookmark.link"
      :description="bookmark.description">
    </BookmarkPreview>
    <form class="bookmark-form">
      <label>
        <span>Название закладки: </span>
        <v-text-field
          solo
          label="Название закладки"
          required
          v-model="bookmark.title"
          :error-messages="titleErrors"
          @input="$v.bookmark.title.$touch()"
          @blur="$v.bookmark.title.$touch()"
        ></v-text-field>
      </label>
      <label>
        <span>Ссылка на источник: </span> 
        <v-text-field
          solo
          label="Ссылка на источник"
          required
          v-model="bookmark.link"
          :error-messages="linkErrors"
          @input="$v.bookmark.link.$touch()"
          @blur="$v.bookmark.link.$touch()"
        ></v-text-field>
      </label>
      <label>
        <span>Описание: </span>
        <v-textarea
          solo
          label="Описание"
          required
          name="postText"
          height="150"
          v-model="bookmark.description"
          :error-messages="descriptionErrors"
          @input="$v.bookmark.description.$touch()"
          @blur="$v.bookmark.description.$touch()"
        ></v-textarea>
      </label>
      <label>
        <span>Теги: 
          <v-autocomplete
            v-model="bookmark.tags"
            :items="getTags"
            chips
            solo
            item-text="text"
            item-value="text"
            multiple
          >
          </v-autocomplete>
        </span>
      </label>
      <v-btn @click="submit" large>Сохранить</v-btn>
      <v-btn @click="back" large>Отмена</v-btn>
    </form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate';
  import { required, minLength } from 'vuelidate/lib/validators';
  import { mapGetters } from 'vuex';
  import BookmarkPreview from '@/components/bookmarks/BookmarkPreview';


  export default {
    mixins: ['validationMixin'],
    components: {
      BookmarkPreview
    },
    props: {
      params: {
        type: Object,
        required: false
      }

    },
    data() {
      return {
        bookmark: this.params ? {...this.params} : {
          title: '',
          link: '',
          description: '',
          tags: []
        }
      }
    },
    computed: {
      ...mapGetters({
        getTags: 'tags/getTags'
      }),
      titleErrors() {
        const errors = [];
        if (!this.$v.bookmark.title.$dirty) return errors;
        !this.$v.bookmark.title.minLength && errors.push('Название не должно быть короче 5 символов');
        !this.$v.bookmark.title.required && errors.push('Название не должно быть пустым');
        return errors;
      },
      linkErrors() {
        const errors = [];
        if (!this.$v.bookmark.link.$dirty) return errors;
        !this.$v.bookmark.link.required && errors.push('Ссылка не должна быть пустой');
        return errors;
      },
      descriptionErrors() {
        const errors = [];
        if (!this.$v.bookmark.description.$dirty) return errors;
        !this.$v.bookmark.description.minLength && errors.push('Описание не должно быть короче 10 символов');
        !this.$v.bookmark.description.required && errors.push('Описание не должно быть пустым');
        return errors;
      }
    },
    methods: {
      submit() {
        this.$v.bookmark.$touch();
        if (this.$v.bookmark.$invalid) {
          alert("Проверьте правильность введенных данных");
        } else {
          this.$emit('submit', this.bookmark);
        }
      },
      back() {
        this.$router.go(-1);
      }
    },
    validations: {
      bookmark: {
        title: {
          required,
          minLength: minLength(5)
        },
        link: {
          required,
        },
        description: {
          required,
          minLength: minLength(10)
        }
      }
    },
    watch: {
      params(bookmark) {
        this.bookmark = bookmark;
      }
    }
  }
</script>

<style lang="scss" scoped>
  form.bookmark-form {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    label {
      span {
        display: inline-block;
        margin-bottom: 10px;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
</style>


