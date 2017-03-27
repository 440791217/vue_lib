import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui';
import ggRouter from "./lib/router/router"
import ggNav from "./lib/nav/nav"
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
import vrouter from './module/router.vue'
import testMenu from './module/menu.vue'
import testPicker from './module/picker.vue'
import testRating from './module/rating.vue'
import log from 'mark_logger'
import ggMoment from './lib/moment/moment'
import './lib/app/app.css'
// import testMenu from 'module/menu.vue'

/*
 log
 */
import gglog from './lib/log/log'
Vue.use(gglog);
Vue.use(MintUI);
Vue.use(VueRouter);
Vue.use(ggMoment);

/*
 toast
 */
import toast from './lib/toast/toast'

Vue.use(toast);

/*
 router
 */
// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来


// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    {name: 'httpClient', component: testhttp},
    {name: 'toast', component: testtoast},
    {name: 'header', component: testheader},
    {name: 'pull_down', component: pull_down},
    {name: 'component', component: textComponent},
    {name: 'component1', component: textComponent1},
    {name: 'Activity', component: Activity},
    {name: 'nav', component: Nav},
    {name: 'router', component: vrouter},
    {name:'index',component:testMenu},
    {name:'stars',component:testPicker},
    {name:'rating',component:testRating},
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    // routes // （缩写）相当于 routes: routes
    routes: ggRouter.configRouter(
        {
            array: routes
        }
    )
})
Vue.use(ggRouter, {router: router});

/*
 nav
 */
Vue.use(ggNav);


/*
 http
 */
import httpClient from './lib/http/http'
import config from './lib/sys/sys'

Vue.use(httpClient);
var that = Vue.prototype.HttpClient;
that.httpUrl = config.site.httpUrl;
log.d("httpClient.httpUrl:" + that.httpUrl)
that.headers = {'Content-Type': 'application/x-www-form-urlencoded'};
that.reqOptions = {
    headers: that.headers
}


// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能

import ggPullDown from './component/pulldown/pulldown.vue'
import ggHeader from "./component/header/header.vue"
import showRatings from "./component/rating/showRatings.vue"
Vue.component(ggPullDown.name,ggPullDown);
Vue.component(ggHeader.name,ggHeader);
Vue.component('show-ratings',showRatings);
//
new Vue({
    router,
    el: '#app',
    render: h => h(App),
})


