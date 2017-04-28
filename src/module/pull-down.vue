<template>
    <div>
        <gg-header>

        </gg-header>
        <div class="gg page-main">
            <!--<mt-button type="default" @click="go">go</mt-button>-->
            <gg-load-more ref="refresh">
                <div slot="items">
                    <div v-if="init">
                        <div v-for="(item,index) in $refs.refresh.list" style="font-size: 20px;">
                            {{index}}-{{item.F_NAME}}
                        </div>
                    </div>

                </div>
            </gg-load-more>
        </div>

    </div>
</template>

<style>

</style>

<script type="text/babel">

    import {Context} from '../lib/context/context'

    var context = new Context();
    context.data = function () {
        return {
            init:false,
            list: [],
            topStatus: '',
            handlers: {},
            wrapperHeight: 0,
            msg: '1222234333433',
        }
    };
    context.methods = {
        pullDown: function () {
            JS(this).onRefresh();
        },
        pullUp: function () {
            JS(this).onLoad();
        },
        go:function(){
            this.ggRouter.push({
                f_name:'header',
            })
        }
    }
    context.onMounted = function (context) {
        this.$refs.refresh.rows = 20;
        console.log("msg:" + context.contextId);
        this.init=true;
    }

    context.onBeforeDestroy=function(context){
        this.init=false;
    }

    function JS(context) {

        function onRefresh() {
            context.list = [];
            context.$refs.refresh.page = -1;
            context.HttpClient.post(a015(1));
        }

        function onLoad() {
            context.HttpClient.post(a015(2));
        }

        function a015(type) {
            function succ(body) {
                context.list = context.$refs.refresh.concat(context.list, body.recs)
            }

            function then() {
                if (type == 1) {
                    context.$refs.refresh.onCompleteRefresh();
                } else if (type == 2) {
                    context.$refs.refresh.onCompleteLoad();
                }

            }

            var cmd = {
                rows: context.$refs.refresh.rows,
                page: context.$refs.refresh.page,
            }

            return {
                f_suffix: 'a015',
                f_content: cmd,
                f_callback: {
                    succ: succ,
                    then: then,
                }
            }
        }

        return {
            onRefresh: onRefresh,
            onLoad: onLoad
        }
    }

    export default context;
</script>