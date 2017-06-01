/**
 * Created by mark on 2017/4/27.
 */
import weui from 'weui.js'
import 'weui'

function myWeui() {
    
    function install(Vue) {
        Vue.prototype.weui=weui;
    }
    
    return {
        install:install,
    }
}

function myToast() {

    var config={
        show:show,
        duration:3000,
        callback:undefined,
        className:'custom-classname',
    }

    function install(Vue) {
        
        if(Vue.prototype.weui){
            
            Vue.prototype.weui['ggToast']=config={
                show:show,
            }
            
        }else{
            console.log("weui is not installed");
            return;
        }
    }
    
    function show(data) {

        var message=data.f_message;
        var duration=data.f_duration;
        var callback=data.f_callback;

        message=message?message:"";
        duration=duration?duration:config.duration;
        weui.toast(message,{
            duration:duration,
            callback:function(){
                if(callback){
                    callback();
                }
            }
        });

    }
    
    return {
        install:install,
        config:config,
    }
}


export {
    weui,
    myWeui,
    myToast,
}