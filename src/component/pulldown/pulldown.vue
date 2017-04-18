<template>
    <div>
        <mt-loadmore :top-method="loadTop"  :bottom-all-loaded="allLoaded" @top-status-change="handleTopChange" ref="loadmore">
            <!--<slot name="item"></slot>-->
            <div slot="top" class="mint-loadmore-top">
                <slot name="top">
                    <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
                    <span v-show="topStatus === 'loading'">Loading...</span>
                </slot>
            </div>

            <ul style="min-height: 300px">
                <slot name="items">
                    <span>123123</span>
                </slot>
            </ul>
        </mt-loadmore>
    </div>


</template>
<style>

</style>
<script>
    import {Context} from "../../lib/context/context";

    let context=new Context();
    let src={
        name:'gg-pull-down',
        data(){
            return{
                topStatus: '',
            }
        },
        watch:{

        },
        methods:{
            loadTop(){
                if(this.pullDown){
                    this.pullDown();
                    console.log("allLoader:"+this.allLoaded);
                }
            },
            handleTopChange(status) {
                this.topStatus = status;
                console.log("status:"+status);
            },
            onCompleteRefresh:function(){
                this.$refs.loadmore.onTopLoaded();
            }
        },
        props:{
            allLoaded:{
                default:true
            },
            pullDown:{
                default:undefined,
            },
            cmd:{
                defalut:-100,
            }
        }
    }

    context.fill(context,src);
    export default context;
</script>
