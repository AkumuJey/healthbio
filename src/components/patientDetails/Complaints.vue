<template>
    <div>
      <div>
          <h1>Complaints</h1>
          <button @click="num++" class="p-2 bg-blue-500 mx-auto block">{{ num }}</button>
          <h1>Form Validation</h1>
          <!-- <FormKit type="form">
            <FormKit type="text" label="Name" name="name" class="p-2"/>
            <FormKit type="email" label="Email" name="email" />
            <input type="text">
          </FormKit> -->
      </div>
    </div>
  </template>
 
  <script setup>
  import { ref } from "vue";
 
  
  
  const num = ref(0)
  </script>
  
  <style>

  </style>