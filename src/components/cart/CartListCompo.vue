<template>
  <article>
    <div></div>
    <h1>YOUR CART</h1>
    <div></div>
  </article>
  <h2>You have {{shoppingList.returnSize()}} items in your cart</h2>
  <table>
    <thead>
      <th>Product</th>
      <th>Quantity</th>
      <th>Price(inc.tax)</th>
      <th>Option</th>
    </thead>
    <tbody>
      <tr v-for="(item, idx) in shoppingList.shoppingList" :key="idx">
        <td>{{item[1].pName}}</td>
        <td>
          <p>{{item[1].amount}}</p>
          <button @click="addItem(item)">Add</button>
          <button @click="substractItem(item)">Remove</button>
        </td>
        <td>${{(item[1].price * item[1].amount).toFixed(2)}}</td>
        <td><button @click="removeItem(item)">X</button></td>
      </tr>
    </tbody>
    <tfoot>
    </tfoot>
  </table>
  <p>Total : {{shoppingList.calcTotal().toFixed(2)}}</p>
  <button @click="continueShopping">CONTINUE SHOPPING</button>
</template>

<script>
export default {
  name: 'CartListCompo',
  props:["shoppingList"],
  methods:{
    continueShopping(){
      this.$router.push({name:'home-page'});
    },
    addItem(item){
      this.shoppingList.addItem(item[1]);
    },
    substractItem(item){
      this.shoppingList.substractItem(item[1]);
    },
    removeItem(item){
      this.shoppingList.deleteItem(item[1]);
    }
  }
}
</script>

<style scoped>
  article{
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
  article > div{
    width: 10rem;
    height: .1rem;
    background-color: black;
  }
</style>