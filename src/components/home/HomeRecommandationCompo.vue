<template>
  <section>
    <article class="left">
      <figure>
        <img class="slideImg" src="../../img/month-01.png">
        <figcaption>
          <h2>THE DALMORE</h2>
          <p class="desc">
            Dalmore 12 is aged for the first nine years in American white oak
            ex-bourbon casks, before half is transferred to ex-oloroso sherry
            casks for the final three years. The result is a whisky with a
            combination of sweetness and rich, sherried flavours.
          </p>
          <div class="button">
            <button @click="addItem">ADD TO CART</button>
          </div>
        </figcaption>
      </figure>
    </article>
    <article class="right">
      <img class="slideImg" src="../../img/dalmore01.png">
    </article>
  </section>
</template>

<script>
export default {
  name: "HomeRecommandationCompo",
  props: ["logFlag"],
  methods: {
    addItem() {
      this.$emit("addToItem", this.logFlag, 0);
    },
  }
}
</script>

<style scoped>
section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 22vh;
  margin-right: 22vh;
  margin-bottom: 20vh;
}

.slideImg {
  height: 45vh;
}

.slideImg:last-child {
  height: 75vh;
  width: 75vh;
  padding-top: 3vh;
}

figcaption {
  display: flex;
  flex-direction: column;
  width: 60vh;
  margin-top: 2vh;
  row-gap: 1vh;
  text-align: center;
  font-size: 14px;
  justify-content: space-between;
}

.desc {
  font-size: 14px;
}

h2 {
  color: #FDEEC0;
  font-family: 'DM Mono', monospace;
  font-weight: lighter;
  text-decoration: underline;
}

button {
  border: 1px solid #FDEEC0;
  color: #FDEEC0;
  background-color: #111111;
  padding: 1%;
  width: 40%;
  margin-top: 1vh;
}

button:hover {
  color: #111111;
  background-color: #FDEEC0;
  cursor: pointer;
  transition: .5s;
}
</style>
