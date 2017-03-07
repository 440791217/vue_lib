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
    import Activity from "../component/header/header.vue"

    export default{
        data(){
            return{
                msg:'hello1 vue',
                ggnav:{
                    title:"b2b崽大人"
                }
            }
        },
        components:{
            'base-activity':Activity
        }
    }
</script>
