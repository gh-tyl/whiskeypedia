<template>
  <div class="products-page">
    <div>
      <h2>Discover the world of whiskey!</h2>
      <ProductsMapCompo :products="products" @country="getCountry" />
      <search-compo @search="search" />
      <ProductsListCompo :products="displayProds" @addToItem="addToItem" :logFlag="logFlag" />
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
import SearchCompo from "./SearchCompo.vue";
import ProductsMapCompo from "./MapCompo.vue";
import ProductsListCompo from "./ListCompo.vue";
import productClass from "../../classes/productClass.js";
import AlarmCompo from "../common/AlarmCompo.vue";
import HomeLoginCompo from "../home/HomeLoginCompo.vue";
export default {
  name: "ProductsPage",
  components: {
    ProductsMapCompo,
    ProductsListCompo,
    SearchCompo,
    AlarmCompo,
    HomeLoginCompo,
  },
  props: ["products", "logFlag", "shoppingList"],
  data() {
    return {
      displayProds: new Array(),
      // backup for search
      displayProdsBackup: new Array(),
      country: "",
      alarmText: "",
      userInfo: "",
    };
  },
  methods: {
    getCountry(country) {
      this.country = country;
      console.log(this.country);
      this.filterCountry();
      this.displayProdsBackup = this.displayProds;
    },
    filterCountry() {
      this.displayProds = this.products.filter((product) => {
        return product.country == this.country;
      });
    },
    addToItem(logFlag, id) {
      if (!logFlag) {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
      } else {
        this.products.map((val) => {
          if (val.id == id) {
            let item = new productClass(
              val.id,
              val.name,
              val.price,
              val.country,
              val.type,
              val.class
            );
            this.$emit("shopcount", this.shoppingList.returnSize() + 1);
            this.shoppingList.addItem(item);
            this.rand = Math.random();
            this.alarmText = `You added ${val.name} in your shopping cart.`;
          }
        });
      }
    },
    openModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    },
    closeModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    },
    loggedUser(userData) {
      this.$emit("loggedUser", userData);
    },
    userinfo(val) {
      this.userInfo = val;
      this.$emit("userInfo", this.userInfo);
    },
    search(val) {
      this.displayProds = this.displayProdsBackup.filter((product) => {
        return product.name.toLowerCase().includes(val.toLowerCase());
      });
    },
  },
  mounted() {
    this.displayProds = this.products;
    this.displayProdsBackup = this.products;
  },
};
</script>

<style scoped>
.products-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  text-align: center;
  color: #FDEEC0;
  font-family: 'DM Mono', monospace;
  font-weight: lighter;
  margin-bottom: 5vh;
}
</style>
