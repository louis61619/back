import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router';
import axios from 'axios'

//引入文件
const Product = () => import('../views/product/Product.vue')
const Series = () => import('../views/series/Series')
const Employee = () => import('../views/employee/Employee')
const Member = () => import('../views/member/Member')



Vue.use(Router)

//創建VueRouter對象
const routes = [
  {
    path: '/',
    redirect: '/product'

  },
  {
    path: '/product',
    component: Product
  },
  {
    path: '/series',
    component: Series
  },
  {
    path: '/employee',
    component: Employee
  },
  {
    path: '/member',
    component: Member
  }


]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
})


export default router;
