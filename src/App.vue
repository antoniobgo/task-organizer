<template>
  <v-app class="font-text">
    <v-app-bar height="80">
      <v-app-bar-nav-icon variant="text" @click.stop="_show_drawer = !_show_drawer"
        >Nav</v-app-bar-nav-icon
      >
    </v-app-bar>
    <v-navigation-drawer v-model="_show_drawer" location="left">
      <!-- <v-list -->
      <!-- :items="items" -->
      <!-- ></v-list> -->
    </v-navigation-drawer>
    <v-main class="bg-soft-white">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import { ref, computed } from 'vue'

const _show_drawer = ref(true)
</script>

<style>
.bg-soft-white {
  background-color: #edeff2;
}
.font-text {
  font-family: 'Roboto', sans-serif;
}
.arval-title-text {
  font-size: 40px;
  letter-spacing: 3px;
  font-weight: 700;
}
.arval-secondary-title-text {
  font-size: 24px;
  letter-spacing: 2px;
}
.arval-result-title-text {
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 700;
}
.arval-result-secondary-title-text {
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 400;
  color: #606068;
}
.arval-subtitle-text {
  font-size: 16px;
  letter-spacing: 1.5px;
  font-weight: 400;
  color: #606068;
}
</style>
