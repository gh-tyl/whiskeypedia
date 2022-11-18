<template>
  <div class="products-page">
    <h1>Products</h1>
    <div>
      <ProductsMapCompo />
    </div>
  </div>
</template>

<script>
import ProductsMapCompo from "./MapCompo.vue";
export default {
  name: "ProductsPage",
  components: {
    ProductsMapCompo,
  },
};
</script>
