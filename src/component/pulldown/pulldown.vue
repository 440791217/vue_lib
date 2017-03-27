<template>
    <div style="padding: 20px">
        <mt-loadmore :top-method="loadTop"  :bottom-all-loaded="allLoaded" @top-status-change="handleTopChange">
            <!--<slot name="item"></slot>-->
            <ul>

            </ul>
            <div slot="top" class="mint-loadmore-top">
                <slot name="top">
                    <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
                    <span v-show="topStatus === 'loading'">Loading...</span>
                </slot>
            </div>
        </mt-loadmore>
    </div>


</template>
<style>

</style>
<script>

    export default{
        name:'gg-pull-down',
        data(){
            return{
                topStatus: '',
            }
        },
        methods:{
            loadTop(){

            },
            handleTopChange(status) {
                this.topStatus = status;
            },
        },
        props:{
            allLoaded:{
                default:true
            }
        }
    }
</script>
