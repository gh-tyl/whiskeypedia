<template>
  <div class="prod-list">
    <div class="lines">
      <aside class="lines01"></aside>
      <h1>
        PRODUCTS
      </h1>
      <aside class="lines01"></aside>
    </div>
    <!-- display products -->
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <div class="product-image">
          <img :src="product.image_path_0" :alt="product.image_path_0" />
        </div>
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <h4>${{ product.price }}</h4>
          <h4>{{ product.country }}</h4>
          <h4>{{ product.type }}</h4>
          <div class="add">
            <button @click="addItem(product.id)">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsListCompo",
  props: {
    products: Array,
    logFlag: Boolean,
  },
  methods: {
    addItem(id) {
      this.$emit("addToItem", this.logFlag, id);
    },
  },
};
</script>
<style scoped>
.prod-list{
  display: flex;
  flex-direction: column;
}
.products{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 5vh;
}
img{
  height: 40vh;
  width: 32vh;
  margin-left: 2vh;
  margin-right: 2vh;
  padding: 5vh;
  background-color: black;
}
.product-info{
  width: 32vh;
  height: 30vh;
  text-align: center;
  margin-left: 2vh;
  margin-right: 2vh;
  padding: 5vh;
  background-color: black;
  color: #fdeec0;
  margin-bottom: 5vh;
  color: #FDEEC0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.lines01 {
  width: 50%;
  height: .1rem;
  background-color: #FDEEC0;
  margin-top: 5vh;
  margin-bottom: 5vh;
}

.lines {
  display: flex;
  align-items: center;
}
h3,
h4{
  font-family: 'DM Mono', monospace;
  font-weight: lighter;
  margin-bottom: 1vh;
  
}
h3{
  text-decoration: underline;
  font-size: 22px;
}
.add{
  width: 100%;
}
button{
  margin-top: 1vh;
  height: 5vh;
  width: 20vh;
  background-color: #111111;
  color: #FDEEC0;
}
button:hover{
  background-color: #FDEEC0;
  color: #111111;
  cursor: pointer;
  transition: .5s;
}

</style>
