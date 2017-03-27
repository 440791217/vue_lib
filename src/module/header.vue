<template>

        <!--<gg-header >-->

        <!--</gg-header>-->

        <gg-pull-down>

        </gg-pull-down>

</template>
<style>

</style>
<script>
    import ggRefreshLayout from '../component/loadmore/loadmore.vue'

    export default{
        data(){
            return{
                msg:'hello vue 123123'
            }
        },
        methods:{
            loadTop(id) {
                this.$broadcast('onTopLoaded', id);
            }
        },
        components:{
//            ggRefreshLayout:ggRefreshLayout
        }
    }
</script>

<!--<template>-->
    <!--<div class="page-loadmore">-->
        <!--&lt;!&ndash;<h1 class="page-title">Pull down</h1>&ndash;&gt;-->
        <!--&lt;!&ndash;<p class="page-loadmore-desc">在列表顶端, 按住 - 下拉 - 释放可以获取更多数据</p>&ndash;&gt;-->
        <!--&lt;!&ndash;<p class="page-loadmore-desc">此例请使用手机查看</p>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">&ndash;&gt;-->

        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--<mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">-->
            <!--<ul class="page-loadmore-list">-->
                <!--&lt;!&ndash;<li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>&ndash;&gt;-->
            <!--</ul>-->
            <!--<div slot="top" class="mint-loadmore-top">-->
                <!--<span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>-->
                <!--<span v-show="topStatus === 'loading'">-->
                    <!--<mt-spinner type="snake"></mt-spinner>-->
                <!--</span>-->
            <!--</div>-->
        <!--</mt-loadmore>-->
    <!--</div>-->
<!--</template>-->


<!--<script type="text/babel">-->
    <!--export default {-->
        <!--data() {-->
            <!--return {-->
                <!--list: [],-->
                <!--topStatus: '',-->
                <!--wrapperHeight: 0-->
            <!--};-->
        <!--},-->
        <!--methods: {-->
            <!--handleTopChange(status) {-->
                <!--this.topStatus = status;-->
            <!--},-->
            <!--loadTop() {-->
                <!--setTimeout(() => {-->
                    <!--let firstValue = this.list[0];-->
                    <!--for (let i = 1; i <= 10; i++) {-->
                        <!--this.list.unshift(firstValue - i);-->
                    <!--}-->
                    <!--this.$refs.loadmore.onTopLoaded();-->
                <!--}, 1500);-->
            <!--}-->
        <!--},-->
        <!--created() {-->
            <!--for (let i = 1; i <= 20; i++) {-->
                <!--this.list.push(i);-->
            <!--}-->
        <!--},-->
        <!--mounted() {-->
            <!--this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;-->
        <!--}-->
    <!--};-->
<!--</script>-->
