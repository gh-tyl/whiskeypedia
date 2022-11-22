<template>
  <div class="profile-page">
    <article v-if="logFlag">
      <h1>Your Profile</h1>
      <div>
        <!-- img / icon -->
        <div>
          <h2>Hello, {{ fname }}{{ lname }}</h2>
          <span>View information</span>
          <span>Update information</span>
          <!-- from here, modal box -->
          <div class="showProfile">
            <h2>Name: {{fname}}{{lname}}</h2>
            <h2>Email: {{email}}</h2>
            <span>Country: {{country}}</span>
          </div>
          <div class="editProfile">
            <div>
              <input type="text" v-model="fname" placeholder="first name">
              <input type="text" v-model="lname" placeholder="last name">
              <input type="text" v-model="email" placeholder="email">
              <input type="text" v-model="country" placeholder="country">
              <button @click="update">Edit</button>
            </div>
          </div>
          <div class="heighlight">
        
          </div>
        </div>
      </div>
    </article>
    <article v-else>
      <button @click="openModal">Login</button>
    </article>
  </div>
  <!-- The Modal -->
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span @click="closeModal">&times;</span>
      <profile-login-compo @loggedUser="loggedUser" @closeModal="closeModal"></profile-login-compo>
    </div>
  </div>
</template>

<script>
import JsonService from '../../services/JsonService.js';
import ProfileLoginCompo from './ProfileLoginCompo.vue';
export default {
  name: "ProfileCompo",
  components:{
    ProfileLoginCompo
  },
  props:["logFlag"],
  data(){
    return {
      products:'',
      purchased:[],
      fname:'',
      lname:'',
      country:'',
      age:'',
      heighlight:new Map(),
      genders:new Map(),
      users:[],
    }
  },
  methods:{
    loadProducts(){
      JsonService.getJson('data/json/productJson.json')
      .then((res)=>{
          this.products = res.data;
      })
      .catch((e)=>console.log(e));
    },
    loadpurchased(){
      JsonService.getJson('data/json/purchacedJson.json')
      .then((res)=>{
          this.purchased = res.data;
      })
      .catch((e)=>console.log(e));
    },
    loadUsers(){
      JsonService.getJson('data/json/userJson.json')
      .then((res)=>{
          this.users = res.data;
      })
      .catch((e)=>console.log(e));
    },
    update(){
      // this.$router.push({name:'product-page'})
    },
    setHighlight(){
      // let id = 1;
      // let gender = female;
      // let age = 21;
      let femalegenders = new Map();
      let malegenders = new Map();
      let youngs = new Map();
      let olders = new Map();
      this.users.forEach(function(user){
        // if(user.gender == 'Female'){
        //   femalegenders.set(user.id,user)
        // }else if(user.gender == 'Male'){
        //   malegenders.set(user.id,user)
        // }
        if(user.age > 18 && user.age < 40){
          youngs.set(user.id, user)
        }else if(user.age >= 40){
          olders.set(user.id,user);
        }
      })
      
      let maleProd = new Map();
      let femaleProd = new Map();
      this.purchased.forEach(function(prod){
        if(femalegenders.has(prod.user_id)){
          if(femaleProd.has(prod.user_id)){
            femaleProd.get(prod.user_id).amount += 1;
          }else{
            let obj = {id:prod.id,pId:prod.product_id,uid:prod.user_id,amount:1}
            femaleProd.set(prod.user_id,obj);
          }
        }else{
          if(maleProd.has(prod.user_id)){
            maleProd.get(prod.user_id).amount += 1;
          }else{
            let obj = {id:prod.id,pId:prod.product_id,uid:prod.user_id,amount:1}
            maleProd.set(prod.user_id,obj);
          }
        }
      })
      // if(gender == 'Femail'){
      // }
      // console.log(maleProd);
      // console.log(femaleProd)
    },
    // chk(product,prod){
    //   if(product.has(prod.user_id)){
    //       product.get(prod.user_id).amount += 1;
    //     }else{
    //       let obj = {id:prod.id,pId:prod.product_id,uid:prod.user_id,amount:1}
    //       product.set(prod.user_id,obj);
    //     }
    // },
    setTracking(){
      // let purchased = [];
      // let id = JSON.parse(sessionStorage.getItem('user')).uid;
      // this.purchased.forEach(function(prod){
      //   if(prod.user_id == id){
      //     purchased.push(prod);
      //   }
      // })
      // this.purchased = purchased;
      // console.log(purchased)
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
    }
  },
  mounted(){
    this.loadProducts();
    this.loadpurchased();
    this.loadUsers();
  },
  watch:{
    users:function(){
      this.setHighlight();
    }
  }
};
</script>

<style>
/* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }

  /* The Close Button */
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>