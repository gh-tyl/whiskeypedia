<template>
  <div class="login-page">
    <h4>Please log-in to continue</h4>
    <input type="text" v-model="uName" placeholder="Email"> 
    <input :type="[passflag == 'Show' ? 'password' : 'text']" v-model="pass" placeholder="Password" @keyup.enter="logIn(uName,pass)">
    <div class="buttons">
      <button @click="chgPassFlag" >{{ passflag }}</button>
      <button @click="logIn(uName,pass)">Log In</button>
    </div>
    <h3>{{logText}}</h3>
  </div>
</template>

<script>
import userClass from '../../classes/userClass';
import UserService from '../../services/UserService';
export default {
name: "HomeLoginCompo",
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
        console.log(this.loggedUser.toObj())
        sessionStorage.setItem('user', JSON.stringify(this.loggedUser.toObj()))
        this.$emit('userInfo',this.loggedUser.toObj());
      }else{
        this.logText = "Incorrect ID or Password";
      }
    })
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

<style scoped>
.login-page{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2vh;
}
h4{
  color: #FDEEC0;
  font-family: 'DM Mono', monospace;
  font-weight: lighter;
  margin-bottom: 2vh;
  font-size: 24px;
}
input{
  height: 6vh;
  background-color: #111111;
  border: 1px solid #111111;
  width: 40vh;
  color: #FDEEC0;
  padding-left: 1vh;
  font-size: 16px;
}
::placeholder {
    font-family: 'DM Mono', monospace;
    padding-left: 1vh;
}
textarea:focus, input:focus {
    color: #FDEEC0;
    padding-left: 2vh;
    font-size: 16px;
}
.log-buttons{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 26vh
}
button{
  padding: 4%;
  width: 12vh;
  background-color: #111111;
  color: #FDEEC0;
  font-family: 'DM Mono', monospace;
}
button:hover{
  background-color: #FDEEC0;
  color: #111111;
  cursor: pointer;
  transition: .5s;
}
h3{
  color: #FDEEC0;
  font-family: 'DM Mono', monospace;
  font-weight: lighter;
  font-size: 16px;
}
</style>