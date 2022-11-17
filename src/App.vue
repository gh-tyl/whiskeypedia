<script setup>
// add imports here
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/products">Products</router-link>
        </li>
        <li>
          <router-link to="/cocktails">Cocktails</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
        <li>
          <router-link to="/profile">Profile</router-link>
        </li>
        <li>
          <router-link to="/cart">Cart</router-link>
        </li>
      </ul>
    </nav>
  </header>

  <main>
    <router-view />
  </main>
</template>

<script>
import UserService from "./services/UserService.js";
import ProductService from "./services/ProductService.js";
import PurchasedService from "./services/PurchasedService.js";
export default {
  name: "App",
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
