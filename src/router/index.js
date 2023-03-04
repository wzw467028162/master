//引入vue和vue-router
import Vue from "vue";
import VueRouter from "vue-router";
//use一下
Vue.use(VueRouter)

//引入路由组件
import Home from '@/views/Home'
import User from '@/views/User'
import Main from '../views/Main.vue' 
import Mall from '../views/Mall.vue'
import PageOne from '@/views/PageOne'
import PageTwo from '@/views/PageTwo'

//写路由器配置
export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/home', //重定向
            component:Main,
            children:[
                {   
                    name:'home',
                    path:'home',  //首页
                    component:Home
                },
        
                {
                    name:'user',
                    path:'user',  //用户管理
                    component:User
                },

                {
                    name:'mall',
                    path:'mall',  //商品管理
                    component:Mall
                },

                {
                    name:'page1',
                    path:'Page1',  //页面1
                    component:PageOne
                },

                {
                    name:'page2',
                    path:'Page2',  //页面2
                    component:PageTwo
                }
            ]
            
        },
        
    ]
})