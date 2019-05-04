<template>
  <div id="wrap">
    <b-form-input id="title" v-model="title" placeholder="Title"></b-form-input>
    <div id="editor">
      <vue-editor v-model="content"></vue-editor>
    </div>
    <button class="btn btn-primary" @click="sendPost">send</button>
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

    data() {
        return {
          content: '',
          title: ''
        }
    },
    methods : {
      ...mapActions([
        'createPost'
      ]),
      sendPost(){
        let payload = {
          'title' : this.title,
          'content' : this.content
        }
        this.createPost(payload);
        
      }
    }
  }
</script>

<style>
  #editor {
    background-color: white;
  }
  button {
    margin-top: 20px;
    width: 10%;
  }
  #wrap {
    margin-top: 10%;
  }
  #title {
    margin-bottom: 10px;
  }
</style>