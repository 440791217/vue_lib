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

                    function succ(body) {
                        context.list = context.concat(context.list, body.recs);
                    }

                    function err(body) {

                    }

                    function then() {

                        if (context.topStatus == 'loading') {
                            context.onCompleteRefresh();
                        }

                        if (context.bottomStatus == 'loading') {
                            context.onCompleteLoad();
                        }

                    }

                    var cmd = {
                        page: context.page,
                        rows: context.rows,
                    }

                    return {
                        f_suffix: 'a015',
                        f_content: cmd,
                        f_callback: {
                            succ: succ,
                            err: err,
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
            }

        },
        onResume: function (context) {

            if (this.id == undefined) {

            }

        }
        ,
        onPause: function (context) {
            if (this.id == undefined) {

            }

        }
    }

    context.fill(context, src);
    export default context;
</script>
