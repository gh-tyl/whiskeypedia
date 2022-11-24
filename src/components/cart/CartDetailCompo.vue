<template>
  <section class="delivery">
    <article>
      <div></div>
      <h1>DELIVERY DETAILS</h1>
      <div></div>
    </article>
    <div class="formtop">
      <button @click="fillDetails">Auto-fill information</button>
      <h2>* indicates required field</h2>
    </div>
    <form @submit="checkOut">
      <input type="text" placeholder="First Name*" v-model="fName" required />
      <input type="text" placeholder="Last Name*" v-model="lName" required />
      <input type="email" placeholder="Email*" v-model="email" required />
      <input type="text" placeholder="Phone (for delivery)*" v-model="tel" required />
      <input type="text" placeholder="Address*" v-model="address" required />
      <input type="text" placeholder="City*" v-model="city" required />
      <input type="text" placeholder="Postal Code*" v-model="postal" required />
      <input type="text" placeholder="Country*" v-model="country" required />
      <textarea placeholder="Notes for delivery" v-model="text"></textarea>
      <button>CHECKOUT</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "CartDetailCompo",
  props: ["loggedUser", "shoppingList", "orderedCart"],
  data() {
    return {
      fName: undefined,
      lName: undefined,
      email: undefined,
      address: undefined,
      tel: undefined,
      city: undefined,
      postal: undefined,
      country: undefined,
      text: ''
    }
  },
  methods: {
    fillDetails() {
      this.fName = this.loggedUser.fName;
      this.lName = this.loggedUser.lName;
      this.email = this.loggedUser.email;
      this.address = this.loggedUser.address;
    },
    checkOut(e) {
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
      this.$router.push({ name: 'profile-page' });
    }
  }
}
</script>

<style scoped>
article {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}

article>div {
  width: 10rem;
  height: .1rem;
  background-color: black;
}

textarea {
  resize: none;
}

.delivery {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  column-gap: 3vh;
  row-gap: 3vh;
  width: 70%;
  height: fit-content;
  margin-bottom: 3vh;
}

input {
  height: 8vh;
  width: 60vh;
  font-family: "DM Mono", monospace;
  font-size: 16px;
  color: #fdeec0;
  background-color: #111111;
  border: 0px solid transparent;
  padding-left: 2vh;
}

::placeholder {
  font-family: "DM Mono", monospace;
  padding-left: 1vh;
}

textarea {
  resize: none;
  width: 92.5%;
  height: 30vh;
  color: #fdeec0;
  background-color: #111111;
  border: 0px none transparent;
  padding-top: 2vh;
}

.formtop {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 65%;
  margin-top: 5vh;
  margin-bottom: 3vh;
}

button {
  height: 8vh;
  width: 30vh;
  background-color: #111111;
  color: #fdeec0;
  font-family: "DM Mono", monospace;
}

button:hover {
  background-color: #fdeec0;
  color: #111111;
  cursor: pointer;
  transition: 0.5s;
}

h2 {
  font-family: "DM Mono", monospace;
  font-weight: lighter;
  font-size: 16px;
  margin-top: 5vh;
}

.checkout {
  display: flex;
  width: 65%;
  justify-content: right;
  margin-bottom: 10vh;
}

article {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}

article>div {
  width: 19rem;
  height: 0.1rem;
  background-color: #fdeec0;
}
</style>
