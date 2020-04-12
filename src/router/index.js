import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/boards',
  },
  {
    path: '/boards',
    name: 'Boards',
    component: Home,
  },
  {
    path: '/boards/:board_id',
    name: 'Board',
    component: () =>
      import(/* webpackChunkName: "board" */ '../views/Board.vue'),
    children: [
      {
        path: 'tasks/:task_id',
        name: 'Task',
        component: () =>
          import(/* webpackChunkName: "task" */ '../views/Task.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
