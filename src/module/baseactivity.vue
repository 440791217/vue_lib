<template>
    <div>

        <gg-header :title=ggnav.title>

            <p slot="right"></p>
        </gg-header>
    </div>
</template>
<style>

</style>
<script>


    export default{
        data(){
            return{
                msg:'hello1 vue',
                ggnav:{
                    title:undefined
                }
            }
        },
        methods:{
            onBack(){
                this.Logger.d("onback test");
                this.ggRouter.go();

            }
        },
    }
</script>
