<template>
  <form class="bookmark-form">
    <label>
      Название закладки
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
      Ссылка на источник
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
    <v-textarea
      solo
      label="Описание"
      required
      name="postText"
      v-model="bookmark.description"
      :error-messages="descriptionErrors"
      @input="$v.bookmark.description.$touch()"
      @blur="$v.bookmark.description.$touch()"
    ></v-textarea>
    <v-btn @click="submit" large>Сохранить</v-btn>
    <v-btn @click="back" large>Отмена</v-btn>
  </form>
</template>

<script>
  import { validationMixin } from 'vuelidate';
  import { required, minLength } from 'vuelidate/lib/validators';


  export default {
    mixins: ['validationMixin'],
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
          lenk: '',
          description: ''
        }
      }
    },
    computed: {
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
  form.bookmark {

  }
</style>


