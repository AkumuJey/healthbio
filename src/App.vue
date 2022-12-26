<template>
    <div class="">
      <div class="sticky top-0 bg-slate-300 shadow-xl px-5 py-2">
        <nav class="flex justify-between">
          <div class="flex flex-nowrap gap-4">
              <button @click="toggleMenu" class="sm:hidden">
               <span>
                menu
               </span>
              </button>
            <a href="#">
              <span>
                Jey's Hospital
              </span>
            </a>
          </div>
          <div class="flex sm:justify-around justify-between sm:gap-6 w-[60%]">
            <div>
              <ul id="menuIcon" :class="{'hidden': menu}" class="absolute px-5 py-2 rounded-2xl sm:gap-4 sm:static sm:h-auto top-12 mx-auto left-8 bg-slate-200 sm:flex
               sm:justify-center dark:bg-slate-400">
                <li><router-link :to="{ name: 'home' }" class="">Home</router-link></li>
                <li><router-link :to="{ name: 'patientDetails' }" class="">Patient Details</router-link></li>
                <li><router-link :to="{ name: 'about' }" class="">About</router-link></li>
              </ul>
            </div>
            <div>
              <button v-if="!isLoggedIn" class="btn"><router-link :to="{ name: 'login' }" class="" v-if="!isLoggedIn">Login</router-link></button>
              <button
              v-else class="btn"
              @click="handleSignOut">Sign Out</button>
            </div>
          </div>
        </nav>
      </div>
      <div class="">
        <router-view/>
      </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";

const isLoggedIn = ref(false)
const menu = ref(true)

let auth;
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    }
    else {
      isLoggedIn.value = false
    }
  })
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/login')
  })
}
const toggleMenu = () => {
  menu.value = !menu.value
}

</script>

<style>

</style>
