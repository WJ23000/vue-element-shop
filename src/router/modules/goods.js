/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const goodsRouter = {
  path: '/goods',
  component: Layout,
  redirect: '/table/complex-table',
  name: 'Goods',
  meta: {
    title: '商品',
    icon: 'table'
  },
  children: [
    {
      path: 'goods-table',
      component: () => import('@/views/goods/goodsTable'),
      name: 'GoodsTable',
      meta: { title: '商品列表' }
    },
    {
      path: 'order-table',
      component: () => import('@/views/goods/orderTable'),
      name: 'OrderTable',
      meta: { title: '订单列表' }
    }
  ]
}
export default goodsRouter
