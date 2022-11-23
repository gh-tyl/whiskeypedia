<template>
  <div class="products-page">
    <h1>Products</h1>
    <search-compo></search-compo>
  </div>
</template>

<script>
import SearchCompo from './SearchCompo.vue'
export default {
  name: "ProductsPage",
  components: {
    SearchCompo
  },
};
</script>