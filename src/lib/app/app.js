/**
 * Created by mark on 2017/4/14.
 */
import {Context} from '../context/context'

function ggApp() {

    function install(Vue) {
        Vue.prototype.ggApp={
            Context:function(){
                return new Context();
            }
        }
    }


    return {
        install:install,
    }
}

export {
    ggApp as ggApp,
}