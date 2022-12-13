<template>
  <div class="w-full h-full">
      <div class="w-inline-grid sm:w-1/2 mx-auto rounded-3xl text-sm">
        <form @submit.prevent="signupRequest" class="bg-blue-200 p-5 rounded-xl mt-5">
          <label for="email" class="">Enter Email:</label>
          <input v-model="email" type="email" name="email" id="email" class="w-full rounded-xl shadow-2xl focus:outline-none p-2">
          <label for="password" class="">Enter Password:</label>
          <input v-model="password" type="password" name="password" id="password" class="w-full rounded-xl shadow-2xl focus:outline-none p-2">
          <button type="submit" class="bg-blue-800 hover:bg-blue-600 p-2 w-full my-4 rounded-xl text-white">Register</button>
          <div class="flex place-content-center justify-center">
            <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"  @click="signInWithGoogle">
              <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
              Sign in with Google
            </button>
          </div>
          <div class="">
            <router-link :to="{ name: 'login' }" class="p-2 text-center text-white block bg-blue-800 hover:bg-blue-600 rounded-xl">Already have an account?</router-link>
          </div>
        </form>  
      </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import {
  getAuth, 
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref('');
const password = ref('')
const router = useRouter()

const signupRequest = () => {
   createUserWithEmailAndPassword(getAuth(), email.value, password.value).then(
    (data) => {
      console.log('Successfully Registered');
     router.push('/login')
    }
   ).catch((error) => {
    alert(error.message)
   })
}

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
  .then((result) => {
    console.log(result.user);
    router.push('/')
  }).catch(
    (error) => {

    }
  )
}

</script>

<style>

</style>