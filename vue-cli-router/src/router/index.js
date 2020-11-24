import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/components/Table/index'
import Button from '@/components/Button/index'
import Function from '@/components/Function/index'
import Lodash  from '@/components/Lodash/index'
import Table_1 from '@/components/Table/index_1'
import Echarts from '@/components/Echarts/index.vue'
import EchartsK from '@/components/Echarts/test1'
import Count from '@/components/Count/index'
import Slot from '@/components/Slot/index'


Vue.use(Router)

export default new Router({
  mode:'history',//history路径不带#，hash带#
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
    },
    {
      path: '/Table_1',
      name: 'Table_1',
      component: Table_1
    },
    {
      path: '/Echarts',
      name: 'Echarts',
      component: Echarts
    },
    {
      path: '/EchartsK',
      name: 'EchartsK',
      component: EchartsK
    },
    {
      path: '/Count',
      name: 'Count',
      component: Count
    },
    {
      path: '/Slot',
      name: 'Slot',
      component: Slot
    },
  ]
});
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
