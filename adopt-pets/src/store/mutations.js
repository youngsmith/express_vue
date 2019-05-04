import PostService from '../PostService';

export default {
    appendPet: (state, payload) =>{
        let species = payload.species + 's';
        state[species].push(payload);
    },
    getPosts: async (state) =>{
        try{
            state.posts = await PostService.getPosts();
        } catch(err) {
            console.log(err);
        }
    },
    createPost: async(state, payload) => {
        try{
            console.log('createPost!')
            console.log(payload);
            await PostService.insertPost(payload);
            state.posts = await PostService.getPosts();
        } catch(err){
            console.log(err);
        }
      }
}
