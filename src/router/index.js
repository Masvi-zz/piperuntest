import Vue from 'vue';
import Router from 'vue-router';
import axios from '../config/axios'
import VueAxios from 'vue-axios'

import Login from '@/components/Login';
import Home from '../components/Home';
import CreateActivities from '../components/CreateActivities';

Vue.use(Router);
Vue.use(VueAxios, axios)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/create',
      name: 'CreateActivities',
      component: CreateActivities,
    },
    {
      path: '/create/:id/edit',
      name: 'create.edit',
      component: CreateActivities
    },
  ]
})