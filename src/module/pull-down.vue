<template>
    <div>
        <gg-header >

        </gg-header>
        <div class="gg page-main">
            <gg-pull-down :pullDown="pullDown">
                <div slot="items">
                    <span>items</span>
                </div>
            </gg-pull-down>
        </div>

    </div>
</template>

<style>

</style>

<script type="text/babel">

    import {Context} from '../lib/context/context'
//    ggContext();
    var context=new Context();

    context.data=function(){
        return {
            list: [],
            topStatus: '',
            wrapperHeight: 0,
            msg:'1222234333433',
        }
    };

    context.methods={
        pullDown:function(id){
            console.log('pull up success');

        }
    }
    context.onResume=function (context) {
        console.log("msg:"+context.contextId);
    }

    export default context;
</script>