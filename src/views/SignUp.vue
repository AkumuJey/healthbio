<template>
  <div class="w-full h-full">
      <div class="w-inline-grid sm:w-1/2 mx-auto rounded-3xl text-sm">
        <form @submit.prevent="signupRequest" class="bg-blue-200 p-5 rounded-xl mt-5">
          <label for="email" class="">Enter Email:</label>
          <input v-model="email" type="email" name="email" id="email" class="w-full rounded-xl shadow-2xl focus:outline-none p-2">
          <label for="password" class="">Enter Password:</label>
          <input v-model="password" type="password" name="password" id="password" class="w-full rounded-xl shadow-2xl focus:outline-none p-2">
          <button type="submit" class="bg-blue-800 hover:bg-blue-600 p-2 w-full my-4 rounded-xl text-white">Register</button>
          <button @click="signInWithGoogle">Sign In With Google</button>
          <div class="">
            <router-link :to="{ name: 'login' }" class="p-2 text-center text-white block bg-blue-800 hover:bg-blue-600 rounded-xl">Sign in</router-link>
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