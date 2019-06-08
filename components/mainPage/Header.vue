<template>
  <header>
    <v-toolbar dark color="dark" height="50px">
      <v-toolbar-side-icon></v-toolbar-side-icon>

      <v-toolbar-title class="white--text">Code Blog</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu>
          <template #activator="{ on: menu }">
            <v-tooltip bottom>
              <template #activator="{ on: tooltip }">
                <v-btn flat v-on="{ ...tooltip, ...menu }">
                  <v-icon>perm_identity</v-icon>
                  <span>Danil Chushko</span>
                </v-btn>
              </template>
              <span>Текущий пользователь</span>
            </v-tooltip>
          </template>
          <v-list>
            <v-list-tile
              v-for="(item, index) in menuItems"
              :key="index"
              @click="item.action"
            >
              <v-list-tile-title>{{ item.label }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>
  </header>
</template>

<script>
  export default {
    data() {
      return {
         menuItems: [
          {
            label: 'Профиль',
            action: function() {}
          },
          {
            label: 'Сменить пароль',
            action: function() {}
          },
          {
            label: 'Выйти',
            action: function() {}
          },
        ]
      }
    },

  }
</script>

