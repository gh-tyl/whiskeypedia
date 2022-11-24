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
      chart: null,
      data: null,
    };
  },
  methods: {
    makeMapData() {
      console.log("makeMapData");
      this.products.forEach((product) => {
        let country = product.country;
        let num = 1;
        let found = false;
        this.map_data.forEach((item) => {
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
      google.charts.setOnLoadCallback(this.drawRegionsMap);
    },
    drawRegionsMap() {
      this.data = google.visualization.arrayToDataTable(
        this.map_data
      );
      let options = {};
      this.chart = new google.visualization.GeoChart(
        document.getElementById("regions_div")
      );
      google.visualization.events.addListener(this.chart, "select", this.selectHandler);
      this.chart.draw(this.data, options);
    },
    selectHandler() {
      let selectedItem = this.chart.getSelection()[0];
      if (selectedItem) {
        let country = this.data.getValue(selectedItem.row, 0);
        // emit country to parent
        console.log(country);
        this.$emit("country", country);
      }
    },
  },

  mounted() {
    this.makeMapData();
    this.drawMap();
  },
};
</script>