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
    <input type="text" placeholder="Phone (for delivery)*" required>
    <input type="text" placeholder="Address*" v-model="address" required>
    <input type="text" placeholder="City*" required>
    <input type="text" placeholder="Postal Code*" required>
    <input type="text" placeholder="Country*" required>
    <textarea placeholder="Notes for delivery"></textarea>
    <button>CHECKOUT</button>
  </form>
</template>

<script>
export default {
  name:"CartDetailCompo",
  props:["loggedUser"],
  data(){
    return{
      fName:undefined,
      lName:undefined,
      email:undefined,
      address:undefined
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
      console.log("checkout");
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