<template>
    <div>
        <div id="read">
            <div id="read_head">
                <h3>{{ doc.title }}</h3>
                <div id="read_timestamp">
                    작성일 | 
                    {{ doc.createDate }}
                    {{ doc.createTime }}
                </div>
            </div>
            <hr>
            <div v-html="doc.data" id="read_contents"></div>
        </div>
        
        
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data(){
        return{
            doc: ''
        }
    },
    mounted() {
        this.doc = this.posts[this.$route.params.index];
    },
    computed: {
        ...mapState([
            'posts'
        ])
     },
    methods: {

    }
}
</script>

<style>
#read {
    margin-top: 100px;
    margin-bottom: 100px;
    border-style: solid;
    border-width:thin;
    border-radius: 1px;
    widows: 100px;
    border-color:black;
    box-shadow: 2px 2px 2px 2px gray;
    background-color:ghostwhite;
}
#read_timestamp {
    font-size: 80%;
    text-align: right;
    margin-right: 10px;
}
#read_contents {
    height: auto;
    padding: 3%;
    margin-bottom: 15%;
    text-align:justify;
}
#read_head {
    padding: 5%;
    height: 100px;
}
</style>