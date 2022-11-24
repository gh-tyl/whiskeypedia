<template>
  <div class="products-page">
    <div>
      <h2>Discover the world of whiskey!</h2>
      <SearchCompo :products="products"></SearchCompo>
      <ProductsMapCompo :products="products" @country="getCountry" />
      <ProductsListCompo :products="displayProds" />
    </div>
  </div>
</template>

<script>
import SearchCompo from './SearchCompo.vue';
import ProductsMapCompo from "./MapCompo.vue";
import ProductsListCompo from "./ListCompo.vue";

export default {
  name: "ProductsPage",
  components: {
    ProductsMapCompo,
    ProductsListCompo,
    SearchCompo
    
  },
  props: {
    products: Array,
  },
  data() {
    return {
      displayProds: new Array(),
      country: "",
    };
  },
  methods: {
    getCountry(country) {
      this.country = country;
      console.log(this.country);
      this.filterCountry();
    },
    filterCountry() {
      this.displayProds = this.products.filter((product) => {
        return product.country == this.country;
      });
    },
  },
  mounted() {
    this.displayProds = this.products;
  },
  

};
</script>