<template>
  <div class="main-style">
    <aside></aside>
  </div>
  <div class="contact-page">
    <h1><aside>CONTACT US</aside></h1>
    <div class="text">
      <p>We would love to hear from you! Get in touch and a member of our team will get back to you as soon as possible.</p>
    </div>
    <div class="contact-main">
      <aside class="bottle">
        <img src="./contact-img/bottle-illustration.png"/>
      </aside>
        <div class="form-style">
          <span>*indicates required field</span>
          <button @click="fillDetails">Fill the information</button>
        <form>
          <input type="text" placeholder="First Name*" v-model="fName" required/>
          <input type="text" placeholder="Last Name*" v-model="lName" required/>
          <input class="email" type="email" placeholder="Email*" v-model="email" required/>
          <input type="text" placeholder="Order Number"/>
          <input type="text" placeholder="Subject"/>
          <textarea placeholder="Message*" required />
          <div class="button">
            <button type="button" @click="sendContact">SEND</button>
          </div>
        </form>
        </div>
    </div>
  </div>
  <alarm-compo :alarmText="alarmText" :rand="rand"></alarm-compo>
</template>

<script>
import AlarmCompo from '../common/AlarmCompo.vue';
export default {
  components: { AlarmCompo },
  name: "ContactPage",
  props:["loggedUser"],
  data(){
    return{
      fName:undefined,
      lName:undefined,
      email:undefined,
      alarmText:'',
      rand:0
    }
  },
  methods:{
    fillDetails(){
      if(this.loggedUser == ''){
        this.rand = Math.random();
        this.alarmText = "Please login";
      }else{
        this.fName = this.loggedUser.fName;
        this.lName = this.loggedUser.lName;
        this.email = this.loggedUser.email;
      }
    },
    sendContact(e){
      e.preventDefault();
      console.log("send");
    }
  }
};
</script>

<style scoped>
  .contact-main {
    display: flex;
    flex-direction: row;
    margin: 10vh;  
  }
  .contact-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .text {
    margin-left: 25vh;
    margin-right: 25vh;
  }
  p {
    text-align: center;
    margin-top: 5vh;
    font-size: 18px;
  }
  span {
    font-size: 16px;
  }
  .bottle {
    width: 35%;
    display: flex;
    justify-content: center;
  }
  img {
    height: 88vh;
    width: 90vh;
    display: flex;
    align-items: flex-start;
    margin-right: 10vh;
  }
  .form-style {
    width: 65%;
    margin-top: 5vh;
  }
  form {
    margin-top: 3vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 3.5vh;
    
  }
  input {
    width: 48%;
    height: 7vh;
    border-top: 20px solid transparent;
    border: 1px solid #FDEEC0;
    background-color: #111111;
  }
  ::placeholder {
    font-family: 'DM Mono', monospace;
    padding-left: 1vh;
  }
  textarea {
    resize: none;
    width: 100%;
    height: 35vh;
    border: 1px solid #FDEEC0;
    background-color: #111111;
  }
  textarea::placeholder {
    padding-top: 2vh;
  }
  .email {
    width: 100%;
  }
  .button {
    display: flex;
    width: 100%;
    justify-content: right;
  }
  button {
    height: 7vh;
    width: 25vh;
    border: 1px solid #FDEEC0;
    background-color: #111111;
    color: #FDEEC0;
    font-size: 16px;
  }
  button:hover {
    color: #111111;
    background-color: #FDEEC0;
    border: 1px solid #111111;
    cursor: pointer;
    transition: .5s;
  }
</style>


