<template>
  <div class="search">
    <font-awesome-icon class="icon" icon="far fa-search" />
    <input type="text" placeholder="search" v-model="searchWord" />
  </div>
</template>

<script>
export default {
  name: "SearchCompo",
  data() {
    return {
      searchWord: "",
    };
  },
  // watch the searchWord and emit the searchWord to the parent component
  watch: {
    searchWord() {
      this.$emit("search", this.searchWord);
    },
  },
};
</script>

<style scoped>
.icon {
  color: white;
}
input{
  height: 8vh;
  width: 40vh;
  border: 1px solid #FDEEC0;
  background-color: #111111;
  color: #FDEEC0;
  padding-left: 2vh;
  font-size: 18px;
}
.search{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  margin-top: 5vh;
}

::placeholder {
  font-family: 'DM Mono', monospace;
  padding-left: 1vh;
}
</style>
