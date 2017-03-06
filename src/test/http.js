/**
 * Created by mark on 2017/1/25.
 */
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