/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Table',
  meta: {
    title: '用户',
    icon: 'table'
  },
  children: [
    {
      path: 'user-table',
      component: () => import('@/views/table/userTable'),
      name: 'UserTable',
      meta: { title: '用户列表' }
    },
    {
      path: 'goods-table',
      component: () => import('@/views/table/goodsTable'),
      name: 'GoodsTable',
      meta: { title: '商品列表' }
    },
    {
      path: 'order-table',
      component: () => import('@/views/table/orderTable'),
      name: 'OrderTable',
      meta: { title: '订单列表' }
    }
  ]
}
export default tableRouter
