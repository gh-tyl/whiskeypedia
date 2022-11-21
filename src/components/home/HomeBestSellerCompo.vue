<template>
  <section>
    <ul>
      <li v-for="(item, idx) in bestSellerItems" :key="idx">
        <figure>
          <img v-bind:src="item.image_path_0" v-bind:alt="item.name">
          <figcaption>
            <h1>{{item.name}}</h1>
            <h2>{{item.class}}</h2>
            <h2>${{item.price.toFixed(2)-0.01}}</h2>
            <h2>750ml</h2>
            <h2>{{item.country}}</h2>
            <button @click="addItem(item.id)">ADD TO CART</button>
          </figcaption>
        </figure>
      </li>
    </ul>
    <button @click="goToProducts">SEE OUR FULL COLLECTION</button>
  </section>
</template>

<script>
export default {
  name: "HomeBestSellerCompo",
  props: ["bestSellerItems", "logFlag"],
  methods:{
    addItem(item){
      this.$emit("addToItem", this.logFlag, item);
    },
    goToProducts(){
      this.$router.push({name:'products-page'});
    }
  }
}
</script>

<style scoped>
  ul{
    display: flex;
    list-style: none;
  }
</style>