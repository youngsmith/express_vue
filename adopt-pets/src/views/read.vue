<template>
    <div>
        <div id="read">
            <div id="head">
                <h3>{{ doc.title }}</h3>
                <div id="timestamp">
                    작성일 | 
                    {{ doc.createDate }}
                    {{ doc.createTime }}
                </div>
            </div>
            <hr>
            <div id="contents">
             {{ doc.data }}
            </div>
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
    border-style: solid;
    border-width:thin;
    border-radius: 1px;
    widows: 100px;
    border-color:black;
    box-shadow: 2px 2px 2px 2px gray;
    background-color:ghostwhite;
}
#timestamp {
    font-size: 80%;
    text-align: right;
    margin-right: 10px;
}
#contents {
    height: 150px;
    padding: 3%;
    margin-bottom: 3%;
    text-align:justify;
}
#head {
    padding: 5%;
    height: 100px;
}
</style>