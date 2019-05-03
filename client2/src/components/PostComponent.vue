<template>
  <div class="container">
    <h1>Latest Posts</h1>
    <div class="create-post">
      <label for="create-post">message : </label>
      <input type="text" id="create-post" v-model="text" placeholder="create a post" @keyup.enter="createPost">
      <button @click="createPost">Post!</button>
    </div>
    <hr>
    <p class="error" v-if="error"> {{ error }} </p>
    <div class="posts-container">
        <div class="post"
          v-for="(post) in posts"
          :key="post._id"
          @dblclick="deletePost(post._id)"
        >
          {{ `${ post.createdAt }` }}
          <p class="text">{{ post.data }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import PostService from '../PostService';

export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created(){
    try{
      this.posts = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost(){
      try{
        await PostService.insertPost(this.text);
        this.posts = await PostService.getPosts();
        this.text = '';
      } catch(err){
        this.error = err.message;
      }
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
  }
}
</script>