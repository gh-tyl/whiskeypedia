<template>
  <div class="profile-page">
    <article v-if="logFlag">
      <!-- Ordered cart -->
      <section>
        <table id="order">
          <thead>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Postal code</th>
            <th>Amount</th>
            <th>Other</th>
          </thead>
          <tbody>
            <tr v-for="(item, idx) in orderedCart" :key="idx">
              <td>{{ idx }}</td>
              <td>{{ item.fName }} {{ item.lName }}</td>
              <td>{{ item.address }}</td>
              <td>{{ item.postal }}</td>
              <td>{{ item.shoppingList.size }}</td>
              <td>{{ item.text }}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <!-- img / icon -->
      <div class="hello">
        <div class="lines">
          <aside class="lines01"></aside>
          <h1>YOUR PROFILE</h1>
          <aside class="lines01"></aside>
        </div>
        <h3 v-if="helloflag">
          Hello, {{ userinfo.fName }} {{ userinfo.lName }}
        </h3>
        <div class="mBox">
          <button class="open" @click="showEdit">View information</button>
          <button class="open" @click="editInfo">Update information</button>
        </div>
        <!-- from here, modal box -->
        <div v-if="showProfile" class="showProfile-sect">
          <!-- Modal content -->
          <div class="closediv">
            <span class="close" @click="showEdit">&times;</span>
          </div>
          <div>
            <div class="fullname">
              <h5>Name: {{ userinfo.fName }} {{ userinfo.lName }}</h5>
              <h5>Email: {{ userinfo.email }}</h5>
              <h5>Country: {{ userinfo.country }}</h5>
            </div>
          </div>
        </div>
        <!-- edit modal -->
        <div v-if="editflag" class="editProfile-sect">
          <div class="closediv">
            <span class="close" @click="editInfo">&times;</span>
          </div>
          <div class="fullname">
            <div class="col">
              <label for="fname">First Name</label>
              <input type="text" name="fname" v-model="fname" placeholder="first name" />
            </div>
            <div class="col">
              <label for="lname">Last Name</label>
              <input name="lname" type="text" v-model="lname" placeholder="last name" />
            </div>
            <div class="col">
              <label for="email">Email</label>
              <input type="text" name="email" v-model="email" placeholder="email" />
            </div>
            <div class="col">
              <label for="country">Country</label>
              <input type="text" name="country" class="country" v-model="country" placeholder="country" />
            </div>
          </div>
          <button @click="editInfo" class="editbtn">EDIT</button>
        </div>
        <!-- recommand products for this user -->
        <profile-heighlight-page :loggedUser="loggedUser"></profile-heighlight-page>
        <!-- purchaed history -->
        <profile-track-page :loggedUser="loggedUser"></profile-track-page>
      </div>
    </article>
    <article v-else>
      <h4>Please sign in to view your profile</h4>
      <div class="profile-before">
        <div class="buttonprof">
          <button class="buttons" @click="openModal">Login</button>
        </div>
      </div>
    </article>
  </div>
  <!-- The Modal -->
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span @click="closeModal">&times;</span>
      <profile-login-compo-vue @loggedUser="loggedUser" @closeModal="closeModal"></profile-login-compo-vue>
    </div>
  </div>
</template>

<script>
import JsonService from "../../services/JsonService";
import userClass from "../../classes/userClass";
import ProfileHeighlightPage from "./ProfileHeighightCompo.vue";
import ProfileLoginCompoVue from "./ProfileLoginCompo.vue";
import ProfileTrackPage from "./ProfileTrackCompo.vue";

export default {
  name: "ProfilePage",
  props: ['loggedUser', "orderedCart"],
  components: {
    ProfileHeighlightPage,
    ProfileTrackPage,
    ProfileLoginCompoVue
  },
  data() {
    return {
      helloflag: false,
      products: '',
      purchased: [],
      userinfo: '',
      fname: '',
      lname: "",
      country: "",
      age: '',
      email: '',
      users: [],
      showProfile: false,
      editflag: false,
      flag: false,
      logFlag: false
    }
  },
  methods: {
    openModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    },
    closeModal(val) {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
      this.logFlag = val;
    },
    setUserinfo() {
      if (!sessionStorage.getItem('user')) {
        this.userinfo = '';
        this.helloflag = false;
      } else {
        this.userinfo = JSON.parse(sessionStorage.getItem('user'));
        this.helloflag = true;
      }
    },
    editInfo() {
      let newUserInfo = new userClass(this.userinfo.uid, this.fname, this.lname, this.email, this.userinfo.address, this.gender, this.age, this.country);
      sessionStorage.clear()
      sessionStorage.setItem('user', JSON.stringify(newUserInfo.toObj()));
      this.loadSession();
      this.editflag = !this.editflag;
    },
    showEdit() {
      this.showProfile = !this.showProfile
    },
    loadSession() {
      this.userinfo = JSON.parse(sessionStorage.getItem('user'));
      if (this.userinfo) {
        this.fname = this.userinfo.fName;
        this.lname = this.userinfo.lName;
        this.country = this.userinfo.country;
        this.age = this.userinfo.age;
        this.email = this.userinfo.email;
        this.logFlag = true;
      }
    },
    loadUsers() {
      JsonService.getJson('data/json/userJson.json')
        .then((res) => {
          this.users = res.data;
        })
        .catch((e) => console.log(e));
    },
    loggedUser(val) {
      this.$emit('userInfo', val)
    }
  },
  mounted() {
    this.loadUsers();
    this.setUserinfo();
    console.log(this.orderedCart);
  },
  watch: {
    users: function () {
      this.flag = !this.flag;
    },
    flag: function () {
      this.loadSession();
    }
  }
};
</script>
<style scoped>
.fullname {
  display: flex;
  column-gap: 2.5vh;
}

.showProfile-sect {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1vh;
  background-color: #111111;
  border: 1px solid #FDEEC0;
  height: 45vh;
  width: 86vh;
  position: absolute;
  top: 25%;
  left: 30%;
  z-index: 4;
  row-gap: 5vh;
  text-align: center;
}

.editProfile-sect {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1vh;
  background-color: #111111;
  border: 1px solid #fdeec0;
  height: 75vh;
  width: 77vh;
  position: absolute;
  top: 25%;
  left: 30%;
  z-index: 4;
  row-gap: 5vh;
  text-align: center;
  padding-left: 5vh;
  padding-right: 5vh;
}

.closediv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* .country{
  width: 60vh;
} */

.col {
  display: flex;
  flex-direction: column;
}

/* .col:nth-child(3) input{
  width:60vh;
} */

label {
  color: #fdeec0;
  font-family: "DM Mono", monospace;
  font-weight: lighter;
  text-align: left;
  margin-bottom: 1vh;
}

input {
  height: 6vh;
  background-color: black;
  color: #fdeec0;
  padding-left: 1vh;
  font-size: 16px;
}

::placeholder {
  font-family: 'DM Mono', monospace;
  padding-left: 1vh;
}

.editbtn {
  height: 6vh;
  background-color: black;
  border: 1px solid #111111;
  /* border-color: #FDEEC0; */
  width: 25%;
  color: #fdeec0;
  font-size: 16px;
}

button {
  background-color: #111111;
}

.buttonprof {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

button:hover {
  background-color: #FDEEC0;
  color: #111111;
  cursor: pointer;
  transition: .5s;
}

.mBox {
  display: flex;
  column-gap: 3vh;
  width: 50vh;
  padding-bottom: 6vh;
}

.mBox:hover {
  cursor: pointer;
}

.open {
  width: 25vh;
  height: 6vh;
  padding: 1%;
  color: #fdeec0;
  display: flex;
  align-items: center;
  justify-content: center;
}

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

.hello {
  color: #fdeec0;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 4vh;
  background-color: black;
  border-radius: 25px;
  padding-bottom: 5vh;
}

/* Modal Content/Box */
.modal-content {
  /* background-color: #fefefe;
  margin: 15% auto; 
  border: 1px solid #888;
  width: 80%; 
  height: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; */

  background-color: black !important;
  margin: 15% auto;
  /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #fdeec0 !important;
  width: 80%;
  /* Could be more or less, depending on screen size */
  height: 40vh;
}

.sect>.modal-content {
  color: whitesmoke;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.closediv {
  display: flex;
  justify-content: start;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.profile-before {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('../../img/bottle-illustration.png');
  height: 60vh;
  background-size: contain;
  background-position: center;
  row-gap: 15vh;
  width: 100%;
}

h4 {
  color: #FDEEC0;
  font-family: 'DM Mono', monospace;
  font-weight: lighter;
  font-size: 18px;
  text-align: center;
}

h5 {
  font-family: "DM Mono", monospace;
  font-weight: lighter;
  text-align: center !important;
  font-size: 22px;
}

.buttons {
  margin-top: 17vh;
  height: 8vh;
  width: 35vh;
  background-color: black;
  color: #FDEEC0;
  font-family: 'DM Mono', monospace;
  font-size: 20px;
}

.buttons:hover {
  cursor: pointer;
  color: black;
  background-color: #FDEEC0;
  transition: .5s;
}

#order {
  width: 100%;
  text-align: center;
  color: #FDEEC0;
  border: 1px solid #FDEEC0;
  font-family: 'DM Mono', monospace;
  margin-bottom: 5%;
  font-size: 1.5rem;
  padding: 2%;
  border-radius: 1rem;
}
#order th{
  text-transform: uppercase;
  padding: 1%;
}
#order tbody td{
  margin: 2% 0;
  padding: 2% 0;
  border-top: 1px solid #fdeec0;
  border-collapse: collapse;
}

.lines01 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 38%;
  height: .1rem;
  background-color: #FDEEC0;
}

.lines {
  display: flex;
  align-items: center;
  margin-top: 5vh;
}

h3 {
  font-family: 'DM Mono', monospace;
  font-weight: lighter;
  font-size: 22px;
  margin-top: 5vh;
}

div {
  width: 100%;
}

.fullname {
  display: flex;
  flex-direction: column;
  row-gap: 1vh;
}

.lines01 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 38%;
  height: 0.1rem;
  background-color: #fdeec0;
}

.lines {
  display: flex;
  align-items: center;
  margin-top: 5vh;
}

h3 {
  font-family: "DM Mono", monospace;
  font-weight: lighter;
  font-size: 22px;
  margin-top: 5vh;
}

div {
  width: 100%;
}

.fullname {
  display: flex;
  flex-direction: column;
  row-gap: 1vh;
}
</style>
