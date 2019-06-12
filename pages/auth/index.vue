<template>
  <div class="sign-in">
    <h1>Авторизация</h1>
    <AuthForm formType="signIn" @submit="signIn"/>
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
      async signIn({email, password}) {
        try {
          const data = await this.$axios.$post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.APIKey}`, {'email': email, 'password': password, returnSecureToken: true});
          localStorage.setItem("idToken", data.idToken);
          localStorage.setItem("refreshToken", data.refreshToken);
          this.$router.push("/");
        } catch (e) {
          alert("Ошибка авторизации");
          console.log(e);
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
  div.sign-in {
    width: 550px;
    padding: 40px 20px;
    box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.3);
    h1 {
      margin-bottom: 20px;
    }
  }
</style>

