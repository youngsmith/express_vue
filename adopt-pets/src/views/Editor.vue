<template>
  <div id="editor_wrap">
    
    <!--- form-modal --->
    <b-modal ref="form-modal" hide-footer title="Pet Info">
      <b-form>  
      <b-form-group label="Name" label-for="name_input" align='left'>
        <b-form-input
          id="name_input"
          v-model="formData.name"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Breed" label-for="breed_input" align='left'>
        <b-form-input
          id="breed_input"
          v-model="formData.breed"
        ></b-form-input> 
      </b-form-group>

      <b-form-group label="Gender" label-for="gender_input" align='left'>
        <b-form-select
          id="gender_input"
          v-model="formData.gender"
          :options="['male','female']"
        ></b-form-select>
      </b-form-group>

      <b-form-group label="Age" label-for="age_input" align='left'>
        <b-form-input
          id="age_input"
          type="number"
          v-model="formData.age"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Weight" label-for="weight_input" align='left'>
        <b-form-input
          id="weight_input"
          type="number"
          v-model="formData.weight"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Species (required)" label-for="species_input" align='left'>
        <b-form-select
          id="species_input"
          v-model="formData.species"
          :options="['cat','dog']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group label="Time (required)" label-for="time_input" align='left'>
        <b-row fluid>
          <b-col sm="6" v-for="(opt,index) in form_opts" :key="index">
              <b-form-input :type="opt.type" v-model="opt.value"></b-form-input>
          </b-col>
        </b-row>
      </b-form-group> 

      <b-form-group label="Color (required)" label-for="color_input" align='left'>
        <b-button class="mr-3" required @click="showColorPickerModal()">choose</b-button>
        <span>
          {{ formData.color }}
          <svg height="32" width="32">
            <circle cx="16" cy="16" r="15" :fill="formData.color" />
          </svg>
        </span>
      </b-form-group>

      

      <b-form-group label="Location (required)" label-for="loc_input" align='left'>
        <b-button class="mr-3" required @click="showGmapsModal()">search</b-button>
        <span v-if="position">{{ position }}</span>
        <span v-else>NONE</span> 
      </b-form-group> 

      

      <b-button class="mt-2" variant="outline-primary" block 
        :disabled="colorSaved === false || formData.species === '' || formData.location === null || formData.time === null"
        @click="saveFormData()"
      >save</b-button>
      <b-button class="mt-3" variant="outline-danger" block @click="discardFormData()">close</b-button>
      </b-form>
    </b-modal>

    



    <!--- gmaps-modal --->
    <b-modal hide-footer ref="gmaps-modal" id="gmaps-modal" title="Find a place">
      <gmaps />
      <b-button class="mt-2" variant="outline-primary" block 
          :disabled="position === null"
          @click="savePosition()"
        >save</b-button>
    </b-modal>


    <!--- color-picker-modal --->
    <b-modal hide-footer ref="color-picker-modal" title="Choose a color">
      <ColorPicker v-model="formData.color"/>
      <div class="selected-color-info">
        <p>Selected color:</p>
        <svg height="32" width="32">
          <circle cx="16" cy="16" r="15" :fill="formData.color" />
        </svg>
      </div>
      <p>{{ formData.color }}</p>
      <b-button class="mt-2" variant="outline-primary" block 
          :disabled="formData.color === null"
          @click="saveColor"
        >save</b-button>
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
  import { mapActions, mapState } from 'vuex';
  import gmaps from './gmaps2.vue';
  import ColorPicker from 'vue-color-picker-wheel'

  export default {
    name: 'editor',
    components: {
      VueEditor,
      gmaps,
      ColorPicker
    },
    mounted() {
    },
    data() {
      return {
        form_opts: [
          { type: 'date', value: '' },
          { type: 'time', value: '' }
        ],
        content: '',
        title: '',
        formData: {
          name: '',
          age: null,
          species: '',
          breed: '',
          gender: '',
          color: null,
          weight: null,
          location: null,
          note: '',
          time: {
            year: '',
            month: '',
            day: '',
            hour: '',
            min: ''
          }
        },
        petInfoSaved: false,
        colorSaved: false
      }
    },
    computed: {
      ...mapState([
        'position'
      ])
    },
    watch: {
        form_opts : {
          handler(val) {
            if(val[0].value !== ''){
              let date = val[0].value.split('-');
              this.formData.time.year = date[0];
              this.formData.time.month = date[1];
              this.formData.time.day = date[2];
            }
            if(val[1].value !== ''){
              let time = val[1].value.split(':');
              this.formData.time.hour = time[0];
              this.formData.time.min = time[1];
            }
          },
          deep: true
        }
    },
    methods : {
      ...mapActions([
        'createPost',
      ]),
      sendPost(){
        if(this.petInfoSaved){
          let payload = {
            'title': this.title,
            'content': this.content,
            'petInfo': this.formData
          }
          this.createPost(payload);
          this.$router.push({ path: '/posts' });
        }
        else {
          alert('please fill out pet info form.');
          this.$refs['form-modal'].show();
        }
      },
      showFormModal(){
        this.$refs['form-modal'].show();
      },
      saveFormData(){
        this.petInfoSaved = true;
        this.$refs['form-modal'].hide();
      },
      discardFormData(){
        if(this.petInfoSaved) this.$refs['form-modal'].hide();
        else{
          for(let key in this.formData)
            this.formData[key] = '';
          this.$refs['form-modal'].hide();
        }
      },
      showGmapsModal() {
        this.$refs['gmaps-modal'].show();
      },
      savePosition() {
        this.formData.location = this.position;
        this.$refs['gmaps-modal'].hide();
      },
      showColorPickerModal(){
        this.$refs['color-picker-modal'].show();
      },
      saveColor() {
        this.colorSaved = true;
        this.$refs['color-picker-modal'].hide();
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