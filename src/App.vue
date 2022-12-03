<template>
    <div>
      <nav class="bg-gray-800 text-white text-center p-5 sticky top-0 w-screen">
        <router-link :to="{ name: 'home' }" class="font-bold px-8 py-3 rounded-xl" >Home</router-link> |
        <router-link :to="{ name: 'about' }" class="font-bold px-8 py-3 rounded-xl">About</router-link> | 
        <button class="fixed right-5"><router-link :to="{ name: 'login' }" class="font-bold px-8 py-3 rounded-xl">Login</router-link> </button>
      </nav>
      <router-view />
    </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
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


nav a.router-link-exact-active {
  color: black;
  background: white;
}
nav button a.router-link-exact-active {
  color: black;
  background: green;
}

</style>
