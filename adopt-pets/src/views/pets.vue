<template>
    <div>
        {{ pet() }}
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data(){
        return {}
    },
    computed: {
        ...mapState([
            'dogs',
            'cats'
        ])
    },
    methods: {
        pet(){
            if(this.$route.params.species == 'dogs') return this.dogs[this.$route.params.id];
            else return this.cats[this.$route.params.id];
            
        }
    }
}
</script>