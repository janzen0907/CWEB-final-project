import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import store from '@/store';

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
  {
    path: '/sell',
    name: 'sell',
    component: () => import('../views/SellView.vue'),
    // uncomment this when we want to lock the page. thiw 2ill
    // meta: { requiresAuth: true },
  },
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

router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const { isAuthenticated, user } = store.getters;

    if (!isAuthenticated || !user) {
      // Save the intended route before redirecting to login
      store.commit('setIntendedRoute', to.fullPath);
      // Redirect to the login page
      router.app.$bvModal.show('modal-1');
    } else {
      // User is authenticated, proceed to the route
      next();
    }
  } else {
    // For routes that do not require authentication, proceed
    next();
  }
});


export default router;
