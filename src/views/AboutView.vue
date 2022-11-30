<template>
  <div>
    <div>
     <form>
        <label for="fname"></label>
        <input type="text" id="fname" :v-model="fname">
        <label for="sname"></label>
        <input type="text" id="sname" :v-model="sname">
        <label for="lname"></label>
        <input type="text" id="lname" :v-model="lname">
     </form>
     </div>
  </div>
 </template>
 
<script setup>
import { ref } from 'vue';

const fname = ref('')
const sname = ref('')
const lname = ref('')


</script>
 
<style scoped>
 
</style>