<template>
  <div>
    <h1>Products</h1>
    <!-- display products -->
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <div class="product-image">
          <img :src="product.image_path_0" :alt="product.image_path_0" />
        </div>
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }}</p>
          <p>{{ product.country }}</p>
          <p>{{ product.type }}</p>
          <button @click="addItem(product.id)">ADD TO CART</button>
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
