<script setup>
// add imports here
import MainMenu from "./components/common/MainMenu.vue";
</script>

<template>
  <header>
    <MainMenu :logFlag="logFlag" />
  </header>

  <main>
    <router-view @loggedUser='setLoggedUser' :loggedUser="loggedUser" :logFlag="logFlag" :shoppingList="shoppingList"/>
  </main>
</template>

<script>
import UserService from "./services/UserService.js";
import ProductService from "./services/ProductService.js";
import PurchasedService from "./services/PurchasedService.js";
import shoppingCartClass from "./classes/shoppingCartClass.js";
export default {
  name: "App",
  components: {
    MainMenu,
  },
  data() {
    return {
      loggedUser:'',
      logFlag:false,
      shoppingList:undefined
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
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
    loadPurchasedJson() {
      PurchasedService.getJson()
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
    setLoggedUser(val){
      this.loggedUser = val;
      this.logFlag = true;
      this.shoppingList = new shoppingCartClass(Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1), val.fName+" "+val.lName);
      console.log(this.shoppingList);
    },
  },
  mounted() {
    // this.loadUserJson();
    // this.loadProductJson();
    // this.loadPurchasedJson();
  },
};
</script>
