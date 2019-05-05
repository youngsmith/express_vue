<template>
  <div class="App"/>
</template>

<script>
import gmapsInit from '../utils/gmaps';

export default {
  name: 'App',
  async mounted() {
    try {
      const google = await gmapsInit();
      const geocoder = new google.maps.Geocoder();
      const map = new google.maps.Map(this.$el);
      const locations = [
        {
          position: {
            lat: 37.489848,
            lng: 127.081474
          }
        }
      ];
      geocoder.geocode({ address: 'Korea' }, (results, status) => {
        if (status !== 'OK' || !results[0]) {
          throw new Error(status);
        }

        map.setCenter(results[0].geometry.location);
        map.fitBounds(results[0].geometry.viewport);
      });



      const markerClickHandler = (marker) => {
        map.setZoom(13);
        map.setCenter(marker.getPosition());
      };

      locations.map((location) => {
        const marker = new google.maps.Marker({ ...location, map });
        marker.addListener('click', () => markerClickHandler(marker));
        return marker;
      });


    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.App {
  width: 80vw;
  height: 80vh;
}
</style>