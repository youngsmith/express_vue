<template>
  <div>
    <div>
      <h2>Find a place</h2>
      <label>
        <div class="input-group">
            <gmap-autocomplete
            class="form-control"
            @place_changed="setPlace"
            >
            </gmap-autocomplete>
            <button class="btn btn-primary" @click="searchLoc">search</button>
        </div>
      </label>
      <br/>

    </div>
    <br>
    <gmap-map
      :center="center"
      :zoom="14"
      @click="mapClickAddMarker"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
      ></gmap-marker>
    </gmap-map>


    <p v-if="currentPlace">{{ currentPlace.formatted_address }}</p>

  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense   
      center: { lat: 37.553523, lng: 126.991591 },
      markers: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
        this.currentPlace = place;
    },
    searchLoc() {
        if (this.currentPlace) {
            this.center = this.currentPlace.geometry.location;
            this.currentPlace = null;
        }
    },
    mapClickAddMarker(e){
        this.markers = [];
        this.markers.push({ position: e.latLng });
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>