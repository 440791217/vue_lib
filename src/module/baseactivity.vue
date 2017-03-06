<template>
    <div>

        <div>123123</div>
        <base-activity></base-activity>
    </div>
</template>
<style>

</style>
<script>
    import Activity from "../component/baseactivity.vue"

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            'base-activity':Activity
        }
    }
</script>
