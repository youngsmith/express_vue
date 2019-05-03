export default {
    catsCount: (state) => {
        return state.cats.length;
    },
    dogsCount: (state) => {
        return state.dogs.length;
    },
    animalsCount: (state, getter) =>{
        return getter.catsCount() + getter.dogsCount();
    }
}

