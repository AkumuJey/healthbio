<template>
    <div class="">
      <nav>
        <div class="">
            <a href="#" class="flex items-center">
                <span class="">Jey's Hospital</span>
            </a>
            <div class="">
                <router-link :to="{ name: 'login' }" class="" v-if="!isLoggedIn">Login</router-link>
                <button class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" v-if="isLoggedIn" @click="handleSignOut">Sign out</button>
                <router-link :to="{ name: 'signUp' }" class="">Sign up</router-link>
            </div>
            <div id="mega-menu-icons" class="">
                <ul class="">
                    <li>
                        <router-link :to="{ name: 'home' }" class="">Home</router-link>
                    </li>
                    <li>
                      <router-link :to="{ name: 'about' }" class="">
                        About Us
                      </router-link>
                    </li>
                </ul>
            </div>
        </div>
      </nav>

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


</script>

<style>

</style>
