import Index from './views/Index'
import Datail from "./views/Datail"
const routers = [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path:'/Index/:id',
      name:'Datail',
      component:Datail
    }
  ]
export default routers