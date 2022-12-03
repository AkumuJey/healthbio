<template>
 <div>
  <Login @click="display" v-if="login"/>
 </div>
</template>

<script setup>
import { defineComponent } from 'vue';
import Login from '@/components/Login.vue'


const components = defineComponent(Login)
const login = true
function display (){
 login = false
}


</script>

<style>

</style>