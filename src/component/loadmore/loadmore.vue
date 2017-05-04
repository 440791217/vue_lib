<template>
    <div>
        <mt-loadmore :topMethod="loadTop"
                     :bottomAllLoaded="isAllLoaded"
                     @top-status-change="handleTopChange"
                     :topDistance="topDistance"
                     ref="loadmore"
                     :bottomMethod="loadBottom"
                     @bottom-status-change="handleBottomChange"
                     :autoFill="false">

            <div slot="top" class="mint-loadmore-top">
                <slot name="top">
                    <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
                    <span v-show="topStatus === 'loading'">Loading...</span>
                </slot>
            </div>

            <ul style="min-height: 300px">

                <slot name="items">

                </slot>
            </ul>

            <div slot="bottom" class="mint-loadmore-bottom">
                <slot name="bottom">

                    <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">
                        ↑
                    </span>
                    <div class="gg flex justify-content-center">
                         <span v-show="bottomStatus === 'loading'">
                            <mt-spinner type="fading-circle"></mt-spinner>
                        </span>
                    </div>

                </slot>

            </div>
        </mt-loadmore>
    </div>


</template>
<style>

</style>
<script>
    import {Context} from "../../lib/context/context";

    let context = new Context();
    let src = {
        name: 'gg-load-more',
        data(){
            return {
                list: [],
                rows: 20,
                page: -1,
                allLoaded: true,
                topStatus: '',
                bottomStatus: '',
                topLoadStatus: "idle",
                refreshStatus:"ok",
            }
        },
        watch: {},
        computed: {
            isAllLoaded: function () {
                return this.allLoaded || this.topLoadStatus == 'loading';
            }
        },
        methods: {
            loadTop(){
                this.topLoadStatus = 'loading';
                this.list = [];
                this.page = -1;
                this.refreshStatus="ok";

                if(this.refreshUpdate){
                    this.refreshUpdate();
                }

                this.send(this, 1);
            },
            handleTopChange(status) {
                this.topStatus = status;
                if (this.topStatus == 'loading') {
                    this.topLoadStatus = 'loading';
                } else {
                    this.topLoadStatus = 'idle';
                }
                console.log("top status:" + status);
            },
            loadBottom(){
                this.topLoadStatus = 'loading';
                    this.send(this, 2);

            },
            handleBottomChange(status) {
                this.bottomStatus = status;
                console.log("bottom status:" + status);
            },
            onCompleteRefresh() {
                setTimeout(() => {
                    this.$refs.loadmore.onTopLoaded();
                }, 1000);
            },
            onCompleteLoad() {
                setTimeout(() => {
                    this.$refs.loadmore.onBottomLoaded();
                }, 1000);
            },
            concat(dst, src) {

                if (src == undefined) {
                    this.allLoaded = true;
                } else {
                    dst = dst.concat(src);
                    if (src.length < this.rows) {
                        this.allLoaded = true;
                    } else {
                        this.allLoaded = false;
                    }
                    this.page = this.page - src.length;
                }
                return dst;
            },
            send(context, type) {

                switch (type) {
                    case 1:
                        break;
                    case 2:
                        break;
                    default:
                        break;
                }

                this.HttpClient.post(gun());

                function gun() {

                    var seq,cmd;

                    function succ(body) {

                        var listBody=body[context.suffix];

                        if(context.handBody){
                            that.handBody(body);
                        }else{
                            context.list = context.concat(context.list, listBody.recs);
                        }


                    }

                    function error(body) {

                        if(type==1){
                            context.refreshStatus="error";
                        }

                    }

                    function then() {

                        if (context.topStatus == 'loading') {
                            context.onCompleteRefresh();
                        }

                        if (context.bottomStatus == 'loading') {
                            context.onCompleteLoad();
                        }

                    }

                    cmd={

                    }

                    for(var key in context.cmd){
                        if(seq){
                            seq=seq+","+key;
                        }else{
                            seq=key;
                        }
                        cmd[key]=context.cmd[key];
                    }

                    cmd[context.suffix].page=context.page;
                    cmd[context.suffix].rows=context.rows;
                    cmd['seq']=seq;



                    return {
                        f_suffix: "mutx",
                        f_content: cmd,
                        f_callback: {
                            succ: succ,
                            error: error,
                            then: then,
                        }
                    }


                }
            }
        },
        props: {
            cmd: {
                default: undefined,
            },
            id: {
                default: undefined,
            },
            topDistance: {
                default: 100,
            },
            suffix:{
                default:undefined,
            },
            handBody:{
                default:undefined
            },
            refreshUpdate:{
                default:undefined
            }


        },
    }

    context.fill(context, src);
    export default context;
</script>
