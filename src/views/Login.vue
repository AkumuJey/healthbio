<template>
    <div class="grid h-full w-full bg-white">
        <div class="w-inline-grid sm:w-1/2 mx-auto rounded-3xl text-sm">
          <form action="#" class="bg-blue-200 p-5 rounded-xl">
            <label for="email" class="">Enter Email:</label>
            <input type="email" name="email" id="email" class="w-full rounded-xl shadow-2xl focus:outline-none p-2">
            <label for="password" class="">Enter Password:</label>
            <input type="password" name="password" id="password" class="w-full rounded-xl shadow-2xl focus:outline-none p-2">
            <button type="submit" class="bg-blue-800 hover:bg-blue-600 p-2 w-full my-4 rounded-xl text-white">Sign In</button>
            <div class="grid grid-flow-col text-white">
              <button class="bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-xl self-start">Forgot Password</button>
              <button class="bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-xl place-self-end">Sign Up</button>
            </div>
          </form>  
        </div>
    </div>
</template>

<script setup>


</script>

<style>

</style>