/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const userRouter = {
  path: '/user',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'User',
  meta: {
    title: '用户',
    icon: 'table'
  },
  children: [
    {
      path: 'basis-user-table',
      component: () => import('@/views/user/basisUserTable'),
      name: 'BasisUserTable',
      meta: { title: '普通用户' }
    },
    {
      path: 'vip-user-table',
      component: () => import('@/views/user/vipUserTable'),
      name: 'VipUserTable',
      meta: { title: '会员用户' }
    }
  ]
}
export default userRouter
