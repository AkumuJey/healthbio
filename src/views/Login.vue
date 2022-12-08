<template>
    <div class="grid h-full w-full bg-white">
      <div class="w-inline-grid sm:w-1/2 mx-auto rounded-3xl text-sm mt-5">
        <form id="signin-form" @submit.prevent="signInRequest" class="bg-blue-200 p-5 rounded-xl">
          <label for="email" class="">Email:</label>
          <input type="email" v-model="email" name="email" id="email" class="w-full rounded-xl shadow-2xl focus:outline-none p-2">
          <label for="password" class="">Password:</label>
          <input type="password" v-model="password" name="password" id="password" class="w-full rounded-xl shadow-2xl focus:outline-none p-2">
          <p v-if="errMsg" class="text-red-700">{{ errMsg }}</p>
          <button type="submit" class="bg-blue-800 hover:bg-blue-600 p-2 w-full my-4 rounded-xl text-white">Login</button>
          <div class="grid grid-flow-col text-white">
            <router-link  class="p-2 text-center block bg-blue-800 hover:bg-blue-600 rounded-xl text-white" :to="{name : 'signUp'}">Register</router-link>
          </div>
        </form>  
      </div>
    </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref('');
const password = ref('')
const router = useRouter()
const errMsg = ref(null)

const signInRequest = () => {
   signInWithEmailAndPassword(getAuth(), email.value, password.value).then(
    (data) => {
      console.log('Successfully Signed in');
     router.push('/')
    }
   ).catch((error) => {
    console.log(error.code);
    switch (error.code) {
      case 'auth/invalid-email':
        errMsg.value = 'Invalid Email'
        break;
      case "auth/user-not-found":
        errMsg.value = 'User not found'
      case "auth/wrong-password":
        errMsg.value = 'Incorrect Password'
      default:
        errMsg.value = 'Email or password was incorrect'
        break;
    }
   })
}

</script>

<style>

</style>