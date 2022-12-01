<template>
  <div class="w-full h-full">
      <!-- <Login /> -->
      <PatientDetails />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import PatientDetails from '@/components/PatientDetails.vue'

export default {
  name: 'HomeView',
  components: {
    Login, PatientDetails
  }
}
</script>
