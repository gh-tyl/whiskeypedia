<template>
  <section>
    <article class="left">
      <figure>
        <img src="https://picsum.photos/300/200" alt="recommandation">
        <figcaption>
          <h1>THE DALMORE</h1>
          <p>Dalmore 12 year whiskey. A paragraph describing this whiskey and why we love it. This is a lovely whiskey to enjoy when youre celebrating. The price and description of the distillary.</p>
          <button @click="addItem">ADD TO CART</button>
        </figcaption>
      </figure>
    </article>
    <article class="right">
      <img src="https://picsum.photos/300/400" alt="DALMORE">
    </article>
  </section>
</template>

<script>
export default {
  name: "HomeRecommandationCompo",
  props:["logFlag"],
    methods:{
    addItem(){
      this.$emit("addToItem", this.logFlag, 0);
    },
  }
}
</script>

<style scoped>
  section{
    display: flex;
  }
</style>