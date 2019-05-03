export default {
    appendPet: (state, payload) =>{
        let species = payload.species + 's';
        state[species].push(payload);
    }
}