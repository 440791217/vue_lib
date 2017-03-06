<template>
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
        <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <p slot="right">123123</p>
        <!--<mt-button icon="more" slot="right"></mt-button>-->
    </mt-header>
</template>
<style>

</style>
<script>

    export default{
        data(){
            return{

            }
        },
        components:{

        }
    }
</script>
