<template>
  <div class="products-page">
    <h1>Products</h1>
    <div>
      <ProductsMapCompo :products="products" />
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
  props: {
    products: Array,
  },
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
  },
};
</script>
