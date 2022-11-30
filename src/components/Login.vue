<template>
  <div class="bg-black fixed w-full h-full flex justify-center items-center" v-if="!signUp">
    <div class="bg-white p-5 rounded-3xl w-96 h-96">
      <form @submit.prevent class="bg-blue-200 p-5 rounded-3xl m-5">
        <label for="email" class="text-left block">Email:</label>
        <input id="email" type="text" class="w-full bg-white mb-5 rounded-2xl p-3" required>
        <label for="password" class="text-left block text-left">Password: </label>
        <input id="password" type="password" class="w-full bg-white mb-5 rounded-2xl p-3" required>
        <button type="submit" class="bg-blue-800 px-3 py-1 rounded-2xl text-white w-full mb-5">Login</button>
      </form>
      <div class="flex flex-row justify-evenly content-evenly">
        <button type="submit" class="bg-blue-800 px-3 py-1 rounded-2xl text-white">Forgot Password</button>
        <button type="submit" class="bg-blue-800 px-3 py-1 rounded-2xl text-white" @click="createAccount">Sign Up</button>
      </div>
    </div>
  </div>
  <div v-if="signUp">
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, animi?</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      signUp : false
    }
  },
  methods: {
    createAccount() {
      return this.signUp = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
