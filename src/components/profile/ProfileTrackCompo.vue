<template>
  <!-- purchaed history -->
    <div class="section">
      <h3>Purchased History</h3>
      <div class="prods">
        <div class="tracking" v-for="(track,idx) in tracking" :key="idx">
          <h2>{{track[1].name}}</h2>
          <h3>{{track[1].country}}</h3>
          <h3>{{track[1].class}}</h3>
          <a>{{track[1].status}}</a>
          <img :src="track[1].image_path_0" alt="img" />
          <star-rating :star-size="15"></star-rating>
        </div>
      </div>
    </div>
</template>

<script>
import JsonService from '../../services/JsonService';
import StarRating from 'vue-star-rating';


export default {
  name: "ProfileTrackPage",
  props:['loggedUser'],
  components:{
    StarRating
  },
  data(){
    return {
      products:'',
      purchased:[],
      userinfo: '',
      tracking:new Map(),
      users:[],
      nowdate:new Date(),
      flag:false,
    }
  },
  methods:{
    setUserinfo(){
      if(!sessionStorage.getItem('user')){
        this.userinfo = '';
      }else{
        this.userinfo = JSON.parse(sessionStorage.getItem('user'));
      }
    },
    loadSession(){
      this.userinfo = JSON.parse(sessionStorage.getItem('user'));
    },
    loadProducts(){
      this.loadSession();
      JsonService.getJson('data/json/productJson.json')
      .then((res)=>{
          this.products = res.data;
      })
      .catch((e)=>console.log(e));
    },
    loadpurchased(){
      JsonService.getJson('data/json/purchacedJson.json')
      .then((res)=>{
          this.purchased = res.data;
      })
      .catch((e)=>console.log(e));
    },
    setTracking(){
      let selectedProds =[];
      let id = this.userinfo.uid;
      let obj = this;
      this.purchased.forEach(function(purchase){
        if(purchase.user_id == id){
          selectedProds.push({id:purchase.product_id,date:purchase.datetime});
        }
      })
      console.log(selectedProds)
      let track = new Map();
      let product = '';
      this.products.forEach(function(prod){
        for(let i = 0; i<selectedProds.length; i++){
          if(selectedProds[i].id == prod.id){
            if(obj.nowdate.toLocaleDateString("en-US").substring(6,8) - selectedProds[i].date.substring(8,10) > 7){
              product = {...prod, status:'delivered'}
            }else{
              product = {...prod, status:'On Route'}
            }
            track.set(i,product);
          }
        }
      })
      this.tracking = track;
    },
  },
  mounted(){
    this.loadProducts();
    this.loadpurchased();
    this.setUserinfo();
  },
  watch:{
    purchased:function(){
      this.flag = !this.flag;
    },
    flag:function(){
      this.setTracking();
    }
  }

};
</script>
<style scoped>
.section{
  display: flex;
  flex-direction: column;
  border: .5px solid lightgray;
  overflow: hidden;
}

h3 {
  padding: 1.5% 3% .5% 3%;
}

.prods{
  display: flex;
  padding: 1% 3%;
  column-gap: 3vh;
}
.tracking{
  border: 1px solid whitesmoke;
  padding: 3%;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  row-gap: 1vh;
}

</style>
