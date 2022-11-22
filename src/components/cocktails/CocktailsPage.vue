<template>
  <div class="cocktails-page">
    <h1>Cocktails</h1>
    <!-- logo -->
    <div class="recipes">
      <figure>
        <img src="data\/images\/Bruichladdich_Octomore_8.3_0.jpg" alt="recipe1">
        <figcaption>
          <h2>Boozy dark delight</h2>
          <ul>
            <li>ice cubes ...... optional</li>
            <li>Orange Liqueur ...... 25ml</li>
            <li>Whisky ...... 25ml</li>
            <li>stout ...... 200ml</li>
            <li>chocolate orange shavings, to garnish ...... optional</li>
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
        <img src="data\/images\/Bruichladdich_Octomore_8.3_1.jpg" alt="recipe2">
        <figcaption>
          <h2>Brown derby</h2>
          <ul>
            <li>Sugar ...... 2tsp</li>
            <li>Honey ...... 10ml</li>
            <li>Pink grapefruit juice ...... 35ml</li>
            <li>Irish Whisky ...... 50ml</li>
            <li>grapefruit wedge ...... to garnish</li>
          </ul>
          <ol>
            <li>
              Tip the whiskey, grapefruit juice and honey into a cocktail shaker.
            </li>
            <li>
              Shake to combine, then double- strain into a stemmed cocktail glass (sometimes called a Nick and Nora glass). Garnish with a grapefruit wedge before serving.
            </li>
          </ol>
        </figcaption>
      </figure>
      <figure>
        <img src="data\/images\/Bruichladdich_Octomore_8.3_2.jpg" alt="recipe3">
        <figcaption>
          <h2>OLd FASHIONED</h2>
          <ul>
            <li>Sugar ...... 2tsp</li>
            <li>Angostura bitters ...... 1-2 dashes</li>
            <li>Water ...... little</li>
            <li>Scotch Whisky ...... 60ml</li>
            <li>soda water ...... optional</li>
            <li>maraschino cherry ...... optional</li>
            <li>Orange Slice ...... some</li>
          </ul>
          <ol>
            <li>
              Put the sugar, bitters and water in a small tumbler. Mix until the sugar dissolves if using granulated. Fill your glass with ice and stir in the whisky. Add a splash of soda water if you like and mix. Garnish with the orange and cherry.
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
* {
  color: whitesmoke;
}

figure {
  display: flex;
  column-gap: 5vh;
}

figure:nth-child(2){
  flex-direction: row-reverse;
}
</style>