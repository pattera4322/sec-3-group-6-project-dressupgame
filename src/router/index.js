import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Finish from '../views/Finish.vue'
import Play from '../views/Play.vue'

const history = createWebHistory()
const routes = [
    { 
      path: '/', 
      name: 'Home', 
      component: Home 
    },
    { 
      path: '/Finish', 
      name: 'Finish', 
      component: Finish
    },
    { 
      path: '/Play/:whatGender', 
      name: 'Play', 
      component: Play
    }
  
]
  
  const router = createRouter({ history, routes })
  export default router
  