import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/components/Table/index'
import Button from '@/components/Button/index'
import Function from '@/components/Function/index'
import Lodash  from '@/components/Lodash/index'

Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/Table',
      name: 'Table',
      component: Table
    },
    {
      path: '/Button',
      name: 'Button',
      component: Button
    },
    {
      path: '/Function',
      name: 'Function',
      component: Function
    },
    {
      path: '/Lodash',
      name: 'Lodash',
      component: Lodash
    }
  ]
});
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
