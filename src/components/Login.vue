<template>
  <div class="bg-blue-200 fixed w-full h-full flex justify-center items-center">
    <form class="bg-blue-900 w-80 h-80 rounded-3xl flex justify-center items-center">
      <label>Email</label>
      <input type="text">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, et.</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
