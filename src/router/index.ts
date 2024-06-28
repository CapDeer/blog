import { createMemoryHistory, createWebHashHistory, createRouter } from 'vue-router'

import Layout from '@/layout/index.vue'

const routes = [
    {
        path: '/:w+',
        redirect: '/404'
    },

    {
        path: '/',
        component: Layout,
        redirect: '/index',
        name: '首页',
        children: [
            {
                path: '/index',
                name: 'Index',
                component: () => import('@/pages/index.vue')
            }
        ]
    },

    {
        path: '/404',
        component: () => import('@/pages/404.vue')
    }
]

export const router = createRouter({
    history: import.meta.env.MODE === 'development' ? createWebHashHistory() : createMemoryHistory(),
    routes,
})
