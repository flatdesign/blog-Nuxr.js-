<template>
 <v-navigation-drawer
    :value="getSideBarStatus"
    absolute
    temporary
    dark
    @input="toggleSideBar"
  >
    <v-list>
      <v-list-tile
        v-for="item in sideBarList"
        :key="item.label"
        @click="item.action"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{ item.label }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    data() {
      return {
        sideBarList: [
          {
            label: 'Главная',
            action: () => {this.$router.push('/')}
          },
          {
            label: 'Админ панель',
            action: () => {this.$router.push('/admin')}
          },
          {
            label: 'Об авторе',
            action: () => {this.$router.push('/about')}
          },
        ]
      }
    },
    methods: {
      toggleSideBar(value) {
        this.$store.commit('setSideBarStatus', value);
      }
    },
    computed: {
      ...mapGetters([
        'getSideBarStatus',
      ])
    }
  }
</script>


