<template>
  <div class="home-page">
    <!-- Slide Images -->
    <home-slide-compo :slideItems="slideProducts"></home-slide-compo>
    <!-- WELCOME -->
    <section>
      <figure class="welcome">
        <img src="../../img/welcome-01.png" alt="welcome">
      </figure>
    </section>
    <!-- Best Seller -->
    <home-best-seller-compo :bestSellerItems="bestSellerProducts" @openLoginModal="openModal" @addToItem="addToItem"
      :logFlag="logFlag"></home-best-seller-compo>
    <!-- Join Compo -->
    <home-join-compo :logFlag="logFlag" @clickJoinBtn="clickJoinBtn"></home-join-compo>
    <!-- Recommandation Compo -->
    <home-recommandation-compo @addToItem="addToItem" :logFlag="logFlag"></home-recommandation-compo>
    <!-- TESTIMONIAL -->
    <section class="text-animate">
      <p>" What whiskey will not cure, there is no cure for. "</p>
      <h3 class="quote">-IRISH PROVERB</h3>
    </section>
  </div>
  <!-- The Modal -->
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span @click="closeModal">&times;</span>
      <home-login-compo @userInfo="userinfo" @closeModal="closeModal"></home-login-compo>
    </div>
  </div>
  <alarm-compo :alarmText="alarmText" :rand="rand"></alarm-compo>
</template>

<script>
import ProductService from "../../services/ProductService.js";
import productClass from "../../classes/productClass.js";
import HomeSlideCompo from './HomeSlideCompo.vue';
import HomeBestSellerCompo from './HomeBestSellerCompo.vue';
import HomeJoinCompo from './HomeJoinCompo.vue';
import HomeRecommandationCompo from './HomeRecommandationCompo.vue';
import HomeLoginCompo from './HomeLoginCompo.vue';
import AlarmCompo from '../common/AlarmCompo.vue';

export default {
  name: "HomePage",
  components: {
    AlarmCompo,
    HomeSlideCompo,
    HomeBestSellerCompo,
    HomeJoinCompo,
    HomeRecommandationCompo,
    HomeLoginCompo
  },
  props: ["loggedUser", "logFlag", "shoppingList"],
  data() {
    return {
      allProducts: new Array(),
      slideProducts: new Array(),
      bestSellerProducts: new Array(),
      alarmText: '',
      rand: 0,
      userInfo: ''
    }
  },
  methods: {
    loadProductJson() {
      ProductService.getJson()
        .then((res) => {
          this.allProducts = res.data;
          for (let i = 0; i < 5; i++) {
            this.slideProducts.push(res.data[i]);
          }
          for (let j = 0; j < 3; j++) {
            this.bestSellerProducts.push(res.data[j + 5]);
          }
        })
        .catch((err) => console.log(err));
    },
    openModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    },
    closeModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    },
    loggedUser(userData) {
      this.$emit("loggedUser", userData);
    },
    clickJoinBtn(logFlag) {
      if (!logFlag) {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
      } else {
        this.$router.push({ name: 'profile-page' });
      }
    },
    addToItem(logFlag, id) {
      if (!logFlag) {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
      } else {
        this.allProducts.map(val => {
          if (val.id == id) {
            let item = new productClass(val.id, val.name, val.price, val.country, val.type, val.class);
            this.$emit('shopcount', this.shoppingList.returnSize() + 1)
            this.shoppingList.addItem(item);
            this.rand = Math.random();
            this.alarmText = `You added ${val.name} in your shopping cart.`;
          }
        })
      }
    },
    userinfo(val) {
      this.userInfo = val;
      console.log(this.userInfo);
      this.$emit('userInfo', this.userInfo)
    }
  },
  mounted() {
    this.loadProductJson();
    // Get the modal
    var modal = document.getElementById("myModal");
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  },
  watch: {
    // userInfo:function(val){
    //   this.userInfo(val);
    // }
  }
};
</script>

<style>
/* The Modal (background) */
.modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4);
  /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: black !important;
  margin: 15% auto;
  /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #fdeec0 !important;
  width: 80%;
  /* Could be more or less, depending on screen size */
  height: 40vh;
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

.welcome {
  display: flex;
  justify-content: center;
  height: 70vh;
  margin-top: 10vh;
}

.quote,
p {
  font-family: "DM Mono", monospace;
  color: #fdeec0;
  text-align: center;
}

p {
  font-size: 36px;
  margin: 2vh;
}

.quote {
  font-weight: lighter;
  margin-bottom: 15vh;
}

.textanime {
  margin: 1%;
}

/* DEMO-SPECIFIC STYLES */
.text-animate p {
  color: #fdeec0;
  overflow: hidden;
  border-right: 0.15px solid #fdeec0;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 3.5s steps(30, end), blink-caret 1s step-end infinite;
  font-family: "DM Mono", monospace;
  font-size: 26px;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: #fdeec0;
  }
}
</style>
