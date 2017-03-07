<template>
    <div>
        <mt-button  size="large"></mt-button>
        <mt-button @click="back" size="large">返回上一页</mt-button>
    </div>
</template>
<style>

</style>
<script>

    import Vue from "vue"
    import router from "../lib/router/router"
    Vue.use(router);

    function back() {
        Vue.ggRouter.go();
//        Vue.router.go(-1);
//        this.$router.go(-1);
    }

    export default{
        data(){
            return{
                msg:'he1l123lo vue'
            }
        },
        methods:{
            back:back,
        },
        components:{

        }
    }
</script>
