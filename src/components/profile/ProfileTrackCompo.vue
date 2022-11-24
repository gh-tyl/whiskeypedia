<template>
  <!-- purchaed history -->
  <div class="purchase">
    <h2>Your purchase history</h2>
    <div class="prods">
      <div class="tracking" v-for="(track, idx) in tracking" :key="idx">
        <img :src="track[1].image_path_0" alt="img" />
        <h3>Name: {{ track[1].name }}</h3>
        <h3>Origin: {{ track[1].country }}</h3>
        <h3>Class: {{ track[1].class }}</h3>
        <a>Status: {{ track[1].status }}</a>
        <star-rating :star-size="15"></star-rating>
      </div>
    </div>
  </div>
</template>

<script>
import JsonService from "../../services/JsonService";
import StarRating from "vue-star-rating";

export default {
  name: "ProfileTrackPage",
  props: ["loggedUser"],
  components: {
    StarRating,
  },
  data() {
    return {
      products: "",
      purchased: [],
      userinfo: "",
      tracking: new Map(),
      users: [],
      nowdate: new Date(),
      flag: false,
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
    loadSession() {
      this.userinfo = JSON.parse(sessionStorage.getItem("user"));
    },
    loadProducts() {
      this.loadSession();
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
    setTracking() {
      let selectedProds = [];
      let id = this.userinfo.uid;
      let obj = this;
      this.purchased.forEach(function (purchase) {
        if (purchase.user_id == id) {
          selectedProds.push({
            id: purchase.product_id,
            date: purchase.datetime,
          });
        }
      });
      console.log(selectedProds);
      let track = new Map();
      let product = "";
      this.products.forEach(function (prod) {
        for (let i = 0; i < selectedProds.length; i++) {
          if (selectedProds[i].id == prod.id) {
            if (
              obj.nowdate.toLocaleDateString("en-US").substring(6, 8) -
                selectedProds[i].date.substring(8, 10) >
              7
            ) {
              product = { ...prod, status: "delivered" };
            } else {
              product = { ...prod, status: "On Route" };
            }
            track.set(i, product);
          }
        }
      });
      this.tracking = track;
    },
  },
  mounted() {
    this.loadProducts();
    this.loadpurchased();
    this.setUserinfo();
  },
  watch: {
    purchased: function () {
      this.flag = !this.flag;
    },
    flag: function () {
      this.setTracking();
    },
  },
};
</script>
<style scoped>
.purchase {
  display: flex;
  flex-direction: column;
  border-bottom: 1vh solid black;
  overflow: hidden;
  margin-top: 10vh;

  width: fit-content;
}

h2 {
  font-family: "DM Mono", monospace;
  font-weight: lighter;
  text-align: center;
  padding: 2vh;
  background-color: #111111;
}

h3,
a {
  font-family: "DM Mono", monospace;
  font-weight: lighter;
  font-size: 16px;
  width: 20vh;
  margin-left: 2vh;
}

a {
  width: 20vh;
}

.prods {
  display: flex;
  flex-direction: column;
}

.tracking {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  row-gap: 1vh;
  padding-top: 5vh;
  padding-bottom: 5vh;
  border-bottom: 1vh solid #111111;
}

img {
  height: 35vh;
  width: 25vh;
}
</style>
