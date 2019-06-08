<template>
  <v-app dark="">
    <Header />
    <SideBar />
    <nuxt />
  </v-app>
</template>

<script>
  import Header from "@/components/mainPage/Header";
  import SideBar from "@/components/mainPage/SideBar";

  export default {
    components: {
      Header,
      SideBar
    }
  }
</script>


<style lang="scss" scoped>

  div.default-wrapper {
    padding: 10px;
  }
</style>

