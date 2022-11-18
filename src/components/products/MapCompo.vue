<template>
    <div class="products-map-compo">
        <h1>Map</h1>
    </div>
    <div class="main">
        <div class="flex">
            <!-- Map Display here -->
            <div class="map-holder">
                <div id="map"></div>
            </div>
            <!-- Coordinates Display here -->
            <div class="dislpay-arena">
                <div class="coordinates-header">
                    <h3>Current Coordinates</h3>
                    <p>Latitude:</p>
                    <p>Longitude:</p>
                </div>
                <div class="coordinates-header">
                    <h3>Current Location</h3>
                    <div class="form-group">
                        <input type="text" class="location-control" :value="location" readonly />
                        <button type="button" class="copy-btn">Copy</button>
                    </div>
                    <button type="button" class="location-btn">Get Location</button>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script> -->
<script>
import axios from 'axios';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

export default {
    name: "ProductsMapCompo",
    data() {
        return {
            access_token: import.meta.env.VITE_MAPBOX_APIKEY,
            loading: false,
            location: '',
            center: [0, 0],
            map: {}
        };
    },
    mounted() {
        this.createMap()
    },
    methods: {
        async createMap() {
            try {
                mapboxgl.accessToken = this.access_token;
                this.map = new mapboxgl.Map({
                    container: "map",
                    style: "mapbox://styles/mapbox/streets-v11",
                    center: this.center,
                    zoom: 11,
                });
            } catch (err) {
                console.log("map error", err);
            }
        },
    },
};

// // Geocode
// google.charts.load('current', {
//     'packages': [
//         'geochart'
//     ],
//     'mapsApiKey': 'ここにAPIキーをいれてね'
// });
</script>