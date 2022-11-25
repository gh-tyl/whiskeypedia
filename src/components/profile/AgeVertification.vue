<template>
  <div>
    <div class="config-page">
      <!-- logo -->
      <h1>THE GATE TO WHISKEYPEDIA</h1>
      <div>
        <h4>You must be 19 years of age or older to enter</h4>
        <div>
          <input type="number" v-model="years" placeholder="YY" @keyup.enter="verify">
          <p>Please enter your Years of birth</p>
          <h3>{{ result }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileAgeCompo",
  props: [],
  data() {
    return {
      month: '',
      date: '',
      years: '',
      now: new Date().toLocaleDateString("en-US"),
      result: ''
    }
  },
  methods: {
    verify() {
      let year = parseFloat(this.now.substring(6, 10));
      if (year - this.years > 18) {
        // this.$router.push({name:'main-page'})
      } else {
        this.result = 'you are not allowed';
      }
    }
  },
};
</script>
