<template>
  <article>
    <div></div>
    <h1>DELIVERY DETAILS</h1>
    <div></div>
  </article>
    <button @click="fillDetails">Fill the information</button>
  <form @submit="checkOut">
    <h1>* indicates required field</h1>
    <input type="text" placeholder="First Name*" v-model="fName" required>
    <input type="text" placeholder="Last Name*" v-model="lName" required>
    <input type="email" placeholder="Email*" v-model="email" required>
    <input type="text" placeholder="Phone (for delivery)*" v-model="tel" required>
    <input type="text" placeholder="Address*" v-model="address" required>
    <input type="text" placeholder="City*" v-model="city" required>
    <input type="text" placeholder="Postal Code*" v-model="postal" required>
    <input type="text" placeholder="Country*" v-model="country" required>
    <textarea placeholder="Notes for delivery" v-model="text"></textarea>
    <button>CHECKOUT</button>
  </form>
</template>

<script>
export default {
  name:"CartDetailCompo",
  props:["loggedUser", "shoppingList", "orderedCart"],
  data(){
    return{
      fName:undefined,
      lName:undefined,
      email:undefined,
      address:undefined,

      tel:undefined,
      city:undefined,
      postal:undefined,
      country:undefined,
      text:''
    }
  },
  methods:{
    fillDetails(){
      this.fName = this.loggedUser.fName;
      this.lName = this.loggedUser.lName;
      this.email = this.loggedUser.email;
      this.address = this.loggedUser.address;
    },
    checkOut(e){
      e.preventDefault();
      this.orderedCart.push({
        fName: this.fName,
        lName: this.lName,
        email: this.email,
        address: this.address,
        tel: this.tel,
        city: this.city,
        postal: this.postal,
        country: this.country,
        text: this.text,

        shoppingList: this.shoppingList.shoppingList
      });
      this.shoppingList.shoppingList = new Map();
      console.log(this.orderedCart);
      this.$router.push({name:'profile-page'});
    }
  }
}
</script>

<style scoped>
  article{
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
  article > div{
    width: 10rem;
    height: .1rem;
    background-color: black;
  }
  textarea{
    resize: none;
  }
</style>