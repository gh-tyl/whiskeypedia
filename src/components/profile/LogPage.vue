<template>
  <div class="login-page">
    <input type="text" v-model="uName" placeholder="Write your email"> 
    <input :type="[passflag == 'Show' ? 'password' : 'text']" v-model="pass" placeholder="enter your password">
    <button @click="chgPassFlag" >{{ passflag }}</button>
    <button @click="logIn(uName,pass)">Log In</button>
  </div>
</template>

<script>
import userClass from '../../classes/userClass';
import UserService from '../../services/UserService';
export default {
name: "LogPage",
props:[],
data(){
  return {
    uName:'',
    pass:'',
    passflag: 'Show',
    loggedUser:'',
    userList:''
  }
},
methods:{
  logIn(){
    this.userList.map((user)=>{
      if(user.email == this.uName && user.password == this.pass){
        this.loggedUser = new userClass(user.id, user.first_name,user.last_name,user.email, user.address,user.gender, user.age, user.country);
        console.log(this.loggedUser);
      }
    })
    this.$emit('loggedUser',this.loggedUser)
    // this.$router.push({name:'profile-page'})
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
        console.log(this.userList)
    })
    .catch((e)=>console.log(e));
  }
},
mounted(){
  this.loadUsers();
}
};
</script>