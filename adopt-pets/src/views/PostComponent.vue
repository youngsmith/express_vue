<template>
  <div class="container">
    <h1>Latest Posts</h1>
    <b-button variant="outline-primary" @click="getPosts">Refresh</b-button>
    <div class="create-post">
      <label for="create-post">message : </label>
      <input type="text" id="create-post" v-model="text" placeholder="create a post" @keyup.enter="handlePost">
      <button @click="handlePost">Post!</button>
    </div>
    <hr>
    <p class="error" v-if="error"> {{ error }} </p>
    <div class="posts-container">
        <div class="post"
          v-for="(post) in posts"
          :key="post._id"
        >
          {{ `${ post.createdAt }` }}
          <p class="text">{{ post.data }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      error: '',
      text: ''
    }
  },
  computed: {
    ...mapState([
        'posts'
    ])
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