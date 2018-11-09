<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <HelloWorld></HelloWorld>
  </div>
</template>
<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    components: {
      HelloWorld
    }
  }
</script>
<style>
  img {
    width: 200px;
    height: 200px;
  }
</style>