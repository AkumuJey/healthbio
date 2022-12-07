<template>
    <div class="grid h-full w-full bg-white">
      <div class="w-inline-grid sm:w-1/2 mx-auto rounded-3xl text-sm mt-5">
        <form id="signin-form" @submit.prevent="" class="bg-blue-200 p-5 rounded-xl">
          <label for="email" class="">Enter Email:</label>
          <input type="email" name="email" id="email" class="w-full rounded-xl shadow-2xl focus:outline-none p-2">
          <label for="password" class="">Enter Password:</label>
          <input type="password" name="password" id="password" class="w-full rounded-xl shadow-2xl focus:outline-none p-2">
          <button type="submit" class="bg-blue-800 hover:bg-blue-600 p-2 w-full my-4 rounded-xl text-white">Login</button>
          <div class="grid grid-flow-col text-white">
            <router-link  class="p-2 text-center block bg-blue-800 hover:bg-blue-600 rounded-xl text-white" :to="{name : 'signUp'}">Register</router-link>
          </div>
        </form>  
      </div>
    </div>
</template>

<script setup>


</script>

<style>

</style>