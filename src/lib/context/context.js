/**
 * Created by mark on 2017/3/30.
 */

function Context() {

    var that = {
        myself:this,
        contextId: Context.prototype.contextId += 1,
        isDebug: Context.prototype.isDebug,
        beforeCreate: beforeCreate,
        created: created,
        beforeMount: beforeMount,
        mounted: mounted,
        beforeDestroy: beforeDestroy,
        destroyed: destroyed,
        generateId: generateId,
        fill:fill,
        routeParams:undefined,
    }

    function beforeCreate() {
        if (that.isDebug) {
            console.log('beforeCreate context id:' + that.contextId);
        }
        if(that.onBeforeCreate)
            that.onBeforeCreate.call(this,that);
    }

    function created() {
        if (that.isDebug) {
            console.log('created context id:' + that.contextId);
        }

        if(this.$route&&this.$route.params){
            that.routeParams=this.$route.params.F_DATA;
        }else{
            that.routeParams={}
        }

        if(that.onCreated)
            that.onCreated.call(this,that);
    }

    function beforeMount() {
        if (that.isDebug) {
            console.log('beforeMount context id:' + that.contextId);
        }
        if(that.onBeforeMount){
            that.onBeforeMount.call(this,that);
        }
    }

    function mounted() {
        if (that.isDebug) {
            console.log('mounted context id:' + that.contextId);
        }
        if (that.onMounted)
            that.onMounted.call(this,that);
    }

    function beforeDestroy() {
        if (that.isDebug) {
            console.log('beforeDestroy context id:' + that.contextId);
        }
        if(that.onBeforeDestroy){
            that.onBeforeDestroy.call(this,that);
        }
    }

    function destroyed() {
        if (that.isDebug) {
            console.log('destroyed context id:' + that.contextId);
        }
        if(that.onDestroyed)
            that.onDestroyed.call(this,that);
    }

    /*
    custom life cycle
     */

    function onBeforeCreate(context) {

    }

    function onCreated(context) {

    }

    function onBeforeMount(context) {

    }

    function onMounted(context) {

    }

    function onBeforeDestory(context) {

    }

    function onDestoryed(context) {

    }


    /*

     */

    function generateId() {
        var id = "guoguangId:" + (Context.prototype.serialId += 1);
        return id;
    }

    /*
    utils
     */
    function fill(dst,src){
        for(var key in src){
            dst[key]=src[key]
        }
    }


    return that;
}

Context.prototype = {
    contextId: 0,
    serialId: 0,
    isDebug: true,
}

// Context.bb=1;
// var d=new Context();
// console.log("bb:"+Context.bb);
// console.log("prototype bb:"+Context.prototype.bb);
// console.log("dd bb:"+d.bb);

export {
    Context as Context
};
