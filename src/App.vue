<template>
  <login v-if="login" @click="loginSuccess"/>
  <nav class="bg-black text-white">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<script>
import Login from '@/components/Login.vue'

export default {
  name: 'HomeView',
  components: {
    Login
  },
  data() {
    return{
      login: false
    }
  },
  methods: {
    loginSuccess() {
      return this.login = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
nav a.router-link-exact-visited {
  background-color: blue;
  color: white;
}
</style>
