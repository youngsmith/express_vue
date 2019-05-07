import PostService from '../PostService';

export default {
    getPosts: async (state) =>{
        try{
            state.posts = await PostService.getPosts();
            state.error = '';
        } catch(err) {
            state.error = err;
        }
    },
    createPost: async(state, payload) => {
        try{
            await PostService.insertPost(payload);
            state.posts = await PostService.getPosts();
            state.error = '';
        } catch(err){
            state.error = err;
        }
    },
    setPosition: (state, payload) => {
        try{
            state.position = payload;
        } catch(err){
            state.error = err;
        }
    }   
}
