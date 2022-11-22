<template>
  <section>
    <cart-list-compo :shoppingList="shoppingList"></cart-list-compo>
  </section>
  <section>
    <cart-detail-compo :loggedUser="loggedUser" :shoppingList="shoppingList"></cart-detail-compo>
  </section>
</template>

<script>
import CartDetailCompo from './CartDetailCompo.vue';
import CartListCompo from './CartListCompo.vue';
export default {
  components: { CartListCompo, CartDetailCompo },
  name: "CartPage",
  props:["shoppingList", "loggedUser"]
};
</script>
