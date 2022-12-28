<template>
    <div class="">
      <div class="sticky top-0 bg-slate-300 shadow-xl px-5 py-2">
        <nav class="flex justify-between">
          <div class="flex flex-nowrap gap-4">
            <a href="#">
              <span>
                Jey's Hospital
              </span>
            </a>
          </div>
          <div class="flex flex-row-reverse md:flex-row md:justify-between gap-6 w-[60%]">
            <div>
              <button @click="toggleMenu" class="md:hidden justify-end">
                <span>
                 menu
                </span>
               </button>
              <ul id="menuIcon" :class="{'hidden': menu}" class="absolute px-5 py-2 rounded-2xl md:gap-4 md:static md:h-auto h-screen w-full top-[100%] mx-auto left-0 bg-slate-200 md:flex
               md:justify-center dark:bg-slate-400">
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
import { defineComponent, onMounted, ref } from "vue"

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
