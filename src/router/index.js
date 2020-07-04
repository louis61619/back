import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router';

//引入文件
const Product = () => import('../views/product/Product.vue')
const Series = () => import('../views/series/Series')



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
  }

]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
})


export default router;
