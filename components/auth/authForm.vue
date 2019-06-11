<template>
  <form class="auth-form">
    <label>
      <span>Email</span>
      <v-text-field
        solo
        label="Email"
        required
        type="email"
        v-model="email"
        :error-messages="emailErrors"
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
    </label>
    <label>
      <span>Пароль</span>
      <v-text-field
        solo
        label="Пароль"
        required
        type="password"
        v-model="password"
        :error-messages="passwordErrors"
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      ></v-text-field>
    </label>
    <v-btn @click="submit" v-if="formType === 'signIn'" large>Войти</v-btn>
    <v-btn @click="submit" v-else large>Регистрация</v-btn>
    <nuxt-link to="auth/passRecovery" v-if="formType === 'signIn'">Забыли пароль</nuxt-link>
    <nuxt-link to="/auth" v-else>Войти</nuxt-link>
  </form>
</template>

<script>
  import { validationMixin } from "vuelidate";
  import { required, minLength, email } from "vuelidate/lib/validators";

  export default {
    mixins: ["validationMixin"],
    props: {
      formType: {
        type: String,
        default: "signIn"
      }
    },
    data() {
      return {
        email: "",
        password: "",
      }
    },
    computed: {
      emailErrors() {
        const errors = [];
        if (!this.$v.email.$dirty) return errors;
        !this.$v.email.email && errors.push("Email должен быть корректным");
        !this.$v.email.required && errors.push("Email не должен быть пустым");
        return errors;
      },
      passwordErrors() {
        const errors = [];
        if (!this.$v.email.$dirty) return errors;
        !this.$v.password.minLength && errors.push("Пароль не должен быть короче 7 символов");
        !this.$v.password.required && errors.push("Пароль не должен быть пустым");
        return errors;
      },
    },
    validations: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(7)
      }
    },
    methods: {
      submit() {
         this.$v.$touch();
          if (this.$v.$invalid) {
            alert("Проверьте правильность введенных данных");
          } else {
            this.$emit('submit', {email: this.email, password: this.password});
          }
      }
    }
  }
</script>

<style lang="scss" scoped>
  form.auth-form {
    label {
      span {
        font-size: 16px;
        display: inline-block;
        margin-bottom: 5px;
      }
    }
    a {
      color: #ffffff;
    }
  }
</style>



