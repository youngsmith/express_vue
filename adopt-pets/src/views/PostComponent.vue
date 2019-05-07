<template>
  <div class="container">
    <div id="pc_head">
      <h1>Latest Posts</h1>
    </div>
    <div class="pc_btn_container" align='right'>
      <b-button id="pc_button" @click="getPosts">Refresh</b-button>
      <router-link to="/write"><b-button id="pc_button">write</b-button></router-link>
    </div>
    <hr id="pc_hr">
    <p class="error" v-if="error"> {{ error }} </p>
    <div v-else class="overflow-auto">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      >
      </b-pagination>
      <b-table
        id="my-table"
        :items="posts"
        :fields="fields"
        :per-page="perPage"
        :current-page="currentPage"
        outlined
        bordered
        hover
        small
      >
        <template slot="index" slot-scope="data">
          {{ data.index + 1 }}
        </template>

        <template slot="title" slot-scope="data">
        <!-- `data.value` is the value after formatted by the Formatter -->
        <router-link :to="`/posts/${ data.index + (currentPage - 1) * perPage }`">{{ data.value }}</router-link>
        </template>

      </b-table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      fields: [
        'index',
        'title',
        { key: 'userId', label: 'id' },
        { key: 'createDate', label: 'Date' },
        { key: 'createTime', label: 'Time' }
      ],
      perPage: 20,
      currentPage: 1,
      text: ''
    }
  },
  computed: {
    ...mapState([
        'posts',
        'error'
    ]),
    rows(){
      return this.posts.length;
    }
  },
  methods: {
    ...mapActions([
      'createPost',
      'getPosts'
    ]),
    handlePost(){
      let data = this.text;
      this.text = '';
      this.createPost(data);
    },
    async deletePost(id){
      try{
        console.log(id);
        if(!confirm("do you want to delete it ?")) return;
        await PostService.deletePost(id);
        this.posts = await PostService.getPosts();
      } catch(err){
        this.error = err.message;
      }
    }
  },
  created() {
    this.getPosts();
  },
}
</script>

<style>
#pc_button {
  margin: 0 0 0 10px;
  width: auto;
}
#my-table {
  background-color:aliceblue
}
#pc_hr {
  margin-top: 3px;
}
#pc_head{
  margin: 10% 0 5% 0;
}
</style>


