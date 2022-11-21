<template>
  <section>
    <h1>JOIN THE CLUB</h1>
    <h2>Sign up to our whiskey club to receive special offers, track your order and more</h2>
    <button @click="clickButton">{{logText}}</button>
  </section>
</template>

<script>
export default {
  name: "HomeJoinCompo",
  props: ["logFlag"],
  data(){
    return{
      logText:'Login'
    }
  },
  methods:{
    checkLogin(logFlag){
      if(logFlag){
        this.logText = "Go to Profile";
      }else{
        this.logText = "Login";
      }
    },
    clickButton(){
      this.$emit("clickJoinBtn", this.logFlag);
    }
  },
  watch:{
    logFlag:function(){
      this.checkLogin(this.logFlag);
    }
  },
  mounted(){
    this.checkLogin(this.logFlag);
  }
}
</script>