<template>
    <div id="example">
        <gg-header >

        </gg-header>
        <div>
            <h1>我是父组件的标题</h1>
            <!--<my-component>-->
            <!--<p slot="a">这是一些初始内容</p>-->
            <!--<p slot="b">这是更多的初始内容</p>-->
            <my-component></my-component>
        </div>
    </div>
</template>
<style>

</style>
<script>

import Vue from 'vue'
import mycomponent from './component1.vue'

    export default{
        data(){
            return{
                msg:'hello vue',

            }
        },
        components:{
           'my-component':mycomponent
        }
    }
</script>
