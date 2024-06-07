//配置路由
import {
    Dashboard,
    Companies,
} from './pages'

const routes = [{
    path: '/dashboard',
    component: Dashboard,
    title: 'React',
    isNav: true,
}, {
    path: '/companies',
    component: Companies,
    title: 'Project',
    isNav: true,
}]

export default routes