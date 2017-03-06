<template>
    <div>
        <mt-button  @click.native="getTime"  size="large" type="danger">test s001</mt-button>
    </div>
</template>
<style>

</style>
<script>
import httpClient from '../js/http'
import config from '../js/sys'
import Vue from 'vue'
import log from 'mark_logger'

Vue.use(httpClient);
var that=Vue.HttpClient;
that.httpUrl = config.site.httpUrl;
log.d("httpClient.httpUrl:"+that.httpUrl)
that.headers = {'Content-Type': 'application/x-www-form-urlencoded'};
that.reqOptions = {
    headers: that.headers
}


function s001() {
    function succ(body) {

    }

    var cmd={

    }

    return {
        f_suffix:'s001',
        f_content:cmd,
        f_callback:{
            succ:succ
        }
    }
}


    export default{
        data(){
            return{
                msg:'test http'
            }
        },
        methods:{
            getTime(){
                Vue.HttpClient.post(s001());
            },
        }
    }

</script>
