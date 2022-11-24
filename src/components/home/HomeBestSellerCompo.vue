<template>
  <section>
    <ul>
      <li v-for="(item, idx) in bestSellerItems" :key="idx">
        <figure>
          <img v-bind:src="item.image_path_0" v-bind:alt="item.name">
          <figcaption>
            <div>
              <h2>{{ item.name }}</h2>
            </div>
            <div class="info">
              <h3>{{ item.class }}</h3>
              <h3>${{ item.price.toFixed(2) - 0.01 }}</h3>
              <h3>750ml</h3>
              <h3>{{ item.country }}</h3>
              <button @click="addItem(item.id)">ADD TO CART</button>
            </div>
          </figcaption>
        </figure>
      </li>
    </ul>
    <button class="see-more" @click="goToProducts">SEE OUR FULL COLLECTION</button>
  </section>
</template>

<script>
export default {
  name: "HomeBestSellerCompo",
  props: ["bestSellerItems", "logFlag"],
  methods: {
    addItem(item) {
      this.$emit("addToItem", this.logFlag, item);
    },
    goToProducts() {
      this.$router.push({ name: 'products-page' });
    }
  }
}
</script>

<style scoped>
section {
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5vh;
}

ul {
  display: flex;
  column-gap: 15vh;
  list-style: none;
}

figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  height: 77vh;
  width: 45vh;
  border-radius: 5%;
}

img {
  height: 40vh;
  width: 30vh;
  margin-top: 2vh;
}

figcaption {
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 33vh;
  justify-content: space-between;
  row-gap: 2vh;
  font-family: 'DM Mono', monospace;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

h2 {
  font-size: 20px;
  margin-top: 1vh;
  width: 30vh;
  text-decoration: underline;
  color: #FDEEC0;
  font-weight: lighter;
}

h3 {
  font-size: 16px;
  color: #FDEEC0;
  font-weight: lighter;
}

div > button {
  background-color: #111111;
  color: #FDEEC0;
  height: 6vh;
  margin-top: 2vh;
}

div > button:hover {
  border: 1px solid #111111;
  background-color: #FDEEC0;
  color: #111111;
  transition: .5s;
  cursor: pointer;
}

.see-more {
  background-color: #111111;
  color: #FDEEC0;
  border: 2px solid #FDEEC0;
  margin-top: 6vh;
  margin-bottom: 15vh;
  height: 10vh;
  width: 70vh;
  font-size: 22px;
}

.see-more:hover {
  background-color: #FDEEC0;
  color: #111111;
  transition: .5s;
}
</style>
