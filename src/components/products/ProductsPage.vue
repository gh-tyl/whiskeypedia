<template>
  <div class="products-page">
    <h1>Products</h1>
    <search-compo></search-compo>
    <div>
      <ProductsMapCompo :products="products" @country="getCountry" />
      <ProductsListCompo :products="displayProds" @addToItem="addToItem" :logFlag="logFlag"/>
    </div>
  </div>
  <!-- The Modal -->
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span @click="closeModal">&times;</span>
      <home-login-compo @userInfo="userinfo" @closeModal="closeModal"></home-login-compo>
    </div>
  </div>
  <alarm-compo :alarmText="alarmText" :rand="rand"></alarm-compo>
</template>

<script>
import SearchCompo from './SearchCompo.vue'
import ProductsMapCompo from "./MapCompo.vue";
import ProductsListCompo from "./ListCompo.vue";
import productClass from "../../classes/productClass.js";
import AlarmCompo from "../common/AlarmCompo.vue"
import HomeLoginCompo from "../home/HomeLoginCompo.vue";

export default {
  name: "ProductsPage",
  components: {
    ProductsMapCompo,
    ProductsListCompo,
    SearchCompo,
    AlarmCompo,
    HomeLoginCompo
  },
  props: ["products", "logFlag", "shoppingList"],
  data() {
    return {
      displayProds: new Array(),
      country: "",
      alarmText: "",
      userInfo: ""
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
    addToItem(logFlag, id){
      if(!logFlag){
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
      }else{
        this.products.map(val=>{
          if(val.id == id){
            let item = new productClass(val.id, val.name, val.price, val.country, val.type, val.class);
            this.$emit('shopcount', this.shoppingList.returnSize() + 1)
            this.shoppingList.addItem(item);
            this.rand = Math.random();
            this.alarmText = `You added ${val.name} in your shopping cart.`;
          }
        })
      }
    },
    openModal(){
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    },
    closeModal(){
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    },
    loggedUser(userData){
      this.$emit("loggedUser", userData);
    },
    userinfo(val){
      this.userInfo = val;
      this.$emit('userInfo',this.userInfo)
    }
  },
  mounted() {
    this.displayProds = this.products;
  },
};
</script>