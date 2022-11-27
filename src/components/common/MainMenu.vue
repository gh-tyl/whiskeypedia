<template>
  <div>
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
          <li @click="clickProfile">
            <router-link class="router-link" to="/profile">
              <i class="fa-solid fa-user" />
            </router-link>
          </li>
          <li>
            <a @click="lChg" href="#"><i class="fa-solid fa-gear"></i></a>
            <!-- settings: logout -->
          </li>
          <li id="cart" v-show="logFlag">
            <router-link @click="setShopSession" class="router-link" to="/cart"
              ><i class="fa-solid fa-cart-shopping" /><span>{{
                productCount
              }}</span></router-link
            >
          </li>
        </div>
      </ul>
    </nav>
    <logout-compo @close=close @logout='setlogoutFlag' v-if="logout"></logout-compo>
  </div>
</template>

<script>
import LogoutCompo from './LogoutCompo.vue';
import LogoutCompoVue from './LogoutCompo.vue';
export default {
  name: "MainMenu",
  components: {
    LogoutCompo
  },
  props: ["logFlag", "productCount"],
  data() {
    return {
      logout: false
    }
  },
  methods: {
    close(val) {
      this.logout = val;
    },
    setShopSession() {
      this.$emit('shoppingFlag', true)
    },
    lChg() {
      this.logout = !this.logout
    },
    setlogoutFlag(val) {
      this.logout = val;
      // this.logFlag = val;
      this.$emit('logFlag', false)
    }
  },
  watch: {
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
  /* text-decoration: none; */
  color: #fdeec0;
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
  align-items: center;
  column-gap: 3vh;
}
</style>
