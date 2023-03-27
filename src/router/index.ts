import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// import localCache from '@/utils/cache'
// import { firstMenu } from '@/utils/map-menus'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'appMain',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue'),
    children: [
      {
        path: '/test',
        name: 'test',
        component: () => import('@/views/main/test/test.vue')
      },
      {
        path: '/three-init',
        name: 'three-init',
        component: () => import('@/views/main/three/three.vue')
      },
      {
        path: '/three-gui',
        name: 'three-gui',
        component: () => import('@/views/main/three/three-gui.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/main/user/index.vue')
      },
      {
        path: '/animal',
        name: 'animal',
        component: () => import('@/views/main/animalPage/index.vue')
      },
      {
        path: '/three-example',
        name: 'threeExample',
        component: () => import('@/views/main/three/index.vue')
      }
    ]
    // children: [] -> 根据userMenus来决定 -> children
    // 子路根据后续用户权限动态添加
    //router.addRoute('main', route)后续用这个添加子路由，
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 导航守卫
router.beforeEach((to) => {
  console.log('dd', to)

  // if (to.path !== '/login') {
  //  const token = localCache.getCache('token')
  //   if (!token) {
  //     return '/login'
  //   }
  // }
  // if (to.path === '/main') {
  //   console.log(firstMenu)
  //   return firstMenu.url
  // }
})

export default router
