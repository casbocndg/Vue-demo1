import Vue from 'vue'
import Router from 'vue-router'
import AddOrder from "../components/order/AddOrder";
import EditOrder from "../components/order/EditOrder";
import Home from "../components/Home";
import Login from "../components/user/Login";
import OrderManager from "../components/order/OrderManager";
import DeleteOrder from "../components/order/DeleteOrder";
import Register from "../components/user/Register";
import Person from "../components/user/Person";

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/person',component: Person},
    {
      path:'/orderManager',
      component: OrderManager,
      children:[
        {path: '/add', component: AddOrder},
        {path: '/edit', component: EditOrder},
        {path: '/delete', component: DeleteOrder}
      ]
    }
  ]
})
