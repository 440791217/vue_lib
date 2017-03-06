<template>
    <mt-header v-bind:title="msg">
        <router-link to="../" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
</template>
<style>

</style>
<script>


    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
