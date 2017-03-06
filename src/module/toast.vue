<template>
    <div class="page-toast">
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
    // import { Toast } from 'mint-ui';
    import  Vue from 'vue'
    import toast from '../lib/toast/toast'

    Vue.use(toast);

    export default {
        methods: {
            openToast() {
                Vue.mToast.show({
                    f_message: '1111'
                });
            },
            openToastWithIcon() {
                Vue.mToast.show("2222");
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