<template>
    <mt-header v-bind:title=title fixed>

        <p slot="left">
            <slot name="left">
                <mt-button @click="back" icon="back">

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
        name: 'gg-header',
        data(){
            return {
                msg: "2",
            }
        },
        methods: {
            back(){
                if (this.onBack == undefined) {
                    this.ggRouter.go();

                } else {

                    this.onBack();
                }
            }
        },
        props: {
            title: {
                default: ""
            },
            onBack: {

            }
        }
    }
</script>
