/**
 * Created by mark on 2017/3/7.
 */
import log from'mark_logger'
function logger() {


    function install(Vue) {
        Vue.prototype.Logger={

        }

        for(var key in log){
            Vue.prototype.Logger[key]=log[key];
        }
    }

    return {
        install:install
    }
}

export default logger();