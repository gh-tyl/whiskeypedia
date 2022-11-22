<template>
  <div class="profile-page">
    <h1>Your Profile</h1>
    <div>
      <!-- img / icon -->
      <div class="hello">
        <h2>Hello, {{ userinfo.fname }}{{ userinfo.lname }}</h2>
        <span @click="showInfo">View information</span>
        <span  @click="showEdit">Update information</span>
        <!-- from here, modal box -->
        <div v-if="showProfile" class="showProfile sect">
        <!-- Modal content -->
        <div class="modal-content">
          <span class="close" @click="showInfo">&times;</span>
          <h4>Name: {{userinfo.fname}}{{userinfo.lname}}</h4>
          <h4>Email: {{userinfo.email}}</h4>
          <h4>Country: {{userinfo.country}}</h4>
        </div>
        </div>
        <!-- edit modal -->
        <div v-if="edit" class="editProfile sect">
          <div class="modal-content">
            <span class="close" @click="showEdit">&times;</span>
            <input type="text" :value="userinfo.fname"  placeholder="first name">
            <input type="text" :value="userinfo.lname"  placeholder="last name">
            <input type="text" :value="userinfo.email"  placeholder="email">
            <input type="text" :value="userinfo.country"  placeholder="country">
            <button @click="update">Edit</button>
          </div>
        </div>
        <!-- recommand products for this user -->
        <div class="section heighlight">
          <h3>Recommand Products</h3>
          <div>
            <input type="checkbox" @change="chgHeigh" v-model="female"> Female
            <input type="checkbox" @change="chgHeigh" v-model="male"> male
            <input type="checkbox" @change="chgHeigh" v-model="young"> under 40
            <input type="checkbox" @change="chgHeigh" v-model="old"> older than 40
          </div>
          <div  class="prods">
            <div class="prod" v-for="(prod, idx) in heighlight" :key="idx">
              <h1>{{prod[1].name}}</h1>
              <h1>{{prod[1].ocuntry}}</h1>
              <!-- <img :src="prod[1].image_path_0" alt="img"> -->
              <h1>{{prod[1].price}}</h1>
            </div>
          </div>
        </div>
        <!-- purchaed history -->
        <div class="section track">
          <h3>Purchased History</h3>
          <div class="prods">
            <div class="tracking" v-for="(track,idx) in tracking" :key="idx">
              <h2>{{track[1].class}}</h2>
              <h2>{{track[1].country}}</h2>
              <h2>{{track[1].name}}</h2>
              <h2>{{track[1].status}}</h2>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JsonService from '../../services/JsonService';

export default {
  name: "ProfilePage",
  props:['loggedUser'],
  components:{
    
  },
  data(){
    return {
      products:'',
      purchased:[],
      fname:'',
      lname:'',
      country:'',
      age:'',
      heighlight:new Map(),
      heighlightAge:new Map(),
      tracking:new Map(),
      users:[],
      showProfile:false,
      edit:false,
      nowdate:new Date(),
      userinfo: JSON.parse(sessionStorage.getItem('user')),
      flag:false,
      maleProds : new Map(),
      femaleProds : new Map(),
      oldProds : new Map(),
      youngProds : new Map(),
      female:false,
      male:false,
      young:false,
      old:false
    }
  },
  methods:{
    showEdit(){
      if(this.edit == false){
        this.edit = true; 
      }else{
        this.edit = false;
      }
    },
    showInfo(){
      if(this.showProfile == false){
        this.showProfile = true; 
      }else{
        this.showProfile = false;
      }
    },
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
    makeHighlight(){
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
          if(femaleProd.has(prod.product_id)){
            femaleProd.get(prod.product_id).amount += 1;
          }else{
            let obj = {id:prod.id,pId:prod.product_id,uid:prod.user_id,amount:1}
            femaleProd.set(prod.product_id,obj);
          }
        }else if(malegenders.has(prod.user_id)){
          if(maleProd.has(prod.product_id)){
            maleProd.get(prod.product_id).amount += 1;
          }else{
            let obj = {id:prod.id,pId:prod.product_id,uid:prod.user_id,amount:1}
            maleProd.set(prod.product_id,obj);
          }
        }
      })
      let youngProd = new Map();
      let oldProd = new Map();
      this.purchased.forEach(function(prod){
        if(youngs.has(prod.user_id)){
          if(youngProd.has(prod.product_id)){
            youngProd.get(prod.product_id).amount += 1;
          }else{
            let obj = {id:prod.id,pId:prod.product_id,uid:prod.user_id,amount:1};
            youngProd.set(prod.product_id,obj);
          }
        }else if(olders.has(prod.user_id)){
          if(oldProd.has(prod.product_id)){
            oldProd.get(prod.product_id).amount += 1;
          }else{
            let obj = {id:prod.id,pId:prod.product_id,uid:prod.user_id,amount:1}
            oldProd.set(prod.product_id,obj);
          }
        }
      })
      this.chg(maleProd,this.maleProds)
      this.chg(femaleProd,this.femaleProds)
      this.chg(oldProd,this.oldProds)
      this.chg(youngProd,this.youngProds)

    },
    setHighlight(){
      if(this.userinfo.gender == 'Femail'){
        this.heighlight = this.femaleProds;
      }else{
        this.heighlight = this.maleProds;
      }

      if(this.userinfo.age < 40){
        this.heighlightAge = this.youngProds;
      }else{
        this.heighlightAge = this.oldProds;
      }
    // how to display 
    },
    chg(prodlist,map){
      let prods = this.products;
      prodlist.forEach(function(male){
        prods.forEach(function(prod){
          if(male.pId == prod.id){
            prod.rates = male.amount;
            map.set(male.pId, prod);
          }
        })
      })
      return map;
    },
    setTracking(){
      let selectedProds =[];
      let id = this.userinfo.uid;
      let obj = this;
      this.purchased.forEach(function(purchase){
        if(purchase.user_id == id){
          selectedProds.push({id:purchase.product_id,date:purchase.datetime});
        }
      })
      let track = new Map();
      let product = '';
      this.products.forEach(function(prod){
        for(let i = 0; i<selectedProds.length; i++){
          if(selectedProds[i].id == prod.id){
            if(obj.nowdate.toLocaleDateString("en-US").substring(6,8) - selectedProds[i].date.substring(8,10) > 7){
              product = {...prod, status:'delivered'}
            }else{
              product = {...prod, status:'On Route'}
            }
            track.set(i,product);
          }
        }
      })
      this.tracking = track;
    },
    chgHeigh(){
      // let arr = [female, male, old, young];
      // for(let i=0; i < 4; i++){
      //   if(this.arr[i] === true){
      //     this.heighlight = `this.${arr}Prods`;
      //     this.
      //   }
      // }
      if(this.male === true){
        this.young = false;
        this.old = false;
        this.female = false;
        this.heighlight = this.maleProds;
      }else if(this.female === true){
        this.young = false;
        this.old = false;
        this.male = false;
        this.heighlight = this.femaleProds;        
      }else if(this.old === true){
        this.young = false;
        this.female = false;
        this.male = false;
        this.heighlight = this.oldProds;        
      }else if(this.young === true){
        this.female = false;
        this.old = false;
        this.male = false;
        this.heighlight = this.youngProds;        
      }
    }
  },
  mounted(){
    this.loadProducts();
    this.loadpurchased();
    this.loadUsers();
    // this.setHighlight();
  },
  watch:{
    users:function(){
      this.makeHighlight();
      this.flag = !this.flag;
    },
    flag:function(){
      this.setTracking();
      this.setHighlight();
    }
  }


};
</script>
<style scoped>
.section{
  display: flex;
  flex-direction: column;
  border: .5px solid lightgray;
}

.prods{
  display: flex;
}
.prod{
  display: flex;
  flex-direction: column;
}

.sect {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  color: black;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.hello {
  color: whitesmoke;
}
/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

.sect > .modal-content{
  color: black;
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
