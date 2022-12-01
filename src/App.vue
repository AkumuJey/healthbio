<template>
  <div>
    <div>
      <nav class="bg-slate-400 text-white sticky top-0">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </div>
    <div class="fixed w-full h-full">
      <login />
    </div>
  </div>
  <router-view />
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
      login: true
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
<!-- #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} -->

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: black;
  background: white;
  padding: 10px 20px 10px;
  font-size: 20px;
  border-radius: 10px;
}

nav a.router-link-exact-active {
  color: white;
  background: black;
}
</style>
