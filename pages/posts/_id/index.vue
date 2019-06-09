<template>
  <div class="post-wrapper">
    <section class="post">
      <h1>POST {{ getId }}</h1>
      <ul class="post-details">
        <li>Last updated on XXX</li>
        <li>Written by {{ author }}</li>
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
    },
    asyncData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            author: 'Danil Chushko'
          })
        }, 1000);
      }).then( data => {
        return data;
      }).catch( e => {
        context.error(e);
      })
    }
  }
</script>
