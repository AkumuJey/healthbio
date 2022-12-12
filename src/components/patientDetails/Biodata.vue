<template>
  <div class="bg-slate-400 w-full h-full">
    <div class="w-full max-w-4xl mx-auto my-auto p-5 bg-white">
      <form @submit.prevent="">
        <div class="grid grid-cols-4 bg-blue-400 gap-x-4 p-4">
          <label for="date" class="col-span-4 font-bold text-2xl uppercase">Date and Time:</label>
          <select type="text" name="day" class="rounded-xl p-2">
            <option value="Day">Day</option>
          </select>
          <select type="text" name="month" class="rounded-xl p-2">
            <option value="Month">Month</option>
          </select>
          <select type="text" name="year" class="rounded-xl p-2">
            <option value="Year">Year</option>
          </select>
          <input type="date" class="uppercase rounded-xl p-2 outline-none">
        </div>
        <div class="grid grid-cols-3 gap-4 p-4">
          <h1 class="col-span-3 text-2xl font-bold uppercase">Patient Name</h1>
          <div class="relative p-2">
            <input type="text" id="fname" name="fname" class="outline-none peer w-full border-2 border-slate-800 rounded-xl px-2 py-1">
            <label for="fname" class="absolute left-5 top-2 opacity-50 cursor-text peer-focus:text-xs peer-focus:-translate-y-1/2 peer-focus:opacity-100 transition-all duration-500 uppercase bg-transparent peer-focus:bg-white">First Name</label>
          </div>
          <div class="relative p-2">
            <input type="text" id="sname" name="sname" class="outline-none peer w-full border-2 border-slate-800 rounded-xl px-2 py-1">
            <label for="sname" class="absolute left-5 top-2 opacity-50 cursor-text peer-focus:text-xs peer-focus:-translate-y-1/2 peer-focus:opacity-100 transition-all duration-500 uppercase bg-transparent peer-focus:bg-white">Second Name</label>
          </div>
          <div class="relative p-2">
            <input type="text" id="lname" name="lname" class="outline-none peer w-full border-2 border-slate-800 rounded-xl px-2 py-1">
            <label for="lname" class="absolute left-5 top-2 opacity-50 cursor-text peer-focus:text-xs peer-focus:-translate-y-1/2 peer-focus:opacity-100 transition-all duration-500 uppercase bg-transparent peer-focus:bg-white">Last Name</label>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const num = ref(0)
</script>

<style>

</style>