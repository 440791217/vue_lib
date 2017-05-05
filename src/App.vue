<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
</template>

<script>

    // 现在，应用已经启动了！
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
//                selected: 'httpClient',
//                onChange: onChange,
            }
        },
        computed:{
            getPath(name){
                return "/"+name;
            }
        },
        mounted(){
            this.ggRouter.push({
                f_name:'index',
                f_params:{
                    a:1,
                }
            });
        }
    }


</script>

<style>



</style>
