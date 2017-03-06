/**
 * Created by mark on 2017/3/1.
 */
/**
 * Created by mark on 2016/12/29.
 */
import {Base64} from "js-base64"
import * as log from "mark_logger"

function nav() {

    var input;

    init();

    function init() {
        var params = GetRequest();
        var data = params['data'];
        log.d("nav data:" + data);

        input = Base64.decode(data);
        log.d("nav params:" + input);


        try {
            input = JSON.parse(input);
        } catch (e) {
            log.e("nav input is not json");
        }


    }


    function install(Vue) {
        Vue.ggNav = new f();
    }

    function push(f_href, f_data) {

        var f_link;

        if (f_data==undefined) {
            log.d("nav push data is unDefined");
            f_data = {}
        }

        f_data = JSON.stringify(f_data);
        log.d("nav push data:" + f_data);
        f_data = "data=" + Base64.encode(f_data);
        f_link = f_href + "?" + f_data;
        window.location.href = f_link;
    }

    function GetRequest() {

        var strs;
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }


    function f() {
        return {
            install: install,
            push: push,
            input: input,
        }
    }

    return f();
}

export default nav();