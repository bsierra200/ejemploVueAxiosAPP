import FormData from './pages/FormData.vue'
import PrintData from './pages/PrintData.vue'
import Details from './pages/Details.vue'

export const routes = [
    {path:'/', component:FormData},
    {path:'/print', component:PrintData},
    {path:'/details/:index', component:Details}
]