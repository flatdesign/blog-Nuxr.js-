<template>
  <div class="post-wrapper">
    <section class="post">
      <h1>POST {{ getId }}</h1>
      <ul class="post-details">
        <li>Last updated on XXX</li>
        <li>Written by NAME</li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    computed: {
      getId() {
        return this.$route.params.id
      }
    }
  }
</script>
