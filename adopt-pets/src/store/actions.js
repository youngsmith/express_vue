export default {
    getPosts: ({ commit }) => {
        commit('getPosts');
    },
    createPost: ({ commit }, payload) => {
        commit('createPost',payload);
    },
    setPosition: ({commit}, payload) => {
        commit('setPosition', payload);
    }
}