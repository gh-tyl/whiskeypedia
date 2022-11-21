<template>
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
      <li v-show="logFlag">
        <router-link to="/contact">Contact</router-link>
      </li>
      <li v-show="logFlag">
        <router-link to="/profile">Profile</router-link>
      </li>
      <li v-show="logFlag">
        <router-link to="/cart">Cart</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MainMenu",
  props:["logFlag"]
};
</script>
