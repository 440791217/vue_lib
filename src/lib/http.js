/**
 * Created by mark on 2017/1/23.
 */
var MD5 = require("md5")
var Http = require("vue-resource")
var cltData= require('mark_cltdata')
var log = require("mark_logger")


function httpClient() {

    var config;

    function install(Vue) {
        Vue.use(Http);
        Vue.HttpClient = config = {
            Base_ACCESSTOKEN: "0000000000000000",
            httpUrl: undefined,
            headers: undefined,
            loading: false,
            progress:undefined,
            toast:undefined,
            fap:{

            },
            post:post,
        }

        function post(req) {

            var f_url = config.httpUrl + req.f_suffix;
            var f_content = req.f_content != undefined ? req.f_content : {};
            var f_callback = req.f_callback;
            var f_show_loading = req.f_show_loading != undefined ? req.f_show_loading : true;

            f_show_loading = config.loading && f_show_loading;

            f_content = {
                body: f_content,
            }

            var data = encrypt(f_content);
            log.d("data:" + data);

            function succ(rsp) {
                doBefore();
                exe(rsp, f_callback);
                doAfter();
            }

            function err(rsp) {
                doBefore();
                if (f_callback.error!=undefined) {
                    f_callback.error(error);
                }
                doAfter();
            }

            Vue.http.post(f_url, data, config.reqOptions)
                .then(rsp=>succ(rsp),rsp=>err(rsp));


            if (f_show_loading) {
                if(config.progress!=undefined)
                    config.progress.show()
            }

            function doBefore() {

            }

            function doAfter() {
                if (f_callback.then!=undefined) {
                    f_callback.then();
                }
                if (f_show_loading) {
                    if(config.progress!=undefined)
                        config.progress.close()
                }
            }

            log.d('f_url:' + f_url + "\r\n" + "f_content:" + f_content);
        }

        function encrypt(clear) {
            log.d("encrypt start");
            var key, encryptxt, out, cleartxt;
            cleartxt = JSON.stringify(clear);
            log.d("cleartxt:" + cleartxt+"--Base_ACCESSTOKEN:"+config.Base_ACCESSTOKEN);
            key = MD5(cleartxt + config.Base_ACCESSTOKEN);
            encryptxt = cltData.cryptData(cleartxt, key);
            // log.d("encryptxt:" + encryptxt);

            var reqEncTxt = '';
            if (encryptxt.charAt(0) == '+') {
                reqEncTxt += '$';
            }
            reqEncTxt += encryptxt;
            if (encryptxt.charAt(encryptxt.length - 1) == '+') {
                reqEncTxt += '$';
            }

            out = "data=" + reqEncTxt + "&" + "signature=" + key;

            return out;
        }

        function exe(rsp, handler) {
            log.d("rsp:" + rsp.body);
            var status = rsp.status;
            var obj = JSON.parse(rsp.body);
            ;
            var body = obj['body'];
            var header = obj['header'];
            var ResultCode = header['ResultCode'];
            var Message = header['Message'];
            var errFun = config.fap[ResultCode];


            switch (status) {
                case 200:

                    if (ResultCode == '0000') {
                        if (handler.succ!=undefined) {
                            handler.succ(body, ResultCode, Message);
                        }
                    } else if (ResultCode == '1013') {
                        if(errFun!=undefined){
                            errFun();
                        }
                    }

                    if (ResultCode == '0000') {

                    } else {
                        if (handler.fail!=undefined) {
                            handler.fail(body, ResultCode, Message);
                        } else {
                            if(config.toast!=undefined){
                                config.toast.show({
                                    f_message: Message
                                })
                            }
                        }

                    }
                    break;
                default:
                    break;
            }
        }
    }



    return {
        install:install
    }

}


module.exports = new httpClient();