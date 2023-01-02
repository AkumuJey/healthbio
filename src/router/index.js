import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'login',
  
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/patientdetails',
    name: 'patientDetails',
    component: () => import('../views/PatientDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach( async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else{
      alert("You need to sign in")
      next('/login')
    }
  } else {
    next()
  }
})
export default router
