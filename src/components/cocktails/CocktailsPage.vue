<template>
  <div class="cocktails-page">
    <section class="video">
      <video src="../../video/cocktails-01.mp4" autoplay loop muted></video>
    </section>
    <div class="lines">
      <aside class="lines01"></aside>
      <h1>RECIPES</h1>
      <aside class="lines01"></aside>
    </div>
    <!-- logo -->
    <div class="recipes">
      <figure>
        <img src="../../img/dark-stormy.webp" alt="recipe1" />
        <figcaption>
          <h2>Boozy dark delight</h2>
          <ul>
            <li>Ice cubes ....................................... optional</li>
            <li>Orange Liqueur ...................................... 25ml</li>
            <li>Whisky .............................................. 25ml</li>
            <li>Stout .............................................. 200ml</li>
            <li>Chocolate orange shavings, to garnish............ optional</li>
          </ul>
          <ol>
            <li>
              Drop a few ice cubes, if using, into a short glass and pour over the orange liqueur and whisky.
            </li>
            <li>
              Top up the drink with the stout, then garnish with the chocolate orange shavings, if you like.
            </li>
          </ol>
        </figcaption>
      </figure>
      <figure>
        <img src="../../img/brown-derby.jpeg" alt="recipe2" />
        <figcaption>
          <h2>Brown derby</h2>
          <ul>
            <li>Sugar ............................................... 2tsp</li>
            <li>Honey ............................................... 10ml</li>
            <li>Pink grapefruit juice ............................... 35ml</li>
            <li>Irish Whisky ........................................ 50ml</li>
            <li>grapefruit wedge .............................. to garnish</li>
          </ul>
          <ol>
            <li>
              Tip the whiskey, grapefruit juice and honey into a cocktail shaker.
            </li>
            <li>
              Shake to combine, then double- strain into a stemmed cocktail glass (sometimes called a Nick and Nora
              glass). Garnish with a grapefruit wedge before serving.
            </li>
          </ol>
        </figcaption>
      </figure>
      <figure>
        <img src="../../img/old-fashioned.jpeg" alt="recipe3" />
        <figcaption>
          <h2>Old Fashioned</h2>
          <ul>
            <li>Sugar ............................................... 2tsp</li>
            <li>Angostura bitters ............................. 1-2 dashes</li>
            <li>Water ............................................. little</li>
            <li>Scotch Whisky ....................................... 60ml</li>
            <li>soda water ...................................... optional</li>
            <li>Orange Slice ........................................ some</li>
          </ul>
          <ol>
            <li>
              Put the sugar, bitters and water in a small tumbler. Mix until the sugar dissolves if using granulated.
              Fill your glass with ice and stir in the whisky. Add a splash of soda water if you like and mix. Garnish
              with the orange and cherry.
            </li>
          </ol>
        </figcaption>
      </figure>
    </div>
    <!-- reference https://www.bbcgoodfood.com/recipes/boozy-dark-delight -->
  </div>
</template>

<script>
export default {
  name: "CocktailsPage",
};
</script>

<style scoped>
.lines01 {
  width: 50%;
  height: .1rem;
  background-color: #FDEEC0;
}

.lines {
  display: flex;
  align-items: center;
}

.video {
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

video {
  height: 100%;
  width: 100%;
  margin-bottom: 10vh;
}

.recipes {
  margin-top: 10vh;
  margin-bottom: 15vh;
  margin-left: 25vh;
  margin-right: 25vh;
  display: flex;
  flex-direction: column;
  row-gap: 10vh;
}

figure {
  display: flex;
  flex-direction: row;
  column-gap: 2vh;
  justify-content: space-between;
  background-color: black;
}

figure:nth-child(2) {
  display: flex;
  flex-direction: row-reverse;
}

img {
  width: 35%;
  height: 52vh;
}

figcaption {
  color: #FDEEC0;
  font-family: 'DM Mono', monospace;
  display: flex;
  flex-direction: column;
  width: 65%;
  margin-left: 1vh;
  margin-right: 1vh;
}

h2 {
  font-weight: lighter;
  margin-bottom: 3vh;
  margin-top: 2vh;
}

ul {
  margin-bottom: 4vh;
}

li {
  font-weight: lighter;
  list-style: none;
}
</style>
