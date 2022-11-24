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
</style>
