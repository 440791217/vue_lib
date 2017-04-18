<template>
    <div class="page-toast">
        <gg-header>

        </gg-header>
        <h1 class="page-title">Toast</h1>

        <div class="page-toast-wrapper" id="mark" v-if="exist">
        </div>

        <mt-button @click.native="openToast" size="large" id="aa">点击弹出 Toast</mt-button>
        <mt-button @click.native="openToastWithIcon" size="large">点击弹出带有 icon 的 Toast</mt-button>
        <mt-button @click.native="openBottomToast" size="large">自定义 Toast 位置</mt-button>

    </div>
</template>

<style>

</style>

<script type="text/babel">

    var a=1;
    var mark;
    function eventHandler() {
        console.log('event add:'+a++);
        mark=document.getElementById('mark');
        if(mark){
            console.log('defined');
            mark.addEventListener('aaaa', markevent);
        }else{
            console.log("undefined");
        }
    }

    function markevent() {
        console.log("mark 1");
    }
    console.log('event a');
    document.addEventListener('aaaa', eventHandler);

    export default {
        data(){
            return {
                exist:true,
            }
        },
        mounted:function(){

        },
        methods: {
            openToast() {
//                this.ggToast.show({
//                    f_message: '1111' + this.ggMoment("20160102", "YYYYMMDD").format("YYYY-MM-DD"),
//                });
                var event = document.createEvent('HTMLEvents');  //调用document对象的 createEvent 方法得到一个event的对象实例。
                event.initEvent("aaaa", true, true);

                if(mark){
                    console.log('mark is defined');
                }else{
                    console.log('mark is undefined');
                }

                mark.dispatchEvent(event);
            },
            openToastWithIcon() {
//                this.ggToast.show("2222");
                this.exist=false;
            },
            openBottomToast() {
                // Native
                var event = document.createEvent('HTMLEvents');  //调用document对象的 createEvent 方法得到一个event的对象实例。
                event.initEvent("aaaa", true, true);
                document.dispatchEvent(event);
            }
        }
    };
</script>