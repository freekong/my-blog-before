import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const Login = () => import("@/views/login/login")
const articleList = () => import("@/views/article/articleList")
const articleGroup = () => import("@/views/article/articleGroup")
const addArticle = () => import("@/views/article/addArticle")
const userList = () => import("@/views/userManage/userList")
// import Login from '@/views/login/login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    title: '登录',
    hidden: true
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    onlyOne: true, // 只有一个子节点
    title: '首页',
    icon: 'el-icon-house'
  },
  {
    path: '/article',
    name: 'Article',
    component: Home,
    title: '文章',
    icon: 'el-icon-tickets',
    children: [
      {
        path: '/articleList',
        name: 'ArticleList',
        title: '文章列表',
        component: articleList
      },
      {
        path: '/articleGroup',
        name: 'ArticleGroup',
        title: '文章分组',
        component: articleGroup
      },
      {
        path: '/addArticle',
        name: 'addArticle',
        title: '添加文章',
        component: addArticle,
        hidden: true
      }
    ]
  },
  {
    path: '/user',
    name: 'User',
    component: Home,
    title: '用户',
    icon: 'el-icon-user',
    children: [{
      path: '/userList',
      name: 'UserList',
      title: '用户列表',
      component: userList
    }]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
