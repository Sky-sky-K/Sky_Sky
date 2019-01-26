export default [
  {
    path:"/shop",
    component:() => import('./views/Shop')
  },
  {
    path:"/food",
    component:() => import('./views/shops_list.vue')
  },
  {
    path:"/1",
    component:() => import('./views/demo.vue')
  },
  { 
    path:"/profile",
    component:() => import('./views/profile/profile.vue'),
    children:[
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
    path:"/forget",
    component:()=> import('./views/Forget.vue')
  }
]