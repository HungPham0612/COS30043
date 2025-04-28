import { createRouter, createWebHashHistory } from 'vue-router'

//Layouts
import JobLayout from '@/components/layouts/JobLayout.vue'
import FormLayout from '@/components/layouts/FormLayout.vue'
import ToDoLayout from '@/components/layouts/ToDoLayout.vue' 

// Pages
import JobOverview from '@/components/pages/JobExplorer/JobOverview.vue'
import JobDetail from '@/components/pages/JobExplorer/JobDetail.vue'
import ToDoList from '@/components/pages/ToDoList/ToDoList.vue'
import ApplicationForm from '@/components/pages/ApplicationForm/ApplicationForm.vue' 

const routes = [
  { path: '/', redirect: '/explorer/overview' },

  {
    path: '/explorer',
    component: JobLayout,
    children: [
      { path: 'overview', component: JobOverview },
      { path: 'job/:id', component: JobDetail }
    ]
  },

  {
    path: '/form',
    component: FormLayout,
    children: [
      { path: '', component: ApplicationForm }
    ]
  },

  {
    path: '/todo',
    component: ToDoLayout,
    children: [
      { path: '', component: ToDoList }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router