<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div id="app">
        <select v-model="selected" v-on:change='onChange(selected)'>
            <option v-for="option in options" v-bind:value="option.value">
                {{ option.text }}
            </option>
        </select>
        <span>Selected: {{ selected }}</span>

        <p>
            <!-- 使用 router-link 组件来导航. -->
            <!-- 通过传入 `to` 属性指定链接. -->
            <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
            <!--<router-link to="/testhttp">test http</router-link>-->
            <!--<router-link to="/helloworld">hello world</router-link>-->
            <!--<div v-for="option in options">-->
            <!--<router-link to={{option.value}} >{{option.text}}</router-link>-->
            <!--</div>-->

        </p>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
    </div>
</template>

<script>

import Vue from 'vue'
import VueRouter from 'vue-router'
var options=[
    {
        value:'httpClient',
        text:'httpClient',
    },
    {
        value:'toast',
        text:'toast',
    },
    {
        value:'header',
        text:'header'
    },
    {
        value:"pull_down",
        text:"pull_down",
    },
    {
        value:"component",
        text:"component",
    },
    {
        value:"component1",
        text:"component1",
    },
    {
        value:"Activity",
        text:"Activity",
    },
    {
        value:"nav",
        text:"nav",
    }
]
    var router=new VueRouter();
function onChange(selected){

    router.push('/'+selected);
}


// 现在，应用已经启动了！
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      options:options,
      selected:'httpClient',
      onChange:onChange,
    }
  }
}




</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}




</style>
