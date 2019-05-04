<template>
  <div class="container">
    <h1>Latest Posts</h1>
    <b-button @click="getPosts">Refresh</b-button>
    <router-link to="/write">write</router-link>

    <div class="create-post">
      <label for="create-post">message : </label>
      <input type="text" id="create-post" v-model="text" placeholder="create a post" @keyup.enter="handlePost">
      <button @click="handlePost">Post!</button>
    </div>
    <hr>
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
        dark
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
      error: '',
      text: ''
    }
  },
  computed: {
    ...mapState([
        'posts'
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
button {
  margin: 10px;
}
</style>


