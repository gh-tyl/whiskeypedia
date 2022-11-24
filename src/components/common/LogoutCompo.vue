<template>
  <div class="main">
    <div class="logout-page">
      <h4> "Are you sure you want to logout ?"</h4>
      <button @click="logOut" >Logout</button>
    </div>
  </div>
</template>

<script>
export default {
name: "LogoutCompo",
data(){
  return {
  }
},
methods:{
  logOut(){
    sessionStorage.clear();
    this.$router.push({name:'home-page'});
    this.$emit('logout',false)
  }
},
mounted(){
}
};
</script>

<style scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.logout-page{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2vh;
  background-color: #111111;
  border: 1px solid #FDEEC0;
  height: 45vh;
  width: 100vh;
  position: absolute;
  top: 25%;
  left: 30%;
  z-index: 4;
}
h4{
  color: #FDEEC0;
  font-family: 'DM Mono', monospace;
  font-weight: lighter;
  margin-bottom: 2vh;
  font-size: 24px;
}
button{
  height: 6vh;
  background-color: #111111;
  border: 1px solid #111111;
  border-color: #FDEEC0;
  width: 30vh;
  color: #FDEEC0;
  padding-left: 1vh;
  font-size: 16px;
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