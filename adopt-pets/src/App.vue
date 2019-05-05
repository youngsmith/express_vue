<template>
  <div id="app">
    <Navbar />
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Navbar from './views/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-image: url('./assets/bg_img2.jpg');
  background-size: cover
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
button {
  margin: 3px;
}
</style>
