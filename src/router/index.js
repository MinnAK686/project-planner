import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProject from '../views/AddProject.vue'
import UpdateProject from '../views/UpdateProject.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-project',
    name: 'add-project',
    component: AddProject
  },
  {
    path: '/projects/update-project/:id',
    name: 'update-project',
    component: UpdateProject,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFound
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
