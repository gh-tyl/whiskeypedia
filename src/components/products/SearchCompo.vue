<template>
    <div class="search">
       <font-awesome-icon class="icon" icon="far fa-search" />
       <input type="text" v-model="input" @keyup.enter="filteredList" placeholder="search"> 
    <div class="item" v-for="product in filteredList()" :key="product"></div>
    <div class="item error" v-if="input&&!filteredList().length">
        <h3>
            No results found
        </h3>
    </div>
    </div>
    
</template>

<script>
export default {
  name: 'SearchCompo',
  props: ['products'],
  data(){
    return {
         searchProduct: []
    }
  },
  methods:{
    filteredList(){
        console.log(this.products)
            this.searchProduct= [];
            this.showProduct = false;
            for (let i=0; i < this.products.length; i++){
                console.log(typeof this.products[i])
                if (
                    this.products[i].name.toString().toLowerCase()
                    .includes(this.searchProducts.toLowerCase()) &&
                    this.searchProduct !== "" &&
                    this.searchProduct !== ""
                ){
                    this.searchProduct.push(this.products[i]);
                    this.showProduct = true;
                }
            }
        
    }
  },
  watch: {
    // searchProduct: function () {
    //   this.filteredList();
    // },
  }, 
  mounted() {
    // this.filteredList();
  },
} 

</script>
    
<style scoped>

</style>
