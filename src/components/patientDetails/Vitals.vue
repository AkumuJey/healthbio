<template>
    <div>
      <div>
          <h1>Vitals</h1>
          <button @click="num++" class="p-2 bg-blue-500 mx-auto block">{{ num }}</button>
          <input type="text" v-model="entry">
          <p v-if="typing">Typing...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from "vue";
  
  const num = ref(0)
  const entry = ref('')
  const typing = ref(false)
 
  watch(entry, async (newValue, oldValue) => {
    if (newValue > oldValue) {
      typing.value = true 
    }
    setTimeout(() => typing.value = false, 2000)
     })

 
  </script>
  
  <style>
  
  </style>