export default [
  {
    path:"/shop",
    component:() => import('./views/Shop'),
    children:[
      {
        path:"/shop",
        components:{
          shop:() => import('./components/shop/Shop-shop'),
          text:() => import('./components/shop/Shop-text')
        }
      }
    ]
  }
]