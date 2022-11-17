<script setup>
// add imports here
import MainMenu from "./components/common/MainMenu.vue";
</script>

<template>
  <header>
    <MainMenu />
  </header>

  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: "App",
  components: {
    MainMenu,
  },
};
</script>
