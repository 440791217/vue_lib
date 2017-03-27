<template>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">

    </mt-loadmore>
</template>
<style>

</style>
<script>

    export default{
        name:'gg-refresh-layout',
        data(){
            return{

            }
        },
        methods:{
            loadTop(){

            },
            loadBottom(){

            },
        },
        props:{
            allLoaded:{
                default:true
            }
        }
    }
</script>
