<template>
  <section class="cartlist">
    <article>
      <div></div>
      <h1>YOUR CART</h1>
      <div></div>
    </article>
    <div class="details">
      <h2>You have {{ shoppingList.returnSize() }} items in your cart</h2>
      <table>
        <thead>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price(inc.tax)</th>
          <th>Option</th>
        </thead>
        <tbody>
          <tr v-for="(item, idx) in shoppingList.shoppingList" :key="idx">
            <td>{{ item[1].pName }}</td>
            <td class="amount">
              <p>{{ item[1].amount }}</p>
              <button @click="addItem(item)">Add</button>
              <button @click="substractItem(item)">Remove</button>
            </td>
            <td>${{ (item[1].price * item[1].amount).toFixed(2) }}</td>
            <td><button @click="removeItem(item)">X</button></td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
      <p>Total : ${{ shoppingList.calcTotal().toFixed(2) }}</p>
      <button @click="continueShopping" class="shopbtn">
        CONTINUE SHOPPING
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CartListCompo',
  props: ["shoppingList"],
  methods: {
    continueShopping() {
      this.$router.push({ name: "products-page" });
    },
    addItem(item) {
      this.shoppingList.addItem(item[1]);
    },
    substractItem(item) {
      this.shoppingList.substractItem(item[1]);
    },
    removeItem(item) {
      this.shoppingList.deleteItem(item[1]);
    }
  }
}
</script>

<style scoped>
article {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}

article > div {
  width: 23.8rem;
  height: 0.1rem;
  background-color: #fdeec0;
}

.cartlist {
  width: 150vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 5vh;
  padding-top: 2vh;
  width: 100%;
}

h2 {
  font-family: "DM Mono", monospace;
  font-weight: lighter;
  margin-top: 3vh;
}

table {
  width: 100%;
}

th {
  background-color: #111111;
  height: 8vh;
  text-align: center;
  font-family: "DM Mono", monospace;
  font-weight: lighter;
  padding-left: 1vh;
}

td {
  height: 20vh;
  text-align: center;
}

td > p {
  font-size: 22px;
}

.amount {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 2vh;
}

td > button {
  width: 10vh;
  height: 4vh;
  color: #fdeec0;
  background-color: black;
}

td > button:hover {
  color: black;
  background-color: #fdeec0;
  cursor: pointer;
  transition: 0.5s;
}

tbody {
  background-color: #111111;
  font-family: "DM Mono", monospace;
  font-weight: lighter;
}

.shopbtn {
  height: 10vh;
  width: 60vh;
  font-family: "DM Mono", monospace;
  font-weight: lighter;
  font-size: 24px;
  background-color: #111111;
  color: #fdeec0;
}

.shopbtn:hover {
  background-color: #fdeec0;
  color: #111111;
  cursor: pointer;
  transition: 0.5s;
}
</style>
