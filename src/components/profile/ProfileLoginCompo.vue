<template>
  <div class="login-page">
    <input type="text" v-model="uName" placeholder="Write your email"> 
    <input :type="[passflag == 'Show' ? 'password' : 'text']" v-model="pass" placeholder="enter your password">
    <button @click="chgPassFlag" >{{ passflag }}</button>
    <button @click="logIn(uName,pass)">Log In</button>
    <h1>{{logText}}</h1>
  </div>
</template>

<script>
import userClass from '../../classes/userClass';
import UserService from '../../services/UserService';
export default {
name: "ProfileLoginCompo",
props:[],
data(){
  return {
    uName:'',
    pass:'',
    passflag: 'Show',
    loggedUser:'',
    userList:'',
    logText:''
  }
},
methods:{
  logIn(){
    this.userList.map((user)=>{
      if(user.email == this.uName && user.password == this.pass){
        this.loggedUser = new userClass(user.id, user.first_name,user.last_name,user.email, user.address,user.gender, user.age, user.country);
        this.$emit("closeModal");
        this.$emit('loggedUser',this.loggedUser.toObj());
      }else{
        this.logText = "Wrong ID or Password";
      }
    })
  },
  logOut(){
    sessionStorage.clear();
  },
  chgPassFlag(){
    if(this.passflag == 'Show'){
      this.passflag = 'Hide'
    }else{
      this.passflag = 'Show'
    }
  },
  loadUsers(){
    UserService.getJson()
    .then((res)=>{
        this.userList = res.data;
    })
    .catch((e)=>console.log(e));
  }
},
mounted(){
  this.loadUsers();
}
};
</script>