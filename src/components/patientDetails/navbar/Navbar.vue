<template>
  <nav class="flex justify-between sticky top-0 bg-slate-300 shadow-xl px-5 py-2">
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
        <ul id="menuIcon" :class="{'hidden': hideMenu}" class="absolute px-5 py-2 md:rounded-2xl
         md:gap-4 md:static md:h-auto h-screen 
         w-full top-[100%] mx-auto left-0 bg-slate-200 md:flex
          dark:bg-slate-400">
          <li><router-link
            :to="{ name: 'home' }" class="">Home
          </router-link></li>
          <li><router-link
            :to="{ name: 'patientDetails' }" class="">Patient Details
          </router-link></li>
          <li><router-link
            :to="{ name: 'about' }" class="">About
          </router-link></li>
        </ul>
      </div>
      <div>
        <button v-if="!isLoggedIn" class="btn"
        ><router-link :to="{ name: 'login' }" class="" v-if="!isLoggedIn"
        >Login
        </router-link></button>

        <button
        v-else class="btn"
        @click="handleSignOut">Sign Out
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref, watch, watchEffect } from "vue"
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "../../../router";
import { useRoute } from "vue-router";

const isLoggedIn = ref(false)
const hideMenu = ref(true)

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
  hideMenu.value = !hideMenu.value
}

const route = useRoute()
watch(
  route,
  () => hideMenu.value = true
)



</script>

<style>

</style>