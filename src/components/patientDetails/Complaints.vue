<script setup>
import { ref, watch } from "vue";
const complaints = ref({
  symptoms: 'fff',
  duration: 6
})
const formData = ref({
  username: "jose@gmail.com",
  password: "******"
})
const handleSubmit = (data) => {
  console.log(data)
}
const typing = false
watch( () => complaints.symptoms,
(newValue, oldValue) => console.log(newValue, oldValue))


</script>
<template>
    <div>
      <div>
          <FormKit type="form" :value="formData">
            <h1>Login</h1>
            <FormKit type="text" label="Username" name="username"/>
            <FormKit type="text" label="Password" name="password"/>
          </FormKit>
          <FormKit type="form" :value="complaints" @submit="handleSubmit">
            <h1>Login</h1>
            <FormKit type="text" label="Symptoms" name="symptoms"/>
            <FormKit type="text" label="Duration" name="duration"/>
          </FormKit>
          <p v-if="typing">Typing.....</p>
          <p>{{ complaints.symptoms }}</p>
      </div>
    </div>
  </template>
 
  
  <style>

  </style>