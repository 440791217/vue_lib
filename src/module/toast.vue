<template>
    <div class="page-toast">
        <gg-header >

        </gg-header>
        <h1 class="page-title">Toast</h1>
        <div class="page-toast-wrapper">
            <mt-button @click.native="openToast" size="large">点击弹出 Toast</mt-button>
            <mt-button @click.native="openToastWithIcon" size="large">点击弹出带有 icon 的 Toast</mt-button>
            <mt-button @click.native="openBottomToast" size="large">自定义 Toast 位置</mt-button>
        </div>
    </div>
</template>

<style>

</style>

<script type="text/babel">


    export default {
        methods: {
            openToast() {
                this.ggToast.show({
                    f_message: '1111'+this.ggMoment("20160102","YYYYMMDD").format("YYYY-MM-DD"),
                });
            },
            openToastWithIcon() {
                this.ggToast.show("2222");
            },
            openBottomToast() {
                // Toast({
                //     message: '提示信息',
                //     position: 'bottom'
                // });
            }
        }
    };
</script>