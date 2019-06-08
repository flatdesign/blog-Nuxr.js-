<template>
  <div class="default-layot">
    <v-app dark>
      <Header />
      <SideBar />
      <div class="content">
        <nuxt />
      </div>
   </v-app>
  </div>
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
  div.default-layot {
    .content {
      padding: 24px;
    }
  }
</style>

