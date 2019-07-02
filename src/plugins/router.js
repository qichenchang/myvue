import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//import 会静态编译  require 动态编译
import Home from '../pages/Home.vue'
import Follow from '../pages/Follow.vue'
import Column from '../pages/Column.vue'
import User from '../pages/User.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import Detail from '../pages/Detail.vue'
import ErrorPage from '../components/ErrorPage.vue'

let routes = [
  {path:'/home',component:Home},
  {path:'/follow',component:Follow},
  {path:'/Column',component:Column},
  {path:'/user',component:User},
  {path:'/login',component:Login},
  {path:'/reg',component:Reg},

  {path:'/detail/:aid',name:'detail',component:Detail},
  /* {path:'/detail',component:Detail,children:[
    {path:':id',component:Detail}
  ]}, */
  {path:'/',redirect:'/home'},
  {path:'*',component:ErrorPage}
];

let router = new VueRouter({
  routes
});

export default router;
