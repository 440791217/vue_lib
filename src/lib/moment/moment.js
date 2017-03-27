/**
 * Created by mark on 2017/3/15.
 */
import Moment from 'moment'

function moment() {

    function install(Vue) {
        Vue.prototype.ggMoment=Moment;
    }

    return {
        install:install,
    }
}

export default moment();