import site from "./views/site"
import city from "./views/city"
import Index from './views/Index'
export default [
  {
    path: '/',
    name: 'Index',
    component: Index
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
      },
      {
        path:"info",
        component:() => import('./views/profile/Info.vue'),
        children:[
          {
            path:"address",
            component:() => import('./views/profile/Address.vue'),
            children:[
              {
                path:"add",
                component:() => import('./views/profile/Add.vue'),
                children:[
                  {
                    path:"addDetail",
                    component:() => import('./views/profile/AddDetail.vue')
                  }
                ]
              }
            ]
          },
          {
            path:"setusername",
            component:() => import('./views/profile/Setusername.vue')
          }
        ]
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
    path:"/site",
    component:site
  },
  {
    path:'/city',
    component:city
  },
  {
    path:"/food",
    component:() => import('./views/shops_list.vue')
  },
  {
    path:"/forget",
    component:()=> import('./views/Forget.vue')
  }
  
]
