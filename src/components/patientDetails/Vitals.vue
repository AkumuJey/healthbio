<template>
    <div>
      <div>
          <h1>Vitals</h1>
          <button @click="num++" class="p-2 bg-blue-500 mx-auto block">{{ num }}</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const num = ref(0)
  </script>
  
  <style>
  
  </style>