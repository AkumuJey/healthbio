<template>
    <div class="">
      <div>
        <nav class="flex justify-between">
          <div>
            <a href="#">
              <span>
                Jey's Hospital
              </span>
            </a>
          </div>
          <div class="flex sm:justify-around sm:gap-6">
            <div>
              <ul class="sm:flex sm:justify-center">
                <li><router-link :to="{ name: 'home' }" class="">Home</router-link></li>
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
