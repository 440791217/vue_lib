<template>
    <div>

        <div>{{msg}}</div>

    </div>
</template>
<style>

</style>
<script>

    import Vue from "vue"
    import nav from "../lib/nav/nav"

//    Vue.use(nav);

    export default{
        data(){
            return{
                msg:'hello Nav'
            }
        }
    }
</script>
