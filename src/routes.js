import site from "./views/site"
import city from "./views/city"
export default [
  {
    path:"/shop",
    component:() => import('./views/Shop')
  },

  // l----路由
  {
    path:'/my',
    component:()=>import("./views/my"),
    children:[
      {
        path:"",
        component:()=>import('./components/my/myloginpage')
      },
      {
        path:'vipcard',
        component:()=>import('./components/my/myvipcard')
      },
      {
        path:'service',
        component:()=>import('./components/my/myservice')
      },
      {
        path:'download',
        component:()=>import('./components/my/mydownload')
      }
    ]
  },
  {
    path:'/login',
    component:()=>import('./views/login')
  },
  {
    path:"/mybalance",
    component:()=>import("./components/my/mybalance")
  },
  {
    path:"/mypoint",
    component:()=>import("./components/my/mypoint")
  },
  {
    path:"/myservicelist",
    component:()=>import("./components/my/myservicelist")
  },
  // l----路由结束
  {
    path:"/",
    component:site
  },
  {
    path:'/city',
    component:city
  }
  
]