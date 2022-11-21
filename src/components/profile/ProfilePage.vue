<template>
  <div class="profile-page">
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
  </div>
</template>

<script>
import JsonService from '../../services/JsonService.js';
export default {
  name: "ProfileCompo",
  props:[],
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
        if(user.gender == 'Female'){
          femalegenders.set(user.id,user)
        }else if(user.gender == 'Male'){
          malegenders.set(user.id,user)
        }
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
      if(gender == 'Femail'){
      }
      console.log(maleProd);
      console.log(femaleProd)
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