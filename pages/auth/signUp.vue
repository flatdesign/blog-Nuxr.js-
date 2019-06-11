<template>
  <div class="sign-up">
    <h1>Регистрация</h1>
    <div class="form-wrapper">
      <AuthForm formType="signUp" @submit="signUp"/>
    </div>
  </div>
</template>

<script>
  import AuthForm from "@/components/auth/authForm";

  export default {
    layout: "auth",
    components: {
      AuthForm
    },
    methods: {
      async signUp({email, password}) {
        try {
          const response = await this.$axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${process.env.APIKey}`, {'email': email, 'password': password, returnSecureToken: true});
          this.$router.push("/");
        } catch (e) {
          alert("Ошибка регистрации");
          console.log(e);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  div.sign-up {
    width: 550px;
    padding: 40px 20px;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
    h1 {
      margin-bottom: 20px;
    }
  }
</style>


