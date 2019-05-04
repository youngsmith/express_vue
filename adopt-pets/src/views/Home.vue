<template>
  <div class="home-view-container">
    <img alt="logo" src="../assets/logo.png">

    <h1>Adopt your best friend</h1>

    <div class="number_of_pets">Dogs : {{ catsCount }} | Cats : {{ dogsCount }}</div>

    <button class="btn btn-primary register_button" @click="togglePetForm()">Register New Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Breed:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.breed"
          required
          placeholder="Enter Breed"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Gender:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.gender"
          :options="['male','female']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cat','dog']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter Age"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Color:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.color"
          required
          placeholder="Enter Color"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Weight:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.weight"
          placeholder="Enter Weight"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Location:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.location"
          placeholder="Enter Location"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Notes:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.notes"
          placeholder="Enter Notes"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
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
    return {
      showPetForm: false,
      formData:{
        name: null,
        age: null,
        species: null,
        breed: null,
        gender: null,
        color: null,
        weight: null,
        location: null,
        notes: null
      }
    }
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
      'addPet',
      'getPosts'
    ]),
    togglePetForm(){
      if(this.showPetForm){
        this.clearForm();
      }
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit(){
      let payload = {...this.formData};
      this.addPet(payload);
      this.clearForm();
    },
    clearForm(){
        for(var key in this.formData)
          this.formData[key] = null
    }
  }
}
</script>


<style>
.number_of_pets{
  margin: 100px 0px 40px 0px;
}
.register_button {
  margin: 0 0 40px;
}
</style>