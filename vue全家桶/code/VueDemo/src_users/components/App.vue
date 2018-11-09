<template>
  <div class="container">
    <search :setSearchName="setSearchName"></search>
    <xxx-main :searchName="searchName"></xxx-main>
  </div>
</template>

<script>
  import Search from './Search.vue'
  import Main from './Main.vue'
  export default {

    data () {
      return {
        searchName: ''
      }
    },

    methods: {
      setSearchName (searchName) {
        console.log(this)
        this.searchName = searchName
      }
    },

    components: {
      Search,
      'xxx-main': Main
    }
  }
</script>

<style>

</style>