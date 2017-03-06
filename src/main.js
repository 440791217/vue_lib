import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import testhttp from './module/http.vue'
import testtoast from './module/toast.vue'
import testheader from './module/header.vue'
import pull_down from './module/pull-down.vue'
import textComponent from './module/component.vue'
import textComponent1 from './module/component1.vue'
import Activity from './module/baseactivity.vue'
import Nav from './module/nav.vue'

Vue.use(MintUI);
Vue.use(VueRouter);

// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '/httpClient', component:testhttp },
    { path: '/toast', component: testtoast },
    { path: '/header',component:testheader},
    { path:'/pull_down',component:pull_down},
    { path:'/component',component:textComponent},
    { path:'/component1',component:textComponent1},
    { path:'/Activity',component:Activity},
    { path:'/nav',component:Nav},
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

//
new Vue({
  router,
  el: '#app',
  render: h => h(App)
}).$mount('#app')


