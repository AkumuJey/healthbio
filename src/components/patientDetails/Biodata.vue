<template>
  <div class="w-full h-full">
    <div class="w-full max-w-4xl mx-auto my-5 p-5 bg-slate-200 shadow-2xl">
      <form @submit.prevent="">
        <div class="grid grid-cols-4 gap-x-4 p-4">
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
        <div class="p-4">
          <div class="inline-block mr-2">
            <label for="sex">SEX</label>
            <select name="sex" id="sex" class="p-1 border-2 border-slate-800 rounded-xl">
              <option value="sex" selected disabled>Sex</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <div class="inline-block ml-2">
            <label for="birthdate">Date of Birth</label>
            <input type="date" id="birthdate" class="p-1 border-2 border-slate-800 rounded-xl">
          </div>
        </div>
        <div class="grid grid-cols-9 p-4">
          <h1 class="col-span-9 text-2xl font-bold uppercase">Referring Physician Details</h1>
          <div class="col-span-1 p-2">
              <select name="title" id="title" class="p-1 border-2 border-slate-800 rounded-xl">
                <option value="title" selected disabled>Title</option>
                <option value="dr">Dr.</option>
                <option value="nurse">Nurse</option>
                <option value="other">Other</option>
              </select>
          </div>
          <div class="relative p-2 col-span-4">
            <input type="text" id="hfname" name="hfname" class="outline-none peer w-full border-2 border-slate-800 rounded-xl px-2 py-1">
            <label for="hfname" class="absolute left-5 top-2 opacity-50 cursor-text peer-focus:text-xs peer-focus:-translate-y-1/2 peer-focus:opacity-100 transition-all duration-500 uppercase bg-transparent peer-focus:bg-white">First Name</label>
          </div>
          <div class="relative p-2 col-span-4">
            <input type="text" id="hlname" name="hlname" class="outline-none peer w-full border-2 border-slate-800 rounded-xl px-2 py-1">
            <label for="hlname" class="absolute left-5 top-2 opacity-50 cursor-text peer-focus:text-xs peer-focus:-translate-y-1/2 peer-focus:opacity-100 transition-all duration-500 uppercase bg-transparent peer-focus:bg-white">Last Name</label>
          </div>
        </div>
        <div>
          <label for="residence" class="">Residence</label>
          <input type="text" id="residence" name="residence" autocomplete="off" class="p-1 border-2 border-slate-800 rounded-xl">
          <label for="occupation">Occupation</label>
          <input type="occupation" id="occupation" name="occupation" autocomplete="off" class="p-1 border-2 border-slate-800 rounded-xl">
          <label for="phone">Phene Number:</label>
          <input type="phone" id="phone" name="phone" autocomplete="off" class="p-1 border-2 border-slate-800 rounded-xl">
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";


</script>

<style>

</style>