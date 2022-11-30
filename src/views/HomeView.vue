<template>
  <div class="w-full h-full">
      <!-- <Login /> -->
      <PatientDetails />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero illo nihil ab voluptas tenetur?</p>
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
