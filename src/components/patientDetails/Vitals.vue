<template>
    <div>
      <div>
          <h1>Vitals</h1>
          <button @click="num++" class="p-2 bg-blue-500 mx-auto block">{{ num }}</button>
          <p v-if="typing">Typing...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from "vue";
  
  const num = ref(0)
  const typing = ref(false)
 
  watch(num, () => typing.value = true)

 
  </script>
  
  <style>
  
  </style>