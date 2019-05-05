<template>
  <div id="editor_wrap">
    
    <!--- modal --->
    <b-modal ref="my-modal" hide-footer title="Pet Info">
      <b-form>  
      <b-form-group id="input-group-2" label="Name" label-for="input-2" align='left'>
        <b-form-input
          id="input-2"
          v-model="formData.name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Breed" label-for="input-2" align='left'>
        <b-form-input
          id="input-2"
          v-model="formData.breed"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Gender" label-for="input-3" align='left'>
        <b-form-select
          id="input-3"
          v-model="formData.gender"
          :options="['male','female']"
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species (required)" label-for="input-3" align='left'>
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cat','dog']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Age" label-for="input-2" align='left'>
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.age"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Color (required)" label-for="input-2" align='left'>
        <b-form-input
          id="input-2"
          v-model="formData.color"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Weight" label-for="input-2" align='left'>
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.weight"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Location (required)" label-for="input-2" align='left'>
        <b-form-input
          id="input-2"
          v-model="formData.location"
          required
        ></b-form-input>
      </b-form-group>

      <b-button class="mt-2" variant="outline-primary" block 
        :disabled="formData.color === '' || formData.species === ''"
        @click="saveFormData()"
      >save</b-button>
      <b-button class="mt-3" variant="outline-danger" block @click="discardFormData()">close</b-button>
      </b-form>
    </b-modal>




    







    <b-form-input id="editor_title" v-model="title" placeholder="Title"></b-form-input>
    <div id="editor">
      <vue-editor v-model="content"></vue-editor>
    </div>
    <div id="editor_btn_container">
      <button class="btn btn-primary"
      @click="sendPost"
      :disabled="content === '' || title === ''"
      >
      send
      </button>
      <button class="btn btn-primary register_button" @click="showFormModal()">Register New Pet</button>
    </div>
  </div>
 </template>

<script>
  import { VueEditor } from 'vue2-editor';
  import { mapActions } from 'vuex';

  export default {
    name: 'editor',
    components: {
      VueEditor
    },
    mounted() {
    },
    data() {
      return {
        content: '',
        title: '',
        formData: {
          name: '',
          age: '',
          species: '',
          breed: '',
          gender: '',
          color: '',
          weight: '',
          location: ''
        },
        petInfoSaved: false
      }
    },
    methods : {
      ...mapActions([
        'createPost'
      ]),
      sendPost(){
        if(this.petInfoSaved){
          let payload = {
            'title': this.title,
            'content': this.content,
            'pet': this.formData
          }
          this.createPost(payload);
          this.$router.push({ path: '/posts' })
        }
        else {
          alert('please fill out pet info form.')
          this.$refs['my-modal'].show();
        }
      },
      showFormModal(){
        this.$refs['my-modal'].show();
      },
      saveFormData(){
        this.petInfoSaved = true;
        this.$refs['my-modal'].hide();
      },
      discardFormData(){
        if(this.petInfoSaved) this.$refs['my-modal'].hide();
        else{
          for(let key in this.formData)
            this.formData[key] = '';
          this.$refs['my-modal'].hide();
        }
      }
    }
  }
</script>

<style>
  #editor {
    background-color: white;
  }
  #editor_btn_container {
    margin-top: 20px;
  }
  #editor_wrap {
    margin-top: 10%;
  }
  #editor_title {
    margin-bottom: 10px;
  }
</style>