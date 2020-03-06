import Login from '@/views/login/Login'
import Index from '@/views/admin/dashboard/Index'
import List from '@/views/admin/products/List'
import Edit from '@/views/admin/products/Edit'
import PageNotFound from '@/views/others/404'

export const mainRoutes = [
  {
    path:"/login",
    component:Login
  },
  {
    path:"/404",
    component:PageNotFound
  }
]
export const adminRoutes = [
  {
    path:"/admin/dashboard",
    component:Index,
    isShow:true,
    title:'看板',
    icon:'area-chart'
  },
  {
    path:"/admin/products",
    component:List,
    exact:true,
    title:'商品管理',
    icon:'shop'
  },
  {
    path:"/admin/products/edit/:id?",
    component:Edit
  },
]