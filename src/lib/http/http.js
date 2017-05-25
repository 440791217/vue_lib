/**
 * Created by mark on 2017/1/23.
 */
var MD5 = require("md5")
var Http = require("vue-resource")
var cltData = require('mark_cltdata')
var log = require("mark_logger")
var _ = require('lodash')


function httpClient() {

    var config;

    function install(Vue) {
        Vue.use(Http);
        Vue.prototype.HttpClient = config = {
            Base_ACCESSTOKEN: "0000000000000000",
            httpUrl: undefined,
            headers: undefined,
            loading: false,
            progress: undefined,
            toast: undefined,
            fap: {},
            isIdle: true,
            counts: 0,
            post: post,
        }


        function post(req) {

            var f_url = req.f_prefix!=undefined?req.f_prefix:config.httpUrl + req.f_suffix;
            var f_content = req.f_content != undefined ? req.f_content : {};
            var f_callback = req.f_callback;
            var f_show_loading = req.f_show_loading != undefined ? req.f_show_loading : true;
            var reqOptions = {
                headers: config.headers,
                before: function (request) {
                    // abort previous request, if exists
                    if (this.previousRequest) {
                        this.previousRequest.abort();
                    }
                    // console.log('before');
                    // set previous request on Vue instance
                    this.previousRequest = request;
                }
            }
            var f_id;
            if (_.isNumber(config.counts)) {
                f_id = ++config.counts;
            }


            f_show_loading = config.loading && f_show_loading;

            f_content = {
                body: f_content,
            }

            var data = encrypt(f_content);
            log.d("data:" + data);

            function succ(rsp) {

                if (config.counts && f_id < config.counts) {
                    log.e("http succ cancel");
                    return;
                }
                doBefore();
                exe(rsp, f_callback);
                doAfter();
            }

            function err(rsp) {
                if (config.counts && f_id < config.counts) {
                    log.e("http err cancel");
                    return;
                }
                doBefore();
                if (f_callback.error != undefined) {
                    f_callback.error(rsp);
                } else {
                    if (config.toast != undefined) {

                        var Message=config.fap["errMsg"];

                        if(!Message){
                            Message="请检查网络"
                        }

                        config.toast.show({
                            f_message: Message
                        })
                    }
                }
                doAfter();
            }


            Vue.http.post(f_url, data, reqOptions).then(succ, err);


            if (f_show_loading) {
                if (config.progress != undefined)
                    config.progress.show()
            }

            function doBefore() {

            }

            function doAfter() {
                if (f_callback.then != undefined) {
                    f_callback.then();
                }
                if (f_show_loading) {
                    if (config.progress != undefined)
                        config.progress.close()
                }
            }

            log.d('f_url:' + f_url);
        }

        function encrypt(clear) {
            log.d("encrypt start");
            var key, encryptxt, out, cleartxt;
            cleartxt = JSON.stringify(clear);
            log.d("cleartxt:" + cleartxt + "--Base_ACCESSTOKEN:" + config.Base_ACCESSTOKEN);
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
            var map = handler.f_map;


            switch (status) {
                case 200:

                    if (map) {

                        log.d("map is defined");
                        if (map[ResultCode]) {

                            map[ResultCode](body, ResultCode, Message);
                            log.d("map is exe");
                        } else {
                            log.d("map func is undefined");
                            if (ResultCode == '1013' && errFun != undefined) {
                                errFun();
                                log.d("map func 1013 is exe");
                            } else {
                                if (config.toast != undefined) {
                                    config.toast.show({
                                        f_message: Message
                                    })
                                }
                            }

                        }

                    } else {
                        if (ResultCode == '0000') {
                            if (handler.succ != undefined) {
                                handler.succ(body, ResultCode, Message);
                            }
                        } else if (ResultCode == '1013') {
                            if (errFun != undefined) {
                                errFun();
                            }
                        }

                        if (ResultCode == '0000') {

                        } else {
                            if (handler.fail != undefined) {
                                handler.fail(body, ResultCode, Message);
                            } else {
                                if (config.toast != undefined) {
                                    config.toast.show({
                                        f_message: Message
                                    })
                                }
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
        install: install
    }

}


module.exports = new httpClient();