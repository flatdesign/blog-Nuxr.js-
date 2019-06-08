<template>
 <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
    dark
  >
    <v-list>
      <v-list-tile
        v-for="item in sideBarList"
        :key="item.label"
        @click="item.action"
      >
        <!-- <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action> -->

        <v-list-tile-content>
          <v-list-tile-title>{{ item.label }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data() {
      return {
        drawer: true,
        sideBarList: [
          {
            label: 'Главная',
            action: function() {}
          },
          {
            label: 'Админ панель',
            action: function() {}
          },
          {
            label: 'Об авторе',
            action: function() {}
          },
        ]
      }
    }
  }
</script>


