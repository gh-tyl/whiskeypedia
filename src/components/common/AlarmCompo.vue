<template>
  <div id="alarm-box" class="alarm-box">{{ alarmText }}</div>
</template>

<script>
export default {
  name: "AlarmCompo",
  props: ["alarmText", "rand"],
  methods: {
    click() {
      var alarm = document.getElementById("alarm-box");
      alarm.classList.toggle("start-animaton");
      setTimeout(() => {
        alarm.classList.toggle("start-animaton");
      }, 2000);
    },
  },
  watch: {
    rand() {
      this.click();
    },
  },
};
</script>

<style>
.alarm-box {
  background-color: black;
  border: 1px solid #fdeec0;
  color: #fdeec0;
  font-size: 20px;
  font-family: "DM Mono", monospace;
  position: fixed;
  top: -15%;
  left: 0%;
  right: 0%;
  margin: auto;
  width: 30rem;
  padding: 1%;
  text-align: center;
  z-index: 5;
}

.start-animaton {
  animation: slide-down 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 0.1s;
}

@keyframes slide-down {
  0% {
    top: -15%;
  }

  20% {
    top: 5%;
  }

  80% {
    top: 5%;
  }

  100% {
    top: -15%;
  }
}
</style>
