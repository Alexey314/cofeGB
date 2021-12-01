import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Delivery from '../views/Delivery.vue';
import Menu from '../views/Menu.vue';
import About from '../views/About.vue';
import Contacts from '../views/Contacts.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: Delivery,
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
