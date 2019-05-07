<template>
  <div>
    <div v-if="showAutoComplete">
      <label>
        <div class="input-group">
            <gmap-autocomplete
            class="form-control mr-3"
            @place_changed="setPlace"
            @keydown.enter="searchLoc"
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
        :position="marker"
      ></gmap-marker>
    </gmap-map>
    
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "GoogleMap",
  props: {
    showAutoComplete: {
      default: true,
      type: Boolean
    },
    foundMarker: {
      default: null,
      type: Object
    }
  },
  data() {
    return {
      // default to seoul to keep it simple
      // change this to whatever makes sense   
      center: { lat: 37.553523, lng: 126.991591 },
      currentPlace: null,
      foundMarkerSet: false,
      marker: null,

    };
  },
  computed: {
    ...mapState([
      'position'
    ])
  },
  mounted() {
    if(this.foundMarker !== null){
      this.center = this.foundMarker;
      this.marker = this.foundMarker;
      this.foundMarkerSet = true;
    }
    else this.geolocate();
  },
  methods: {
    ...mapActions([
      'setPosition'
    ]),
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    searchLoc() {
      if (this.currentPlace) {
        try{
          this.center = this.currentPlace.geometry.location;
        } catch(err){
          console.log(err);
        }
      }
    },
    mapClickAddMarker(e){
      if(this.foundMarkerSet) return;
      this.setPosition(e.latLng);
      this.marker = e.latLng;
    },
    geolocate() {
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

<style>
.pac-container {
    z-index: 100000;
}
</style>