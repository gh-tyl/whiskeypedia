<!-- access_token: import.meta.env.VITE_MAPBOX_APIKEY, -->

<template>
  <div id="regions_div" class="mx-auto" style="width: 900px; height: 500px;"></div>
</template>

<script>
export default {
  name: "ProductsMapCompo",
  props: {
    products: Array,
  },
  data() {
    return {
      access_token: import.meta.env.VITE_GOOGLE_APIKEY,
      map_data: [
        ["Country", "Number of Products"],
      ],
    };
  },
  methods: {
    makeMapData() {
      console.log("makeMapData");
      this.products.forEach((product) => {
        let country = product.country;
        let num = 1;
        let found = false;
        console.log(product);
        this.map_data.forEach((item) => {
          console.log(item);
          if (item[0] == country) {
            item[1] += 1;
            found = true;
          }
        });
        if (!found) {
          this.map_data.push([country, num]);
        }
      });
    },

    drawMap() {
      google.charts.load("current", {
        packages: ["geochart"],
        mapsApiKey: this.access_token,
      });
      let map_data = this.map_data;
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        let data = google.visualization.arrayToDataTable(
          map_data
        );
        let options = {};
        let chart = new google.visualization.GeoChart(
          document.getElementById("regions_div")
        );
        google.visualization.events.addListener(chart, "select", selectHandler);
        chart.draw(data, options);

        function selectHandler() {
          let selectedItem = chart.getSelection()[0];
          console.log(selectedItem);
          if (selectedItem) {
            let country = data.getValue(selectedItem.row, 0);
            alert("The user selected " + country);
          }
        }
      }
    },
  },

  mounted() {
    this.makeMapData();
    this.drawMap();
  },
};
</script>