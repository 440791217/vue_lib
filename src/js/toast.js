/**
 * Created by mark on 2017/2/9.
 */
var Toast = require('mint-ui').Toast;

function myToast() {

    var config;

    function install(Vue) {

        Vue.mToast=config={
            show:show,
            position:'bottom',
            duration:3000,
        }

    }


    function show(data) {

        if(typeof (data)=='string'){
            data={
                f_message:data
            }
        }

        var message=data.f_message;
        var position=data.f_position==undefined?config.position:data.f_position;
        var duration=data.f_duration==undefined?config.duration:data.f_duration;

        Toast({
            message:message,
            position:position,
            duration:duration,
        })

    }


    return {
        install:install
    }
}
module.exports=new myToast();