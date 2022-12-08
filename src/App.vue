<template>
    <div>
      <nav class="bg-gray-800 text-2xl text-white text-center p-5 sticky top-0 w-screen flex flex-row">
        <router-link :to="{ name: 'home' }" class="font-bold mr-2 px-4 py-1 rounded-xl" >Home</router-link> |
        <router-link :to="{ name: 'about' }" class="font-bold mx-2 px-2 py-1 rounded-xl">About</router-link> | 
        <router-link :to="{ name: 'login' }" class="font-bold px-4 py-1 ml-2 mr-2 rounded-xl">Login</router-link> | 
        <router-link :to="{ name: 'signUp' }" class="font-bold px-4 py-1 ml-2 rounded-xl">Register</router-link>
        <button class="" @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
      </nav>
      <router-view />
    </div>
</template>

<script setup>
import { onMounted, ref } from "@vue/reactivity"

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";

const isLoggedIn = ref(false)

onMounted(() => {
  let auth = getAuth
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


nav a.router-link-exact-active {
  color: black;
  background: white;
}
nav button a.router-link-exact-active {
  color: black;
  background: white;
}

</style>
