/**
 * Created by mark on 2016/12/29.
 */
import {Base64} from "js-base64"
import * as Logger from "mark_logger"

function nav() {

    function getInput() {
        var input;
        var params = GetRequest();
        var data = params['data'];
        Logger.d("nav data:" + data);

        input = Base64.decode(data);
        Logger.d("nav params:" + input);


        try {
            input = JSON.parse(input);
        } catch (e) {
            Logger.e("nav input is not json");
        }

        return input;
    }


    function install(Vue) {
        Vue.ggNav = {
            push: push,
            getInput: getInput,
        }

        Logger.d("has installed");
    }

    function push(f_href, f_data) {

        var f_link;

        if (f_data==undefined) {
            Logger.d("nav push data is unDefined");
            f_data = {}
        }

        f_data = JSON.stringify(f_data);
        Logger.d("nav push data:" + f_data);
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


    return {
        install: install,
    }
}

export default nav();