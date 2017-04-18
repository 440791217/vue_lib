/**
 * Created by mark on 2017/3/30.
 */

function Context() {

    var that = {
        contextId: Context.prototype.contextId += 1,
        isDebug: Context.prototype.isDebug,
        beforeCreate: beforeCreate,
        created: created,
        beforeMount: beforeMount,
        mounted: mounted,
        beforeDestroy: beforeDestroy,
        destroyed: destroyed,
        generateId: generateId,
        onStart:onStart,
        onResume: onResume,
        onPause: onPause,
        fill:fill,
    }

    function beforeCreate() {
        if (that.isDebug) {
            console.log('beforeCreate context id:' + that.contextId);
        }
    }

    function created() {
        if (that.isDebug) {
            console.log('created context id:' + that.contextId);
        }
        if(that.onStart)
            that.onStart.call(this);
    }

    function beforeMount() {
        if (that.isDebug) {
            console.log('beforeMount context id:' + that.contextId);
        }
    }

    function mounted() {
        if (that.isDebug) {
            console.log('mounted context id:' + that.contextId);
        }
        if (that.onResume)
            that.onResume.call(this,that);
    }

    function beforeDestroy() {
        if (that.isDebug) {
            console.log('beforeDestroy context id:' + that.contextId);
        }
        if(that.onPause){
            that.onPause.call(this);
        }
    }

    function destroyed() {
        if (that.isDebug) {
            console.log('destroyed context id:' + that.contextId);
        }
        if(that.onStop)
            that.onStop.call(this);
    }

    /*
     custom life cycle
     */
    function onStart(context) {

    }

    function onStop(context) {

    }

    function onResume(context) {
    }

    function onPause(context) {
    }

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


export {
    Context as Context
};
