//配置路由
import {
    Dashboard,
    Companies,
} from './pages'

const routes = [{
    path: '/dashboard',
    component: Dashboard,
    title: 'Dashboard',
    isNav: true,
}, {
    path: '/companies',
    component: Companies,
    title: 'Companies',
    isNav: true,
}]

export default routes