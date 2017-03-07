<template>
    <div>

        <mt-button @click.native="getInput" size="large" type="danger">getInput</mt-button>
    </div>
</template>
<style>

</style>
<script>


    export default{
        data(){
            return{
                msg:'hello Nav'
            }
        },
        methods:{
            getInput() {
                this.ggNav.getInput();
            }
        }
    }
</script>
