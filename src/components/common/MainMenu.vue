<template>
  <nav>
    <ul>
      <div class="nav-text">
        <li>
          <router-link class="router-link" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="router-link" to="/products">Products</router-link>
        </li>
        <li>
          <router-link class="router-link" to="/cocktails">Cocktails</router-link>
        </li>
        <li>
          <router-link class="router-link" to="/contact">Contact</router-link>
        </li>
      </div>
      <div class="nav-icons">
        <li>
          <a href="#">s</a>
        </li>
        <li @click="clickProfile">
          <router-link class="router-link" to="/profile">P</router-link>
        </li>
        <li v-show="logFlag">
          <router-link @click="setShopSession" class="router-link" to="/cart">C<span>{{productCount}}</span></router-link>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MainMenu",
  props:["logFlag", "productCount"],
  methods :{
    setShopSession(){
      this.$emit('shoppingFlag', true)
    }
  },
  watch:{
    // logFlag: function(){
    //   this.logFlag = val;
    // }

  }
};
</script>

<style scoped>
  ul {
    display: flex;
    position: relative;
    width: 100%;
    margin-bottom: 10vh;
  }
  li {
    display: flex;
    list-style-type: none;
    text-transform: uppercase;
    font-size: 20px;
  }
  a {
    text-decoration: none;
  }
  .router-link {
    text-decoration: none;
    color: #FDEEC0;
  }
  .nav-text {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 5vh;
    font-family: 'DM Mono', monospace;
    font-weight: 300;
  
  }
  .nav-icons {
    position: absolute;
    right: 4vh;
    display: flex;
    flex-direction: row;
    column-gap: 2.5vh;
  }
</style>
