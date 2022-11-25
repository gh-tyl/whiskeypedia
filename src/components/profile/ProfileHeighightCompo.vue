<template>
  <div>
    <!-- recommand products for this user -->
    <div class="section">
      <h3>Recommended Products</h3>
      <div class="cBox">
        <div>
          <input type="checkbox" @change="chgHeigh" v-model="female" /> female
        </div>
        <div>
          <input type="checkbox" @change="chgHeigh" v-model="male" /> male
        </div>
        <div>
          <input type="checkbox" @change="chgHeigh" v-model="young" /> under 40
        </div>
        <div>
          <input type="checkbox" @change="chgHeigh" v-model="old" /> over 40
        </div>
      </div>
      <!-- <swiper :slidesPerView="3" :spaceBetween="10"  :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide v-for="(prod, idx) in heighlight" :key="idx">
        <img class="slideImg" :src="prod[1].image_path_0">
        <h1>{{prod[1].name}}</h1>
        <h1>{{prod[1].ocuntry}}</h1>
        <h1>{{prod[1].price}}</h1>
      </swiper-slide>
      </swiper> -->
      <div class="prods">
        <div class="prod" v-for="(prod, idx) in heighlight" :key="idx">
          <img :src="prod[1].image_path_0" alt="img" />
          <h2>{{ prod[1].name }}</h2>
          <h1>{{ prod[1].country }}</h1>
          <h1>${{ prod[1].price }}</h1>
          <button class="add" @click="goto">Go To Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import JsonService from "../../services/JsonService";
// npm install vue-star-rating@next
import StarRating from "vue-star-rating";
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  name: "ProfileHeighlightPage",
  props: ["loggedUser"],
  components: {
    StarRating,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      products: "",
      purchased: [],
      userinfo: "",
      heighlight: new Map(),
      users: [],
      flag: false,
      maleProds: new Map(),
      femaleProds: new Map(),
      oldProds: new Map(),
      youngProds: new Map(),
      female: false,
      male: false,
      young: false,
      old: false,
    };
  },
  methods: {
    setUserinfo() {
      if (!sessionStorage.getItem("user")) {
        this.userinfo = "";
      } else {
        this.userinfo = JSON.parse(sessionStorage.getItem("user"));
      }
    },
    loadProducts() {
      JsonService.getJson("data/json/productJson.json")
        .then((res) => {
          this.products = res.data;
        })
        .catch((e) => console.log(e));
    },
    loadpurchased() {
      JsonService.getJson("data/json/purchacedJson.json")
        .then((res) => {
          this.purchased = res.data;
        })
        .catch((e) => console.log(e));
    },
    loadUsers() {
      JsonService.getJson("data/json/userJson.json")
        .then((res) => {
          this.users = res.data;
        })
        .catch((e) => console.log(e));
    },
    makeHighlight() {
      let femalegenders = new Map();
      let malegenders = new Map();
      let youngs = new Map();
      let olders = new Map();
      this.users.forEach(function (user) {
        if (user.gender == "Female") {
          femalegenders.set(user.id, user);
        } else if (user.gender == "Male") {
          malegenders.set(user.id, user);
        }
        if (user.age > 18 && user.age < 40) {
          youngs.set(user.id, user);
        } else if (user.age >= 40) {
          olders.set(user.id, user);
        }
      });

      let maleProd = new Map();
      let femaleProd = new Map();
      this.purchased.forEach(function (prod) {
        if (femalegenders.has(prod.user_id)) {
          if (femaleProd.has(prod.product_id)) {
            femaleProd.get(prod.product_id).amount += 1;
          } else {
            let obj = {
              id: prod.id,
              pId: prod.product_id,
              uid: prod.user_id,
              amount: 1,
            };
            femaleProd.set(prod.product_id, obj);
          }
        } else if (malegenders.has(prod.user_id)) {
          if (maleProd.has(prod.product_id)) {
            maleProd.get(prod.product_id).amount += 1;
          } else {
            let obj = {
              id: prod.id,
              pId: prod.product_id,
              uid: prod.user_id,
              amount: 1,
            };
            maleProd.set(prod.product_id, obj);
          }
        }
      });
      let youngProd = new Map();
      let oldProd = new Map();
      this.purchased.forEach(function (prod) {
        if (youngs.has(prod.user_id)) {
          if (youngProd.has(prod.product_id)) {
            youngProd.get(prod.product_id).amount += 1;
          } else {
            let obj = {
              id: prod.id,
              pId: prod.product_id,
              uid: prod.user_id,
              amount: 1,
            };
            youngProd.set(prod.product_id, obj);
          }
        } else if (olders.has(prod.user_id)) {
          if (oldProd.has(prod.product_id)) {
            oldProd.get(prod.product_id).amount += 1;
          } else {
            let obj = {
              id: prod.id,
              pId: prod.product_id,
              uid: prod.user_id,
              amount: 1,
            };
            oldProd.set(prod.product_id, obj);
          }
        }
      });
      this.chg(maleProd, this.maleProds);
      this.chg(femaleProd, this.femaleProds);
      this.chg(oldProd, this.oldProds);
      this.chg(youngProd, this.youngProds);
    },
    setHighlight() {
      if (sessionStorage.getItem("user")) {
        if (this.userinfo.gender == "Female") {
          this.heighlight = this.femaleProds;
        } else {
          this.heighlight = this.maleProds;
        }
      }
    },
    chg(prodlist, map) {
      let prods = this.products;
      prodlist.forEach(function (male) {
        prods.forEach(function (prod) {
          if (male.pId == prod.id) {
            prod.rates = male.amount;
            map.set(male.pId, prod);
          }
        });
      });
      return map;
    },
    chgHeigh() {
      if (this.male === true) {
        this.young = false;
        this.old = false;
        this.female = false;
        this.heighlight = this.maleProds;
      } else if (this.female === true) {
        this.young = false;
        this.old = false;
        this.male = false;
        this.heighlight = this.femaleProds;
      } else if (this.old === true) {
        this.young = false;
        this.female = false;
        this.male = false;
        this.heighlight = this.oldProds;
      } else if (this.young === true) {
        this.female = false;
        this.old = false;
        this.male = false;
        this.heighlight = this.youngProds;
      }
    },
    goto(){
      this.$router.push({ name: 'products-page' });
    }
  },
  mounted() {
    this.loadProducts();
    this.loadpurchased();
    this.loadUsers();
    this.setUserinfo();
  },
  watch: {
    users: function () {
      this.makeHighlight();
      this.flag = !this.flag;
    },
    flag: function () {
      this.setHighlight();
    },
  },
};
</script>


<style scoped>
.section {
  display: flex;
  flex-direction: column;
  row-gap: 3vh;
  border-top: 3px solid #fdeec0;
}

h3 {
  padding: 1.5% 3%;
}

.cBox {
  width: 100%;
  display: flex;
  column-gap: 3vh;
  align-items: center;
  justify-content: center;
  padding-left: 4vh;
  font-size: 20px;
  font-family: "DM Mono", monospace;
  font-weight: lighter;
}

.cBox input {
  border-radius: 0.2m;
  box-shadow: inset 0px 0px 0px 2px #f7f2f2;
}

/* .cBox input::before{
    transform: rotateZ(180deg);
    background: #FF4040;
} */
/* .prods{
  display: flex;
  overflow: hidden;
}
.prod{
  display: flex;
  flex-direction: column;
} */
.slideImg {
  width: 10%;
}

.swiper {
  overflow: hidden;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-content: center;
}

.prods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  row-gap: 6vh;
  padding: 1% 3%;
}

.prod {
  /* padding: 1% 3%; */
  width: 40vh;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2vh;
  padding-bottom: 5vh;
  justify-content: space-between;
  row-gap: 1vh;
  background-color: #111111;
  border-radius: 5%;
}

h1 {
  font-family: "DM Mono", monospace;
  font-size: 20px;
}

h2 {
  font-family: "DM Mono", monospace;
  font-weight: lighter;
  font-size: 18px;
  text-align: center;
  padding-left: 2vh;
  padding-right: 2vh;
  text-decoration: underline;
}

h3 {
  font-family: "DM Mono", monospace;
  font-weight: lighter;
  font-size: 22px;
  text-align: center;
  text-decoration: underline;
  margin-top: 5vh;
}

img {
  height: 35vh;
  width: 25vh;
  margin-top: 4vh;
}

.add{
  width: 100%;
}
.add{
  margin-top: 1vh;
  height: 5vh;
  width: 20vh;
  background-color: #111111;
  color: #FDEEC0;
}
.add:hover{
  background-color: #FDEEC0;
  color: #111111;
  cursor: pointer;
  transition: .5s;
}
</style>
