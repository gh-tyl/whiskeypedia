<template>
  <section class="cartmain">
    <section>
      <cart-list-compo :shoppingList="shoppingList"></cart-list-compo>
    </section>
    <section>
      <cart-detail-compo
        :loggedUser="loggedUser"
        :shoppingList="shoppingList"
        :orderedCart="orderedCart"
      >
      </cart-detail-compo>
    </section>
  </section>
</template>

<script>
import CartDetailCompo from './CartDetailCompo.vue';
import CartListCompo from './CartListCompo.vue';
export default {
  components: { CartListCompo, CartDetailCompo },
  name: "CartPage",
  props: ["shoppingList", "loggedUser", "orderedCart"],
};
</script>

<style scoped>
.cartmain {
  background-color: black;
  border-radius: 25px;
  color: #fdeec0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10vh;
  padding-top: 5vh;
  width: 100%;
}
</style>
