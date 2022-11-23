<template>
  <div class="profile-page">
    <h1>Your Profile</h1>
    <div>
      <!-- img / icon -->
      <div class="hello">
        <h2 v-if="helloflag">Hello, {{ userinfo.fname }}{{ userinfo.lname }}</h2>
        <span @click="showEdit">View information</span>
        <span  @click="editInfo">Update information</span>
        <!-- from here, modal box -->
        <div v-if="showProfile" class="showProfile sect">
        <!-- Modal content -->
        <div class="modal-content">
          <span class="close" @click="showEdit">&times;</span>
          <h4>Name: {{userinfo.fname}}{{userinfo.lname}}</h4>
          <h4>Email: {{userinfo.email}}</h4>
          <h4>Country: {{userinfo.country}}</h4>
        </div>
        </div>
        <!-- edit modal -->
        <div v-if="editflag" class="editProfile sect">
          <div class="modal-content">
            <span class="close" @click="editInfo">&times;</span>
            <input type="text" v-model="fname"  placeholder="first name">
            <input type="text" v-model="lname"  placeholder="last name">
            <input type="text" v-model="email"  placeholder="email">
            <input type="text" v-model="country"  placeholder="country">
            <button @click="editInfo">Edit</button>
          </div>
        </div>
        <!-- recommand products for this user -->
        <profile-heighlight-page :loggedUser = "loggedUser"></profile-heighlight-page>
        <!-- purchaed history -->
        <profile-track-page :loggedUser = "loggedUser"></profile-track-page>
      </div>
    </div>
  </div>
</template>

<script>
import JsonService from '../../services/JsonService';
import userClass from '../../classes/userClass';
import ProfileHeighlightPage from './ProfileHeighightCompo.vue';
import ProfileTrackPage from './ProfileTrackCompo.vue'

export default {
  name: "ProfilePage",
  props:['loggedUser'],
  components:{
    ProfileHeighlightPage,
    ProfileTrackPage
  },
  data(){
    return {
      helloflag:false,
      products:'',
      purchased:[],
      userinfo: '',
      fname: '',
      lname:"",
      country:"",
      age:'',
      email:'',
      users:[],
      showProfile:false,
      editflag:false,
      flag:false,
    }
  },
  methods:{
    setUserinfo(){
      if(!sessionStorage.getItem('user')){
        this.userinfo = '';
        this.helloflag = false;
      }else{
        this.userinfo = JSON.parse(sessionStorage.getItem('user'));
        this.helloflag = true;
      }
    },
    editInfo(){
      let newUserInfo = new userClass(this.userinfo.uid,this.fname,this.lname,this.email,this.userinfo.address, this.gender, this.age,this.country);
      sessionStorage.clear()
      sessionStorage.setItem('user',JSON.stringify(newUserInfo.toObj()));
      this.loadSession();
      this.editflag = !this.editflag;
    },
    showEdit(){
      this.showProfile = !this.showProfile
    },
    loadSession(){
      this.userinfo = JSON.parse(sessionStorage.getItem('user'));
      if(this.userinfo){
        this.fname  = this.userinfo.fname;
        this.lname = this.userinfo.lname;
        this.country = this.userinfo.country;
        this.age = this.userinfo.age;
        this.email = this.userinfo.email;
      }
    },
    loadProducts(){
      this.loadSession();
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
  },
  mounted(){
    this.loadProducts();
    this.loadpurchased();
    this.loadUsers();
    this.setUserinfo();
  },
  watch:{
    users:function(){
      this.flag = !this.flag;
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
