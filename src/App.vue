<script setup>
// add imports here
import MainMenu from "./components/common/MainMenu.vue";
</script>

<template>
  <body>
    <div class="cover">
      <div class="header-logo">
        <img class="logo" src="./home-img/main-logo.png" alt="logo">
      </div>
    </div>
    <div class="page-style">
      <header>
      <MainMenu />
    </header>

    <main>
      <router-view />
    </main>
    <div class="footer-logo">
      <img class="logo2" src="./home-img/main-logo.png" alt="logo">
      <span>
        Please enjoy responsibly.
      </span>
    </div>
    </div>
    <div class="copy">
      <p>&copy; Copyright 2022</p>
    </div>
  </body>
</template>

<script>
import UserService from "./services/UserService.js";
import ProductService from "./services/ProductService.js";
import PurchasedService from "./services/PurchasedService.js";
export default {
  name: "App",
  components: {
    MainMenu,
  },
  data() {
    return {};
  },
  methods: {
    loadUserJson() {
      UserService.getJson()
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
    loadProductJson() {
      ProductService.getJson()
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
    loadPurchasedJson() {
      PurchasedService.getJson()
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.loadUserJson();
    this.loadProductJson();
    this.loadPurchasedJson();
  },
};
</script>

<style>
  body {
    background-color: #111111;
  }

  .cover {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .logo {
    height: 15vh;
  }

  .page-style {
    border: 2px solid #FDEEC0;
    margin-top: 10vh;
    margin-left: 5vh;
    margin-right: 5vh;
    margin-block: 5vh;
    padding: 5vh;
  }

  .header-logo {
    height: 10vh;
    width: 20vh;
  }

  .footer-logo {
    padding-left: 15vh;
    padding-right: 15vh;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .logo2 {
    height: 20vh;
  }

  .copy {
    padding-bottom: 4vh;
    text-align: center;
  }
</style>
