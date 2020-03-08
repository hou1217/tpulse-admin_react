import Login from '@/views/login/Login'
import Index from '@/views/admin/dashboard/Index'
import ActivityType from '@/views/admin/products/activityType'
import ActivityList from '@/views/admin/products/activityList'
import ActivityEdit from '@/views/admin/products/activityEdit'
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
    path:"/admin/huodong",
    exact:true,
    title:'活动管理',
    icon:'shop',
    children:[
      {
        path:"/admin/activityType",
        component:ActivityType,
        exact:true,
        title:'活动类型',
        icon:'shop',
      },
      {
        path:"/admin/activityList",
        component:ActivityList,
        exact:true,
        title:'活动列表',
        icon:'shop',
      },
    ]
  },
  {
    path:"/admin/activity/edit/:id?",
    component:ActivityEdit
  },
]