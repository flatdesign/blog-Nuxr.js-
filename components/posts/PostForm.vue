<template>
  <form class="post-form">
    <v-text-field
      solo
      label="Автор"
      required
      v-model="editedPost.author"
      :error-messages="authorErrors"
      @input="$v.editedPost.author.$touch()"
      @blur="$v.editedPost.author.$touch()"
    ></v-text-field>
    <v-text-field
      solo
      label="Название"
      required
      v-model="editedPost.title"
      :error-messages="titleErrors"
      @input="$v.editedPost.title.$touch()"
      @blur="$v.editedPost.title.$touch()"
    ></v-text-field>
    <v-text-field
      solo
      label="Текст на превью"
      required
      v-model="editedPost.previewText"
      :error-messages="previewTextErrors"
      @input="$v.editedPost.previewText.$touch()"
      @blur="$v.editedPost.previewText.$touch()"
    ></v-text-field>
    <v-textarea
      solo
      label="Текст поста"
      required
      name="postText"
      v-model="editedPost.description"
      :error-messages="descriptionErrors"
      @input="$v.editedPost.description.$touch()"
      @blur="$v.editedPost.description.$touch()"
    ></v-textarea>
    <v-btn @click="submit" large>Сохранить</v-btn>
    <v-btn @click="clear" large>Очистить</v-btn>
    <v-btn @click="back" large>Отмена</v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate';
  import { required, minLength } from 'vuelidate/lib/validators';


  export default {
    mixins: ['validationMixin'],
    props: {
      postParams: {
        type: Object,
        required: false
      }

    },
    data() {
      return {
        editedPost: this.postParams ? {...this.postParams} : {
          title: '',
          description: '',
          author: '',
          previewText: ''
        }
      }
    },
    computed: {
      titleErrors() {
        const errors = [];
        if (!this.$v.editedPost.title.$dirty) return errors;
        !this.$v.editedPost.title.minLength && errors.push('Заголовок не должен быть короче 5 символов');
        !this.$v.editedPost.title.required && errors.push('Заголовок не должен быть пустым');
        return errors;
      },
      descriptionErrors() {
        const errors = [];
        if (!this.$v.editedPost.description.$dirty) return errors;
        !this.$v.editedPost.description.minLength && errors.push('Описание не должно быть короче 50 символов');
        !this.$v.editedPost.description.required && errors.push('Описание не должно быть пустым');
        return errors;
      },
      authorErrors() {
        const errors = [];
        if (!this.$v.editedPost.description.$dirty) return errors;
        !this.$v.editedPost.author.required && errors.push('Укажите автора');
        return errors;
      },
      previewTextErrors() {
        const errors = [];
        if (!this.$v.editedPost.description.$dirty) return errors;
        !this.$v.editedPost.previewText.minLength && errors.push('Текст на превью не должен быть короче 10 символов');
        !this.$v.editedPost.previewText.required && errors.push('Описание не должно быть пустым');
        return errors;
      },
    },
    methods: {
      submit() {
        this.$v.editedPost.$touch();
        if (this.$v.editedPost.$invalid) {
          alert("Проверьте правильность введенных данных");
        } else {
          this.$emit('submit', this.editedPost);
        }
      },
      clear() {
        this.$v.editedPost.$reset();
        this.editedPosttitle = '';
        this.editedPostdescription = '';
      },
      back() {
        this.$router.go(-1);
      }
    },
    validations: {
      editedPost: {
        title: {
          required,
          minLength: minLength(5)
        },
        description: {
          required,
          minLength: minLength(50)
        },
        author: {
          required,
        },
        previewText: {
          required,
          minLength: minLength(10)
        },
      }
    },
    watch: {
      postParams(post) {
        this.editedPost = post;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>


