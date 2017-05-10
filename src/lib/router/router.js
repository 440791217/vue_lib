/**
 * Created by mark on 2017/3/6.
 */
import VueRouter from 'vue-router'

function router() {

    const TYPE_ROUTER_PUSH = '1';
    const TYPE_ROUTER_REPLACE = '2';
    var jsonRouter;
    var router;

    function install(Vue, option) {
        router = option['router'];
        Vue.use(VueRouter);
        Vue.prototype.ggRouter = {
            push: push,
            replace: replace,
            go: go,
            configRouter: configRouter,
            jsonRouter: jsonRouter,
            router:router,
            debug:true,
        }


    }

    /*
     input:
     data:json={
     f_name:string
     f_params:json
     }
     */

    function push(data) {
        data['f_type'] = TYPE_ROUTER_PUSH;
        routerExe(data);
    }

    /*
     input:
     data:json={
     f_name:string
     f_params:json
     }
     */
    function replace(data) {
        data['f_type'] = TYPE_ROUTER_REPLACE;
        routerExe(data);
    }

    /*
     input:
     data:json={
     f_name:string
     f_params:json
     f_type:string 1=>push,2=>replace
     }
     */
    function routerExe(data) {
        var f_name = data['f_name'];
        var f_params = data['f_params'];
        var f_type = data['f_type'];
        var obj;

        if (f_params == undefined)
            f_params = {}

        obj = {
            name: f_name,
            params: {
                F_DATA: f_params,
            }
        }

        if (f_type == TYPE_ROUTER_PUSH)
            router.push(obj);
        else if (f_type == TYPE_ROUTER_REPLACE)
            router.push(obj);
    }

    /*
     input:
     data:json={
     f_num:int  defalt -1
     }
     */
    function go(data) {
        var num = -1
        if (data != undefined)
            num = data['f_num'];
        router.go(num);
    }

    /*
     input:
     data:json={
     array:json array=[
     {
     name:string,
     componet:.vue class
     }
     ]
     }
     out:router array
     */
    function configRouter(data) {
        var array = data['array'];
        var rArray = []
        array.forEach(function (obj) {
            var name = obj['name'];
            var component = obj['component'];
            var ob = {
                path: "/" + name + "/:F_DATA?",
                name: name,
                component: component,
            }
            rArray.push(ob);
        })

        return rArray;
    }

    function setJsonRouter(value) {
        jsonRouter = value;
    }

    return {
        install: install,
        configRouter: configRouter,
        setJsonRouter: setJsonRouter,
    }
}

var ggRouter = router();

export {
    VueRouter,
    ggRouter
}