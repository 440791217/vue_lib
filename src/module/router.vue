<template>
    <div>
        <gg-header >

        </gg-header>
        <mt-button @click="push"  size="large">测试 push</mt-button>
        <mt-button @click="back" size="large">返回上一页</mt-button>
    </div>
</template>
<style>

</style>
<script>

    export default{
        data(){
            return{
                msg:'he1l123lo vue'
            }
        },
        methods:{
            back:function () {
               this.ggRouter.go();
            },
            push:function () {
                this.ggRouter.push({
                    f_name:'httpClient'
                });
            }
        },
        components:{

        }
    }
</script>
