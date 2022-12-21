<template>
    <div class="">
      <div>
        <nav class="flex justify-between">
          <div class="flex flex-nowrap gap-4">
              <button @click="toggleMenu">
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
              <ul id="menuIcon" class="absolute sm:w-[60%] sm:gap-4 sm:static sm:h-auto top-12 mx-auto left-8 bg-white h-2/3 w-2/3 sm:flex
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
const menu = ref(false)

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
  let tag = document.getElementById('menuIcon')
  tag.classList.toggle('hidden')
}

</script>

<style>

</style>
