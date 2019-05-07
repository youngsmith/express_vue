<template>
    <div id="read_root" v-if="doc">
        <div id="read">
            <div id="read_head">
                <h3>{{ doc.title }}</h3>
                
                <div id="read_timestamp">
                    {{ doc.userId }}
                     | 
                    {{ doc.createDate }}
                    {{ doc.createTime }}
                </div>
            </div>
            <hr>
            <div v-html="doc.data" id="read_contents"></div>
        </div>
        
        <b-row>
            <b-col id="read_petInfo">
                <b-card border-variant="info" header="Pet Info">
                    <b-card-text>      
                        <table class="type05">
                            <tr>
                                <th scope="row">종 류</th>
                                <td>{{doc.petInfo.species}}</td>
                            </tr>
                            <tr>
                                <th scope="row">색 깔</th>
                                <td>{{doc.petInfo.color}}</td>
                            </tr>
                            <tr>
                                <th scope="row">목격날짜</th>
                                <td>{{doc.petInfo.time.year}}-{{doc.petInfo.time.month}}-{{doc.petInfo.time.day}}</td>
                            </tr>
                            <tr>
                                <th scope="row">목격시간</th>
                                <td>{{doc.petInfo.time.hour}}:{{doc.petInfo.time.min}}</td>
                            </tr>
                        </table>
                    </b-card-text>
                </b-card>
            </b-col> 



            <b-col id="read_gmaps">
                <b-card border-variant="info" header="목격 위치">
                    <gmaps 
                        :showAutoComplete="false" 
                        :foundMarker="doc.petInfo.location"
                    />
                </b-card>
            </b-col>

        </b-row>

    </div>
</template>

<script>
import { mapState } from 'vuex';
import gmaps from './gmaps2.vue';

export default {
    components: {
        gmaps
    },
    data(){
        return{
            doc: null
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
    margin-bottom: 10%;
    text-align:justify;
}
#read_head {
    padding: 5%;
    height: 100px;
}
#read_root {
    margin-bottom: 10%;
}
#read_petInfo {
    width: 45%;
}
table.type05 {
    border-top: 1px solid #ccc;
}
table.type05 th {
    width: 150px;
    padding: 10px;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
    background:beige;
}
table.type05 td {
    width: 350px;
    padding: 10px;
    vertical-align: top;
    border-bottom: 1px solid #ccc;
}
</style>