<template>
   <div class="bg-slate-50 w-full h-full p-5 sm:p-10" v-if="!details">
      <div class="w-full p-5 sm:w-1/2 h-auto bg-slate-300 mx-auto rounded-3xl">
         <form @submit.prevent="confirmDetails">
            <label for="fname" class="block text-left m-2">FIRST NAME:</label>
            <input id="fname" type="text" class="w-full rounded p-2 bg-blue-50 focus:bg-white" required placeholder="First Name" v-model="fname">
            <label for="sname" class="block text-left m-2">SECOND NAME:</label>
            <input id="sname" type="text" class="w-full rounded p-2 bg-blue-50 focus:bg-white" required placeholder="Second Name" v-model="sname">
            <label for="Lname" class="block text-left m-2">LAST NAME:</label>
            <input  id="Lname" type="text" class="w-full rounded p-2 bg-blue-50 focus:bg-white" required placeholder="Last Name" v-model="lname">
            <label for="emali" class="block text-left m-2">EMAIL:</label>
            <input id="emali" type="email" class="w-full rounded p-2 bg-blue-50 focus:bg-white" required placeholder="example@email.com" v-model="email">
            <button type="submit" class="bg-gray-800 py-2 px-5 rounded my-3 text-white">SAVE</button>
         </form>
      </div>
      <div>
         <p class="block">FIRST NAME: {{ fname }}</p>
         <p class="block">SECOND NAME: {{ sname }}</p>
         <p class="block">LAST NAME: {{ lname }}</p>
         <p class="block">EMAIL: {{ email }}</p>
      </div>
   </div>
 </template>
 <script setup>
 import { ref } from 'vue';
 
 const welcome = ref('Hello World')
 const fname = ref('')
 const sname = ref('')
 const lname = ref('')
 const email = ref('')

const details = false
const confirmDetails = () => {
   details = false
}

 </script>