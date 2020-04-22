/** When your routing table is too long, you can split it into small modules **/

// 会员管理

import Layout from '@/layout'

const memberRouter = {
  path: '/member',
  component: Layout,
  redirect: '/member/list',
  name: 'Member',
  alwaysShow: true,
  meta: {
    title: '会员管理',
    icon: 'table'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/member/user'),
      name: '会员列表',
      meta: { title: '会员列表' }
    }
  ]
}
export default memberRouter
