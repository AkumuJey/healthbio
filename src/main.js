import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
// import 'flowbite'
import { plugin, defaultConfig } from '@formkit/vue'

import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBM9tULdFzQbNnPaqbNahwKR5LYgr7yF6Y",
  authDomain: "health-bio.firebaseapp.com",
  projectId: "health-bio",
  storageBucket: "health-bio.appspot.com",
  messagingSenderId: "489449702574",
  appId: "1:489449702574:web:1b65f4ec20be14a950993f"
};


const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const mainApp = createApp(App)

mainApp.use(plugin, defaultConfig)
mainApp.use(
  router
  )
mainApp.mount('#app')


// createApp(App).use(
//   router, plugin, defaultConfig
//   ).mount('#app')
