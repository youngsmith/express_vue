<template>
  <div class="home-view-container">
    <img alt="logo" src="../assets/logo.png">

    <h1>Adopt your best friend</h1>

    <div class="number_of_pets">Dogs : {{ catsCount }} | Cats : {{ dogsCount }}</div>


  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'home',
  created() {
    this.getPosts();
  },
  data(){
    return {}
  },
  computed:{
    ...mapGetters([
      'animalsCount',
      'catsCount',
      'dogsCount'
    ])
  },
  methods: {
    ...mapActions([
      'getPosts'
    ])
  }
}
</script>


<style>
.number_of_pets{
  margin: 100px 0px 40px 0px;
}
</style>