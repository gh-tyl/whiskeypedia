<template>
  <section>
    <div class="title-01">
      <h2>JOIN THE CLUB</h2>
    </div>
    <div class="title-02">
      <h2 class="title-02">Sign up to our whiskey club to receive special offers, track your order and more</h2>
    </div>
    <div class="button1">
      <button @click="clickButton">{{         logText         }}</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeJoinCompo",
  props: ["logFlag"],
  data() {
    return {
      logText: 'Login'
    }
  },
  methods: {
    checkLogin(logFlag) {
      if (logFlag) {
        this.logText = "Profile";
      } else {
        this.logText = "Login";
      }
    },
    clickButton() {
      this.$emit("clickJoinBtn", this.logFlag);
    }
  },
  watch: {
    logFlag: function () {
      this.checkLogin(this.logFlag);
    }
  },
  mounted() {
    this.checkLogin(this.logFlag);
  }
}
</script>

<style scoped>
section {
  background-image: url("../../img/barrel-01.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 120vh;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 7vh;
  text-align: center;
  color: #FDEEC0;
  width: 100%;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 8vh;
}

.title-01 {
  margin-left: 75vh;
  margin-right: 75vh;
}

.title-02 {
  margin-left: 18vh;
  margin-right: 18vh;
  font-size: 16px;
}

h2 {
  font-family: 'DM Mono', monospace;
  font-weight: 300;
  font-size: 26px;
}

.button1 {
  background-color: transparent;
  width: 100%;
  margin-top: 3vh;
}

button {
  height: 8vh;
  width: 30vh;
  text-transform: uppercase;
  font-size: 26px;
  background-color: black;
  color: #FDEEC0;
  font-family: 'DM Mono', monospace;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button:hover {
  background-color: #FDEEC0;
  color: black;
  cursor: pointer;
  transition: .5s;
}
</style>
