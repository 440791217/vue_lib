<template>
    <div id="app" >
        <div v-for="(item,index) in options">

                <mt-button size="large" type="danger" @click="go(item)" v-if="index%2==0">{{item.value}}</mt-button>
                <mt-button size="large" type="primary" @click="go(item)" v-if="index%2!=0">{{item.value}}</mt-button>

        </div>
    </div>
</template>

<script>
    import {Context} from '../lib/context/context'

    var context=new Context();

    var options = [
        {
            value: 'httpClient',
            text: 'httpClient',
        },
        {
            value: 'toast',
            text: 'toast',
        },
        {
            value: 'header',
            text: 'header'
        },
        {
            value: "pull_down",
            text: "pull_down",
        },
        {
            value: "component",
            text: "component",
        },
        {
            value: "component1",
            text: "component1",
        },
        {
            value: "Activity",
            text: "Activity",
        },
        {
            value: "nav",
            text: "nav",
        },
        {
            value: 'router',
            text: "router",
        },
        {
            value:'stars',
            text:'stars',
        },
        {
            value:'rating',
            text:'rating',
        },
        {
            value:'store',
            text:'store',
        },
        {
            value:'storage',
            text:'storage'
        }
    ]

    context.name='app';
    context.data=function(){
        return {
            msg: 'Welcome to Your Vue.js App',
            options: options,
        }
    }
    context.methods={
        go(item){
            this.ggRouter.push({
                f_name:item.value,
                f_params:{
                    a:1,
                }
            });
        }
    }
    context.computed={
        count:function () {
            return this.store.state.count;
        }
    }

    context.onResume=function(context){
        this.Logger.e("haha");
        this.Logger.i("haha");
        this.Logger.d("haha");
    }

    export default context;

    // 现在，应用已经启动了！
//    export default {
//        name: 'app',
//        data () {
//            return {
//                msg: 'Welcome to Your Vue.js App',
//                options: options,
//            }
//        },
//        methods:{
//            go(item){
//                this.ggRouter.push({
//                   f_name:item.value
//                });
//            }
//        },
//        mounted:function(){
//
//        }
//    }


</script>

<style>



</style>
