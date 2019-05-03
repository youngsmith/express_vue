export default {
    addPet: ({ commit }, payload)=>{
        commit('appendPet',payload);
    },
    getPosts: ({ commit }) => {
        commit('getPosts');
    },
    createPost: ({ commit }, payload) => {
        commit('createPost',payload);
    }
}