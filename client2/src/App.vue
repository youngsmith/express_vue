<template>
  <div id="app">
    <Navbar />
    <PostComponent />
  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue'
import Navbar from './components/navbar.vue'

export default {
  name: 'app',
  components: {
    PostComponent,
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
