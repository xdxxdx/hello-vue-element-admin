/** When your routing table is too long, you can split it into small modules **/

// 系统管理路由

import Layout from '@/layout'

const DictionaryRouter = {
  path: '/dictionary',
  component: Layout,
  redirect: '/dictionary/province',
  name: '数据字典',
  alwaysShow: true,
  meta: {
    title: '数据字典',
    icon: 'table'
  },
  children: [
    {
      path: 'province',
      component: () => import('@/views/dictionary/province'),
      name: '省份管理',
      meta: { title: '省份管理' }
    },
    {
      path: 'city',
      component: () => import('@/views/dictionary/city'),
      name: '城市管理',
      meta: { title: '城市管理' }
    },
    {
      path: 'house',
      component: () => import('@/views/dictionary/house'),
      name: '小区管理',
      meta: { title: '小区管理' }
    },
    {
      path: 'launchpoint',
      component: () => import('@/views/dictionary/launchpoint'),
      name: '投放点管理',
      meta: { title: '投放点管理' }
    },
    {
      path: 'bag',
      component: () => import('@/views/dictionary/bag'),
      name: '环保袋管理',
      meta: { title: '环保袋管理' }
    }
  ]
}
export default DictionaryRouter
