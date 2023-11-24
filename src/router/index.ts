import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  /** *******   Add route item for Student View  ********* */
  {
    path: '/student',
    name: 'Student',
    component: () => import('../views/StudentView.vue'),
  },
  /** *******   Add route item for Product View  ********* */
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/ProductView.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
