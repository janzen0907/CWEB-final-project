import Vue from 'vue';
import VueRouter, { RouteConfig} from 'vue-router';
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
    component: () => import('../views/BrowseVehiclesView.vue'),
  },
  {
    path: '/sell',
    name: 'sell',
    component: () => import('../views/SellView.vue'),
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

export default router;
