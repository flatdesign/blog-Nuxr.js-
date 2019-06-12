<template>
  <div class="main-page">
    <h1>Добро пожаловать, пользователь!</h1>
    <nuxt-link to="posts">Все посты</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
  div.main-page {
    widows: 300px;
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      color: #ffffff;
    }
  }
</style>

