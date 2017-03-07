<template>
    <mt-header v-bind:title=title>

        <p slot="left">
            <slot name="left">
                <mt-button icon="back">

                </mt-button>
            </slot>
        </p>

        <p slot="right">
            <slot name="right">

            </slot>
        </p>
        <!--<mt-button icon="more" slot="right"></mt-button>-->
    </mt-header>
</template>
<style>

</style>
<script>

    export default{
        data(){
            return{
                msg:"2"
            }
        },
        props:["title"]
    }
</script>
