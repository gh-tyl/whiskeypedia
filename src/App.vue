<template>
  <header>
    <MainMenu />
  </header>

  <main>
    <router-view :products="products" />
  </main>
</template>

<script>
import MainMenu from "./components/common/MainMenu.vue";
import UserService from "./services/UserService.js";
import ProductService from "./services/ProductService.js";
import PurchasedService from "./services/PurchasedService.js";

export default {
  name: "App",
  components: {
    MainMenu,
  },
  data() {
    return {
      products: new Array(),
    };
  },
  methods: {
    loadUserJson() {
      UserService.getJson()
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
    loadProductJson() {
      ProductService.getJson()
        .then((res) => {
          this.products = res.data
        })
        .catch((err) => console.log(err));
    },
    // // fetch
    // loadProductJson() {
    //   console.log("loadProductJson");
    //   fetch("data/json/productJson.json")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       this.products = data;
    //       console.log(this.products);
    //     })
    //     .catch((err) => console.log(err));
    // },
    loadPurchasedJson() {
      PurchasedService.getJson()
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    // this.loadUserJson();
    this.loadProductJson();
    // this.loadPurchasedJson();
  },
};
</script>
