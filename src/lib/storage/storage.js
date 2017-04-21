/**
 * Created by mark on 2017/4/20.
 */
import * as store from 'store'

function storePlugin() {


    function install(Vue) {
        Vue.prototype.ggStorage={
            set:set,
            get:get,
            remove:remove,
            clearAll:clearAll,
            forEach:forEach,
        }
    }

    function set(key,value) {
        store.set(key,value);
    }

    function get(key) {
        return store.get(key);
    }
    
    function remove(key) {
        store.remove(key);
    }

    function clearAll() {
        store.clearAll();
    }

    function forEach(func) {
        store.each(func);
    }

    return {
        install:install
    }
}

export default storePlugin();