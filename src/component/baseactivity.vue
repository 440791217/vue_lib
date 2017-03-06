<template>
    <mt-header v-bind:title=title>
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
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

            }
        },
        props:["title"]
    }
</script>
