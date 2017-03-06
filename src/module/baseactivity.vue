<template>
    <div>

        <base-activity :title=ggnav.title>
            <p slot="right"></p>
        </base-activity>
    </div>
</template>
<style>

</style>
<script>
    import Activity from "../component/baseactivity.vue"

    export default{
        data(){
            return{
                msg:'hello vue',
                ggnav:{
                    title:"bb崽大人"
                }
            }
        },
        components:{
            'base-activity':Activity
        }
    }
</script>
