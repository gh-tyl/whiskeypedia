<script setup>
// add imports here
import MainMenu from "./components/common/MainMenu.vue";
</script>

<template>
  <body>
    <div class="cover">
      <div class="header-logo">
        <img class="logo" src="./home-img/main-logo.png" alt="logo">
      </div>
    </div>
    <div class="page-style">
    <header>
      <MainMenu @logFlag = 'logFlag' @shoppingFlag = "setShoppingSession" :logFlag="logFlag" :productCount="productCount"/>
    </header>

    <main>
      <router-view @shopcount = "setCount"  @userInfo='setLoggedUser' :loggedUser="loggedUser" :logFlag="logFlag" :shoppingList="shoppingList"/>
    </main>
    <div class="footer-logo">
      <img class="logo2" src="./home-img/main-logo.png" alt="logo">
      <span>
        Please enjoy responsibly.
      </span>
    </div>
    </div>
    <div class="copy">
      <p>&copy; Copyright 2022</p>
    </div>
  </body>
</template>

<script>
import UserService from "./services/UserService.js";
import ProductService from "./services/ProductService.js";
import PurchasedService from "./services/PurchasedService.js";
import shoppingCartClass from "./classes/shoppingCartClass.js";
export default {
  name: "App",
  components: {
    MainMenu,
  },
  data() {
    return {
      loggedUser:'',
      logFlag:false,
      shoppingList:undefined,
      productCount:0
    };
  },
  methods: {
    logFlag(val){
      this.logFlag = val;
      this.shoppingList = undefined;
      this.loggedUser = '';
    },
    loadUserJson() {
      UserService.getJson()
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
    loadProductJson() {
      ProductService.getJson()
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
    loadPurchasedJson() {
      PurchasedService.getJson()
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    },
    setCount(val){
      this.productCount = val;
    },
    setShoppingSession(){
      sessionStorage.setItem('shoppingList',JSON.stringify(this.shoppingList.toObj()));
    },
    setLoggedUser(val){
      if(!sessionStorage.getItem('user')){
        this.loggedUser = val;
        this.setShoppingList(val.fName,val.lName);
      }else{
        this.chkSession();
      }
      console.log(this.shoppingList)
    },
    setShoppingList(fname,lname){
      this.shoppingList = new shoppingCartClass(Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1), fname +" "+ lname);
      console.log(JSON.stringify(this.shoppingList.toObj()))
      this.logFlag = true;
    },
    chkSession(){
      if(sessionStorage.getItem('user')){
        // if(sessionStorage.getItem('shoppingList')){
        //   this.shoppingList = JSON.parse(sessionStorage.getItem('shoppingList'))
        //   this.logFlag = true;
        // }else{
          this.setShoppingList(JSON.parse(sessionStorage.getItem('user')).fname,JSON.parse(sessionStorage.getItem('user')).lname);
          this.loggedUser = JSON.parse(sessionStorage.getItem('user'))
        // }
      }else{
        this.logFlag = false;
      }
      console.log(this.shoppingList)
    }
  },
  mounted(){
    // this.loadUserJson();
    // this.loadProductJson();
    // this.loadPurchasedJson();
    this.chkSession();

  },
  watch:{
    // shoppingList:{
    //   handler(){
    //     this.productCount = this.shoppingList.returnSize();
    //   },
    //   deep: true
    // },
    loggedUser: function(){
      this.chkSession()
    }
  }
};
</script>

<style>
  body {
    background-color: #111111;
    transition: .4s;
  }
  .cover {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .header-logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .logo {
    height: 13vh;
    padding-top: 1vh;
  }
  .page-style {
    border: 2px solid #FDEEC0;
    margin-top: 10vh;
    margin-left: 5vh;
    margin-right: 5vh;
    margin-block: 5vh;
    padding: 5vh;
  }
  .header-logo {
    height: 10vh;
    width: 20vh;
  }
  .footer-logo {
    padding-left: 35vh;
    padding-right: 35vh;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .logo2 {
    height: 20vh;
  }
  .copy {
    padding-bottom: 4vh;
    text-align: center;
  }
</style>

