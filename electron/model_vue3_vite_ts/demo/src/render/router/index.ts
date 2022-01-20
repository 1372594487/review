import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home.vue')
    },


]
const router = createRouter({
    history: createWebHashHistory(), // localhost:8080/
    routes
})
export default router