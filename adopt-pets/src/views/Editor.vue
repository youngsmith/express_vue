<template>
   <div id="editor">
     <vue-editor v-model="content"></vue-editor>
   </div>
 </template>

<script>
  import { VueEditor } from 'vue2-editor'

  export default {

  components: {
    VueEditor
  },

  data() {
      return {
        content: ''
      }
    }
  }
</script>

<style>
  #editor {
    margin-top: 10%;
    background-color: white;
  }
</style>