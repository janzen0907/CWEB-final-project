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
    path: '/browse',
    name: 'browse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BrowseVehiclesView.vue'),
  },
  /** *******   Add route item for Student View  ********* */
  {
    path: '/sell',
    name: 'sell',
    component: () => import('../views/SellView.vue'),
  },
  /** *******   Add route item for Product View  ********* */
  {
    path: '/myinfo',
    name: 'myinfo',
    component: () => import('../views/MyInfoView.vue'),
  },
];


const router = new VueRouter({
  mode: 'history',
  routes,

});

// router.beforeEach((to, from, next) => {
//   const { isAuthenticated } = router.app.$store.getters;
//
//   if (!isAuthenticated) {
//     router.app.$bvModal.show('modal-1');
//   } else {
//     next();
//   }
// });
export default router;
